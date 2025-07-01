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