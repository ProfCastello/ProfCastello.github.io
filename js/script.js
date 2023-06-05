//---------------------------------------------------------------
function obterDados(opt) {
  switch (opt) {
    case "errorResult": {
      return {
        error: document.getElementById("erro"),
        result: document.getElementById("resultado"),
      };
    }
    case "numero": {
      return {
        numero: document.getElementById("num").value,
        error: document.getElementById("erro"),
        result: document.getElementById("resultado"),
      };
    }
    case "num1": {
      return {
        num1: document.getElementById("num1").value,
        error: document.getElementById("erro"),
        result: document.getElementById("resultado"),
      };
    }
    case "num1,2": {
      return {
        num1: document.getElementById("num1").value,
        num2: document.getElementById("num2").value,
        error: document.getElementById("erro"),
        result: document.getElementById("resultado"),
      };
    }
    case "resp": {
      return {
        resp: document.getElementById("resposta"),
      };
    }
    case "palavra": {
      return {
        palavra: document.getElementById("palavra").value,
        error: document.getElementById("erro"),
        result: document.getElementById("resultado"),
      };
    }
  }
}

function exibirResultado(dados) {
  dados.result.style.display = "block";
  dados.error.style.display = "none";
}

function exibirError(dados) {
  dados.result.style.display = "none";
  dados.error.style.display = "block";
}

// Com estas funções, podemos fazer uma chamada em qualquer parte do código
// utilizando somente uma opção dentro da chamada.
// Exemplo de utilização:
//
// let dados = obterDados("numero");
// dados.error.style.display = "none";
// dados.result.style.display = "none";
// dados.result.innerHTML = "";
//---------------------------------------------------------------

function exercicio1() {
  let resp = document.getElementById("resposta");
  resp.innerHTML = "<h2>Resposta da Atividade</h2>";

  for (let i = 1; i <= 10; i++) {
    resp.innerHTML += `#${i} `;
  }
}

function exercicio2() {
  let result = document.getElementById("resultado");
  result.innerHTML = "";
  let numero = document.getElementById("num");
  let error = document.getElementById("erro");
  error.style.display = "none";

  if (numero.value <= 0) {
    error.style.display = "block";
    error.innerHTML = "Erro: Favor informar números positivos diferente de 0.";
  } else {
    for (let i = 0; i <= numero.value; i += 2) {
      result.innerHTML += `#${i} `;
    }
  }
}

function exercicio3() {
  let result = document.getElementById("resultado");
  result.innerHTML = "";

  let numero = document.getElementById("num").value;
  numero = Math.round(numero);

  let error = document.getElementById("erro");
  error.style.display = "none";
  let primo = true;

  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) primo = false;
  }

  if (numero <= 1) primo = false;

  if (primo) {
    result.innerHTML = `O número ${numero} é primo.`;
    exibirResultado(obterDados("errorResult"));
  } else {
    error.innerHTML = `O número ${numero} não é primo.`;
    exibirError(obterDados("errorResult"));
  }
}

function exercicio4() {
  let result = document.getElementById("resultado");
  let numero = document.getElementById("num").value;
  let error = document.getElementById("erro");
  numero = parseInt(numero);
  result.innerHTML = `<h3>Tabuada do ${numero}</h3>`;
  error.style.display = "none";

  if (numero < 0) {
    exibirError(obterDados("errorResult"));
    error.innerHTML = "Favor informar números positivos.";
  } else {
    for (let i = 1; i <= 10; i++) {
      exibirResultado(obterDados("errorResult"));
      result.innerHTML += `${numero}x${i}=${numero * i}<br>`;
    }
  }
}

function exercicio5() {
  let result = document.getElementById("resultado");
  let numero = document.getElementById("num").value;
  let error = document.getElementById("erro");
  numero = parseInt(numero);
  //   result.innerHTML = `<h3>Tabuada do ${numero}</h3>`;
  error.style.display = "none";

  result.innerHTML = "";
  let i = 0;

  if (numero < 0) {
    exibirError(obterDados("errorResult"));
    error.innerHTML = "Favor digitar números positivos.";
  }
  while (i <= numero) {
    if (i % 2 != 0) {
      exibirResultado(obterDados("errorResult"));
      result.innerHTML += `#${i} `;
    }
    i++;
  }
}

function exercicio6() {
  let result = document.getElementById("resultado");
  let numero = document.getElementById("num").value;
  let error = document.getElementById("erro");
  numero = parseInt(numero);
  //   result.innerHTML = `<h3>Tabuada do ${numero}</h3>`;
  error.style.display = "none";

  result.innerHTML = "";
  let i = 0;

  if (numero < 0) {
    exibirError(obterDados("errorResult"));
    error.innerHTML = "Favor digitar números positivos.";
  }

  let soma = 0;

  while (i <= numero) {
    if (i % 2 == 0) {
      result.style.display = "block";
      soma += i;
      //   result.innerHTML = `${soma += i} `;
    }
    i++;
  }
  result.innerHTML = `A soma dos números pares de 0 à ${numero} = ${soma}`;
}

function exercicio7() {
  let resp = document.getElementById("resposta");
  let i = 10;
  resp.innerHTML = "";

  while (i >= 1) {
    resp.innerHTML += `#${i} `;
    i--;
  }
}

function exercicio8() {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.style.display = "none";
  result.style.display = "none";
  result.innerHTML = "";
  let inversa = "";

  for (let i = 1; i <= palavra.length; i++) {
    inversa = inversa + palavra.charAt(palavra.length - i);
  }
  if (palavra == inversa) {
    result.innerHTML = `${palavra} é um palíndromo`;
    exibirResultado(obterDados("errorResult"));
  } else {
    error.innerHTML = `${palavra} não é um palíndromo`;
    exibirError(obterDados("errorResult"));
  }
}

function exercicio9() {
  let resp = document.getElementById("resposta");
  let soma = 0;
  resp.innerHTML = `<h2>Resposta da Atividade</h2>`;

  for (let i = 1; i <= 100; i++) {
    soma += i;
  }

  resp.innerHTML += `A soma entre 1 e 100 é = ${soma}`;
}

function exercicio10() {
  let result = document.getElementById("resultado");
  let numero = document.getElementById("num").value;
  let error = document.getElementById("erro");
  numero = parseInt(numero);
  result.innerHTML = "";
  error.style.display = "none";

  let soma = 0;
  let i = 1;
  if (numero <= 0) {
    error.style.display = "block";
    error.innerHTML = `Favor informar números positivos diferente de 0.`;
    result.style.display = "none";
  } else {
    while (i <= numero) {
      soma += i;
      i++;
    }
    i--;
    exibirResultado(obterDados("errorResult"));

    result.innerHTML = `A soma dos números entre 0 e ${numero} é = ${soma}. <br> E a média entre esses números é =  ${
      soma / i
    }`;
  }
}

function exercicio11() {
  let dados = obterDados("resp");
  dados.resp.innerHTML = `<h2>Resposta da Atividade</h2>`;

  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      dados.resp.innerHTML += `#${i} `;
    }
  }
}

function exercicio12() {
  let dados = obterDados("numero");
  dados.error.style.display = "none";
  dados.result.style.display = "none";
  dados.result.innerHTML = "";

  let soma = 0;

  if (dados.numero <= 0) {
    exibirError(obterDados("errorResult"));
    dados.error.innerHTML = `Favor inserir um número diferente de ${dados.numero}`;
  } else {
    for (let i = 0; i <= dados.numero; i++) {
      soma += i;
    }
    exibirResultado(obterDados("errorResult"));
    dados.result.innerHTML = `${soma}`;
  }
}

function exercicio13() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.style.display = "none";
  result.style.display = "none";
  result.innerHTML = "";
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  let menor = 0;
  let maior = 0;

  if (num1 >= num2) {
    maior = num1;
    menor = num2;
  } else {
    maior = num2;
    menor = num1;
  }

  if (num1 > 1 && num2 > 1) {
    for (var contPrimo = menor; contPrimo <= maior; contPrimo++) {
      let primo = true;

      for (let i = 2; i < contPrimo; i++) {
        if (contPrimo % i == 0) primo = false;
      }

      if (primo) {
        result.innerHTML += `O número ${contPrimo} é primo.<br>`;
        exibirResultado(obterDados("errorResult"));
      }
    }
  } else {
    error.innerHTML = "Favor iformar dois números positivos, maiores que 2.";
    exibirError(obterDados("errorResult"));
  }
}

function exercicio14() {
  let dados = obterDados("num1,2");
  dados.error.style.display = "none";
  dados.result.style.display = "none";
  dados.result.innerHTML = "";
  dados.num1 = parseInt(dados.num1);
  dados.num2 = parseInt(dados.num2);

  if (dados.num1 > 0 || dados.num2 > 0) {
    exibirResultado(obterDados("errorResult"));
    let calculo = dados.num1 * dados.num2;
    dados.result.innerHTML = `A área do retângulo é de: ${calculo}un²`;
  } else {
    exibirError(obterDados("errorResult"));
    dados.error.innerHTML = `Favor inserir números positivos maior que 0.`;
  }
}

function exercicio15() {
  let dados = obterDados("palavra");
  dados.error.style.display = "none";
  dados.result.style.display = "none";
  dados.result.innerHTML = "";
  let letra = "";

  if (dados.palavra != "") {
    for (let i = 0; i < dados.palavra.length; i++) {
      letra = dados.palavra[i];
      letra = letra.toUpperCase();
      if (
        letra == "A" ||
        letra == "E" ||
        letra == "I" ||
        letra == "O" ||
        letra == "U"
      ) {
        dados.result.innerHTML += `Letra ${letra} - Vogal<br>`;
      } else {
        dados.result.innerHTML += `Letra ${letra} - Consoante<br>`;
      }
    }
    exibirResultado(obterDados("errorResult"));
  } else {
    dados.error.innerHTML = "Digite uma palavra!";
    exibirError(obterDados("errorResult"));
  }
}

function exercicio16() {
  let dados = obterDados("num1");
  dados.error.style.display = "none";
  dados.result.style.display = "none";
  dados.result.innerHTML = "";
  dados.num1 = parseFloat(dados.num1);

  let area = 0;

  if (dados.num1 > 0) {
    area = Math.PI.toFixed(5) * (2 * dados.num1);
    dados.result.innerHTML += `A área da circunferência com o Raio informado acima é:  ${area}`;
    exibirResultado(obterDados("errorResult"));
  } else {
    dados.error.innerHTML = `Favor informar um valor positivo diferente de ${dados.num1}`;
    exibirError(obterDados("errorResult"));
  }
}

function exercicio17() {
  let dados = obterDados("num1,2");
  dados.error.style.display = "none";
  dados.result.style.display = "none";
  dados.result.innerHTML = "";
  dados.num1 = parseInt(dados.num1);
  dados.num2 = parseInt(dados.num2);

  let area = 0;

  if (dados.num1 > 0 && dados.num2 > 0) {
    area = (dados.num1 * dados.num2) / 2;
    dados.result.innerHTML += `A área do Triangulo com os dados informados acima é: ${area}un²`;
    exibirResultado(obterDados("errorResult"));
  } else {
    dados.error.innerHTML = `Favor informar dois números positivos e diferentes de 0.`;
    exibirError(obterDados("errorResult"));
  }
}

function exercicio18() {
  let dados = obterDados("num1,2");
  let num3 = document.getElementById("num3").value;
  dados.error.style.display = "none";
  dados.result.style.display = "none";
  dados.result.innerHTML = "";
  dados.num1 = parseInt(dados.num1);
  dados.num2 = parseInt(dados.num2);
  num3 = parseInt(num3);

  let area = 0;

  if (dados.num1 > 0 && dados.num2 > 0 && num3 > 0) {
    area = ((dados.num1 + dados.num2) * num3) / 2;
    dados.result.innerHTML += `A área do Trapézio  com os dados informados acima é: ${area}un²`;
    exibirResultado(obterDados("errorResult"));
  } else {
    dados.error.innerHTML = `Favor informar números positivos e diferentes de 0.`;
    exibirError(obterDados("errorResult"));
  }
}

function exercicio19() {
  let dados = obterDados("palavra");
  dados.palavra = dados.palavra.trim();

  let letra = document.getElementById("letra").value;
  letra = letra.trim();
  letra = letra.toUpperCase();
  dados.error.style.display = "none";
  dados.result.style.display = "none";
  dados.result.innerHTML = "";

  let letraAtual = "";

  if (dados.palavra.length > 1) {
    if (letra.length == 1) {
      for (let i = 0; i < dados.palavra.length; i++) {
        letraAtual = dados.palavra[i];
        letraAtual = letraAtual.toUpperCase();
        if (letraAtual == letra) {
          dados.palavra = dados.palavra.replace(dados.palavra[i], "*");
        }
      }
      dados.result.innerHTML = dados.palavra;
      exibirResultado(obterDados("errorResult"));
    } else {
      dados.error.innerHTML = "Digite apenas uma letra para ser substituída!";
      exibirError(obterDados("errorResult"));
    }
  } else {
    dados.error.innerHTML = "Digite uma frase com ao menos uma palavra!";
    exibirError(obterDados("errorResult"));
  }
}

function exercicio20() {
  let dados = obterDados("errorResult");
  let frase = document.getElementById("frase").value;
  dados.error.style.display = "none";
  dados.result.style.display = "none";
  dados.result.innerHTML = "";
  let palavras = frase.trim().split(" ");

  if (frase != "" && palavras.length > 1) {
    let palavrasInvertidas = palavras.reverse();
    let fraseInvertida = palavrasInvertidas.join(" ");

    dados.result.innerHTML = fraseInvertida;
    exibirResultado(obterDados("errorResult"));
  } else {
    dados.error.innerHTML = "Digite uma frase com ao menos duas palavras!";
    exibirError(obterDados("errorResult"));
  }
}

function exercicio21() {
  let dados = obterDados("errorResult");
  let frase = document.getElementById("frase").value;
  frase = frase.trim();
  dados.error.style.display = "none";
  dados.result.style.display = "none";
  dados.result.innerHTML = "";

  if (frase.length > 1) {
    dados.result.innerHTML = frase.replace(/\s/g, " ");
    exibirResultado(obterDados("errorResult"));
  } else {
    dados.error.innerHTML = "Digite uma frase com ao menos uma palavra!";
    exibirError(obterDados("errorResult"));
  }
}

var total = 0;
function exercicio22() {
  let dados = obterDados("numero");
  dados.error.style.display = "none";
  dados.result.style.display = "none";
  dados.result.innerHTML = "";
  dados.numero = parseInt(dados.numero);

  if (dados.numero > 0) {
    if (total < 100) {
      total += dados.numero;
      dados.result.innerHTML += "Total até o momento: " + total;
      exibirResultado(obterDados("errorResult"));
    } else {
      dados.result.innerHTML = "Total Final: " + total;
      exibirResultado(obterDados("errorResult"));
    }
  } else {
    dados.error.innerHTML = "Favor informar um número positivo!";
    exibirError(obterDados("errorResult"));
  }
}

function exercicio23() {
  let dados = obterDados("palavra");
  dados.palavra = dados.palavra.trim();
  let frase = document.getElementById("frase").value;
  frase = frase.trim();
  dados.error.style.display = "none";
  dados.result.style.display = "none";
  dados.result.innerHTML = "";

  if (frase.length > 1) {
    if (dados.palavra.length >= 1) {
      let nrVezes = frase.match(new RegExp(dados.palavra, "gi"));
      if (nrVezes.length > 0) {
        dados.result.innerHTML = `A palavra ${dados.palavra} foi encontrada ${nrVezes.length} vezes na frase acima!`;
      } else {
        dados.result.innerHTML = `A palavra ${dados.palavra} não foi encontrada!`;
      }
      exibirResultado(obterDados("errorResult"));
    } else {
      dados.error.innerHTML = "Digite a palavra ser localizada!";
      exibirError(obterDados("errorResult"));
    }
  } else {
    dados.error.innerHTML = "Digite uma frase com ao menos uma palavra!";
    exibirError(obterDados("errorResult"));
  }
}

function exercicio24() {
  let dados = obterDados("errorResult");
  let frase = document.getElementById("frase").value;
  frase = frase.trim();
  frase = frase.toLowerCase();
  dados.error.style.display = "none";
  dados.result.style.display = "none";
  dados.result.innerHTML = "";

  if (frase.length > 1) {
    let palavras = frase.split(" ");
    let palavrasTitleCase = palavras.map((palavra) => {
      return palavra.charAt(0).toUpperCase() + palavra.slice(1);
    });
    let fraseTitleCase = palavrasTitleCase.join(" ");
    dados.result.innerHTML = fraseTitleCase;
    exibirResultado(obterDados("errorResult"));
  } else {
    dados.error.innerHTML = "Digite uma frase com ao menos uma palavra!";
    exibirError(obterDados("errorResult"));
  }
}

function exercicio25() {
  let dados = obterDados("num1,2");
  let num3 = document.getElementById("num3").value;
  dados.error.style.display = "none";
  dados.result.style.display = "none";
  dados.result.innerHTML = "Ordem Crescente: ";
  dados.num1 = parseInt(dados.num1);
  dados.num2 = parseInt(dados.num2);
  num3 = parseInt(num3);

  let numeros = [dados.num1, dados.num2, num3];

  if (dados.num1 > 0 && dados.num2 > 0 && num3 > 0) {
    numeros = numeros.sort((a, b) => a - b);
    for (let i = 0; i < 3; i++) {
      dados.result.innerHTML += `#${numeros[i]} `;
    }
    exibirResultado(obterDados("errorResult"));
  } else {
    dados.error.innerHTML = "Favor informar todos os números e positivos.";
    exibirError(obterDados("errorResult"));
  }
}