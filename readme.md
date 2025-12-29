<img src="./assets/logo.png" width="250">

# 📘 AutoPlan - Auto Lesson Planner

## 📌 Descrição
Aplicação desenvolvida com **ElectronJS** para automação do planejamento de aulas. O sistema disponibiliza uma interface simples onde o professor seleciona a **turma** e a **disciplina**, importa uma **planilha XLSX** contendo os planos de aula e o processo de cadastro é realizado automaticamente no sistema acadêmico do **SENAI**.

A automação reduz significativamente o tempo gasto com tarefas repetitivas, minimizando erros manuais e aumentando a produtividade docente.

---

## 🧠 Objetivo do Projeto
- Automatizar o cadastro de planos de aula
- Reduzir retrabalho e erros de digitação
- Agilizar processos acadêmicos recorrentes
- Apoiar professores na organização pedagógica

---

## 🛠️ Tecnologias Utilizadas
- ElectronJS  
- Node.js  
- Puppeteer  
- Biblioteca para leitura de arquivos XLSX  
- HTML5  
- CSS3  
- JavaScript  

---

## 🖥️ Funcionalidades
- Interface gráfica simples e intuitiva  
- Seleção de turma e disciplina  
- Importação de planilhas XLSX  
- Leitura automatizada dos dados da planilha  
- Preenchimento automático no sistema do SENAI via automação web  

---

## 📂 Estrutura do Projeto (sugestão)
```
AutoPlan/
│
├── assets/
│ ├── icon.png
│ └── logo.png
│
├── services/
| ├── automacao.js
│ └── planilha.js
│
├── index.html
├── main.js
├── preload.js
├── renderer.js
├── README.md
└── package.json
```

---

## 🚀 Status do Desenvolvimento
- [x] Interface inicial do Electron  
- [x] Leitura de planilhas XLSX  
- [x] Automação com Puppeteer  
- [ ] Validação de dados da planilha  
- [ ] Tratamento de erros e logs  
- [ ] Otimização do fluxo de automação  
- [ ] Documentação técnica completa  

---

## ⚙️ Como Executar o Projeto
```bash
npm install
npm start
```
 > Observação: O uso do Puppeteer requer navegador compatível e credenciais válidas no sistema acadêmico.

## 🎓 Contexto de Uso

Projeto desenvolvido para uso interno e educacional, com foco na automação de processos acadêmicos no ambiente SENAI, respeitando fluxos e padrões institucionais.

<div style="display: flex; flex-wrap: wrap;">
    <img src="./assets/prints/image.png" width="250">
    <img src="./assets/prints/image-1.png" width="250">
</div>
<img src="./assets/prints/image-2.png" width="500">