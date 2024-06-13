let seuNome = prompt("Por favor, insira o seu nome")

let primeiroNumero = parseInt(prompt(`Olá ${seuNome}! Agora por favor, insira o primeiro número.`));

let segundoNumero = parseInt(prompt(`O primeiro número é ${primeiroNumero}, insira o segundo número.`));

let valorSoma = primeiroNumero+segundoNumero;

alert(`${seuNome}, a soma de ${primeiroNumero} + ${segundoNumero} é igual a ${valorSoma}.`)