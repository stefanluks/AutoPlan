const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  selecionarPlanilha: () => ipcRenderer.invoke("selecionar-planilha"),
  processarPlanilha: (dados) => ipcRenderer.invoke("processar-planilha", dados),
  iniciarAutomacao: (dados) => ipcRenderer.invoke("iniciar-automacao", dados),
});