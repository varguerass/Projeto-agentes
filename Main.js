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
console.log("Escolha seu agente: ");
for (let i = 0; i < Agentes.length; i++) {
  console.log(`${i + 1} - ${Agentes[i].nome}`);
}

function definirRank(xp) {
  if (xp < 1000) return "Ferro";
  if (1001< xp < 2000) return "Bronze";
  if (2001< xp < 5000) return "Prata";
  if (5001< xp < 7000 ) return "Ouro";
  if (7001 < xp < 8000) return "Platina"
  if (8001< xp < 9001) return "Ascendente"
  if (9001 < xp < 10001) return "Imortal"
  return "Radiante";
}