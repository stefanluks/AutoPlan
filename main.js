const { app, BrowserWindow, ipcMain, Menu, dialog   } = require("electron");
const path = require("path");
const { lerPlanilha } = require("./services/planilha");

const { fazerLogin, selecionarTurma } = require("./services/automacao");
let conteudo = null
Menu.setApplicationMenu(null);

function createWindow() {
    const win = new BrowserWindow({
        width: 350,
        height: 500,
        icon: path.join(__dirname, "assets/icon.png"),
        resizable: false,     // não redimensiona
        maximizable: false,   // desativa maximizar
        minimizable: true,    // pode minimizar
        fullscreenable: false,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });

    win.loadFile("index.html");
}

ipcMain.handle("selecionar-planilha", async () => {
  const result = await dialog.showOpenDialog({
    properties: ["openFile"],
    filters: [
      { name: "Planilhas Excel", extensions: ["xlsx"] }
    ]
  });

  if (result.canceled) {
    return null;
  }

  return result.filePaths[0]; // 👈 caminho REAL
});

ipcMain.handle("processar-planilha", async (_, dados) => {
    if (!dados.caminhoArquivo) {
        throw new Error("Caminho da planilha inválido");
    }
    const lista = lerPlanilha(dados.caminhoArquivo);
    console.log(lista.length+" aulas");
    conteudo = lista;
});

ipcMain.handle("iniciar-automacao", async (_, dados) => {
    const { browser, page } = await fazerLogin(dados);
    let turma_disciplina = dados.turma + " - " + dados.disciplina;
    await selecionarTurma({browser, page, turma_disciplina});
    // aqui depois você continua o fluxo:
    // selecionar turma, mês, inserir aulas...

    return "Login realizado com sucesso";
});

app.whenReady().then(createWindow);
