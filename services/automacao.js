const puppeteer = require("puppeteer");

async function fazerLogin({ cpf, senha }) {
  const browser = await puppeteer.launch({
    headless: false,        // importante para visualizar
    defaultViewport: null,
    args: ["--start-minimized"]
  });

  const page = await browser.newPage();

  await page.goto("https://sge.sistemafieto.com.br/Corpore.Net/Login.aspx", {
    waitUntil: "networkidle2"
  });

  // CPF
  await page.waitForSelector("#txtUser");
  await page.type("#txtUser", cpf, { delay: 50 });

  // Senha
  await page.type("#txtPass", senha, { delay: 50 });

  // Login
  await page.click("#btnLogin");

  // Aguarda redirecionamento
  await page.waitForNavigation({ waitUntil: "networkidle2" });
  
  return { browser, page };
}

async function selecionarTurma({browser, page, turma_disciplina}) {
  // Selecionar diario de classe
  let id = "#ctl18_EDU_EduDiarioClasseActionWeb_LinkControl";
  await page.waitForSelector(id);
  await page.click(id);

  // Aguarda redirecionamento
  await page.waitForNavigation({ waitUntil: "networkidle2" });
  
  // 
  console.log(turma_disciplina);
  await page.evaluate((turma_disciplina) => {
    const el = [...document.querySelectorAll("span, div, td, li")]
      .find(e => e.textContent?.trim().includes(turma_disciplina));

    if (el) el.click();
  });

  let id_plano_aula = "#ctl24_EduToolBarFuncProf1_xbtPlanoAula_CD";
  await page.waitForSelector(id_plano_aula);
  await page.click(id_plano_aula);
}

module.exports = { fazerLogin, selecionarTurma };
