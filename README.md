# 🎮 Sistema de Escolha de Agentes (Node.js)

Projeto em **Node.js** que simula a escolha de agentes inspirados no jogo **Valorant**.  
O usuário seleciona um agente pelo terminal e o sistema retorna o **rank** baseado na quantidade de XP.

Projeto criado com foco em **aprendizado de JavaScript** e **entrada de dados no terminal**.

---

## 📋 Funcionalidades

- Exibe uma lista de agentes disponíveis
- Permite escolher um agente pelo número
- Calcula o rank com base no XP do agente
- Valida opções inválidas
- Interface simples via terminal

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **JavaScript**
- **readline-sync**

---

## 📦 Instalação

### Pré-requisitos
- Ter o **Node.js** instalado
-Instalar a dependência:
npm install readline-sync

▶️ Como Executar

Execute o programa no terminal com:

node Main.js

⚠️ Importante:
Este projeto deve ser executado no terminal.
Ele não funciona em editores online ou apenas clicando em “Run Code”.


🧠 Sistema de Ranks

O rank do agente é definido de acordo com o XP:

XP	Rank
≤ 1000	Ferro
≤ 2000	Bronze
≤ 5000	Prata
≤ 7000	Ouro
≤ 8000	Platina
≤ 9000	Ascendente
≤ 10000	Imortal
> 10000	Radiante
