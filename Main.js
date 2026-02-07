// Importa a biblioteca para ler o que você digita no terminal
const prompt = require('readline-sync').question;

const Agentes = [
  { nome: "Sage", xp: 850 },
  { nome: "Reyna", xp: 2500 },
  { nome: "Clove", xp: 3780 },
  { nome: "Iso", xp: 5000 },
  { nome: "Neon", xp: 5100 },
  { nome: "Omen", xp: 6900 },
  { nome: "Chamber", xp: 8000 },
  { nome: "Cypher", xp: 12000 }
];

console.log("=== Escolha seu agente ===");
for (let i = 0; i < Agentes.length; i++) {
  console.log(`${i + 1} - ${Agentes[i].nome}`);
}

const entrada = prompt("Digite o numero do agente: ");
console.log("Você digitou:", entrada);
const escolha = parseInt(entrada);

const agenteEscolhido = Agentes[escolha - 1];

function definirRank(xp) {
  if (xp <= 1000) return "Ferro";
  if (xp <= 2000) return "Bronze";
  if (xp <= 5000) return "Prata";
  if (xp <= 7000) return "Ouro";
  if (xp <= 8000) return "Platina";
  if (xp <= 9000) return "Ascendente";
  if (xp <= 10000) return "Imortal";
  return "Radiante";
}

if (agenteEscolhido) {
  const nivel = definirRank(agenteEscolhido.xp);
  console.log("--------------------------------------------------");
  console.log(`Você escolheu o agente ${agenteEscolhido.nome}, ele está no nível ${nivel}`);
  console.log("--------------------------------------------------");
} else {
  console.log("Opção inválida! Escolha um número de 1 a 8.");
}