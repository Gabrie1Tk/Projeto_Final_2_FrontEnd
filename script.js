//Exemplo Media
function exemploMedia(){

    alert("Seja bem-vindo!");

    let userName = prompt("Insira seu nome:");
        alert("Seu nome é: " + userName);
    let num = parseInt(prompt("Insira a quantidade de números para serem calculados:"));

    let soma = 0;  
    for (let count = 0; count < num; count++){
        let numero = parseInt(prompt("Digite o número:"));
        soma += numero;
    }

    let media = soma / num;

    alert("A média é igual a: " + media);
}


//Exemplo Formulario
function exemploFormulario(){

    document.getElementById('conteudo').innerHTML = `
    <form id="formulario">
        <label for="valor1">Valor 1:</label>
        <input type="text" id="valor1" required><br>

        <label for="valor2">Valor 2:</label>
        <input type="text" id="valor2" required><br>

        <label for="valor3">Valor 3:</label>
        <input type="text" id="valor3" required><br>

        <label for="valor4">Valor 4:</label>
        <input type="text" id="valor4" required><br>

        <label for="valor5">Valor 5:</label>
        <input type="text" id="valor5" required><br></br>

        <button type="submit">Salvar em TXT</button>
    </form>
  `;

    document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const valores = [];
  for (let i = 1; i <= 5; i++) {
    const valor = document.getElementById(`valor${i}`).value.trim();
    if (valor === "") {
      alert(`O campo Valor ${i} está vazio.`);
      return;
    }
    valores.push(valor);
  }

  const conteudo = valores.map((v, i) => `Valor ${i + 1}: ${v}`).join("\n");

  const blob = new Blob([conteudo], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "valores.txt";
  link.click();
});

}



//Exemplo Jogo Numero Secreto

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exemploNumeroSecreto(){
    document.getElementById('conteudo').innerHTML = `
    <h1>Adivinhe o Número Secreto</h1>
    <p>Escolha um número entre 1 a 10</p>
    <input type="number" min="1" max="10">
    <button onclick="verificarChute()">Chutar</button>
    <button id="reiniciar" onclick="reiniciarJogo()" disabled>Novo Jogo</button>
  `;

    exibirMensagemInicial();
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').disabled = true;
}
