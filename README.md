# 🚀 Projeto Final 2 - Hub de Funcionalidades JavaScript

Este repositório contém o segundo projeto final do módulo de Front-End. Diferente de um site estático comum, este projeto funciona como uma **Aplicação Single Page (SPA)** simplificada, onde o JavaScript é responsável por injetar interfaces e funcionalidades dinamicamente na tela sem recarregar a página.

## 🌐 Demonstração Online

Teste as funcionalidades ao vivo clicando no botão abaixo:

[![Acessar Aplicação](https://img.shields.io/badge/Acessar%20App-GitHub%20Pages-blue?style=for-the-badge&logo=javascript)](https://gabrie1tk.github.io/Projeto_Final_2_FrontEnd/)

> **Link:** https://gabrie1tk.github.io/Projeto_Final_2_FrontEnd/

## 🛠️ Funcionalidades do Projeto

O projeto é dividido em 3 módulos principais, acessíveis através dos botões na tela inicial:

### 1. 📊 Calculadora de Média
Um algoritmo de lógica de programação que interage com o usuário através de `prompts`.
- Solicita a quantidade de números a serem calculados.
- Realiza um loop para capturar cada nota.
- Exibe a média aritmética final através de um alerta.

### 2. 📝 Gerador de Arquivo de Texto (.txt)
Um formulário dinâmico gerado via DOM (`innerHTML`).
- Cria 5 campos de entrada na tela.
- Valida se os campos estão preenchidos.
- **Destaque:** Utiliza a API `Blob` do JavaScript para criar e baixar automaticamente um arquivo **`valores.txt`** contendo os dados digitados pelo usuário.

### 3. 🔢 Jogo do Número Secreto
Um minigame interativo completo.
- O sistema gera um número aleatório entre 1 e 10.
- O usuário tenta adivinhar o número.
- O jogo fornece feedback visual ("O número é maior" ou "O número é menor") a cada tentativa.
- Contabiliza o número de tentativas até o acerto.

## 🚀 Tecnologias e Conceitos Aplicados

* **HTML5 & CSS3:** Estrutura base e estilização.
* **JavaScript (Vanilla):**
    * **Manipulação do DOM:** Uso de `innerHTML` para criar formulários e elementos do jogo dinamicamente.
    * **Event Listeners:** Captura de cliques e envios de formulário (`submit`).
    * **File API:** Geração de arquivos para download no navegador (Blob).
    * **Lógica de Jogos:** Condicionais, loops e geração de números randômicos (`Math.random`).

## 📂 Como Rodar Localmente

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Gabrie1Tk/Projeto_Final_2_FrontEnd.git](https://github.com/Gabrie1Tk/Projeto_Final_2_FrontEnd.git)
    ```
2.  **Abra o arquivo:**
    Execute o arquivo `index.html` no seu navegador.

## Autor

Desenvolvido por **[Gabriel Takao](https://github.com/Gabrie1Tk)**.

---
*Projeto de consolidação de conhecimentos em JavaScript e DOM.*
