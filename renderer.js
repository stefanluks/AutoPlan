let caminhoPlanilha = null;

async function selecionarPlanilha() {
  caminhoPlanilha = await window.api.selecionarPlanilha();

  if (caminhoPlanilha) {
    document.getElementById("arquivo").innerText = "Planilha Selecionada!";
    document.getElementById("arquivo").classList.remove("d-none");
    document.getElementById("arquivo").classList.add("d-flex");
    document.getElementById("arquivo").hidden = false;
  }
}

async function processar() {
  if (!caminhoPlanilha) {
    alert("Selecione a planilha primeiro");
    return;
  }

  const dados = {
    cpf: document.getElementById("cpf").value,
    senha: document.getElementById("senha").value,
    turma: document.getElementById("turma").value,
    disciplina: document.getElementById("disciplina").value,
    mes: document.getElementById("mes").value,
    caminhoArquivo: caminhoPlanilha
  };

  document.getElementById("formu").style.display = "none";
  document.getElementById("load").hidden = false;

  await window.api.processarPlanilha(dados);
  document.getElementById("arquivo").innerText = "Processando Informações da planilha";
  await window.api.iniciarAutomacao(dados);
}
 