const XLSX = require("xlsx");

function limparTextoSeguro(texto) {
  return normalizarTexto(texto)
    ?.replace(/[^\x20-\x7EÀ-ÿ•]/g, "");
}


function normalizarTexto(texto) {
  if (!texto || typeof texto !== "string") return texto;

  let t = texto;

  // 1️⃣ tenta latin1 → utf8
  try {
    t = Buffer.from(t, "latin1").toString("utf8");
  } catch {}

  // 2️⃣ remove caracteres invisíveis comuns (BOM e lixo)
  t = t
    .replace(/\uFFFD/g, "")     // caractere de substituição
    .replace(/\u00C2/g, "")     // lixo comum
    .replace(/\u00A0/g, " ")    // espaço não quebrável
    .replace(/´┐¢/g, "é");      // caso específico recorrente

  // 3️⃣ normaliza Unicode
  t = t.normalize("NFC");

  return t.trim();
}

function lerPlanilha(caminhoArquivo) {
  const wb = XLSX.readFile(caminhoArquivo);
  const sheet = wb.Sheets[wb.SheetNames[0]];

  // header começa na linha do "Nº AULA"
  const dados = XLSX.utils.sheet_to_json(sheet, {
    range: 5, // pula cabeçalho inicial
    defval: ""
  });

  return dados.map(linha => ({
    numeroAula: linha["Nº AULA"],
    capacidades: limparTextoSeguro(linha["Capacidades"]),
    conhecimentos: limparTextoSeguro(linha["Conhecimentos"]),
    inicio: linha["Inicio"],
    fim: linha["Fim"]
  })).filter(a => a.numeroAula);
}

module.exports = { lerPlanilha };
