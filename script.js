var baralhoJogador = [
  {
    nome: "Bulbassauro",
    imagem:
      "https://media.sketchfab.com/models/84342bb1ce8c488abed5795605c3be9f/thumbnails/42000bebe0334fa1a9256be805c2ce27/7e736ee692fb420daa4df042a59e99f8.jpeg",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  },
  {
    nome: "Pikachu",
    imagem:
      "https://www.gamingbible.co.uk/cdn-cgi/image/width=648,quality=70,format=jpeg,fit=pad,dpr=1/https%3A%2F%2Fs3-images.gamingbible.co.uk%2Fs3%2Fcontent%2F9d58b8695f449faf19e0f7c97d05003c.jpg",
    atributos: {
      ataque: 9,
      defesa: 8,
      magia: 8
    }
  },
  {
    nome: "Charmander",
    imagem:
      "https://s2.megabrandsmedia.com/2020/12/10/16/18/18/WlQva27V2D1607635098.jpeg",
    atributos: {
      ataque: 5,
      defesa: 4,
      magia: 9
    }
  }
];

var baralhoMaquina = [
  {
    nome: "Bulbassauro",
    imagem:
      "https://media.sketchfab.com/models/84342bb1ce8c488abed5795605c3be9f/thumbnails/42000bebe0334fa1a9256be805c2ce27/7e736ee692fb420daa4df042a59e99f8.jpeg",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  },
  {
    nome: "Pikachu",
    imagem:
      "https://www.gamingbible.co.uk/cdn-cgi/image/width=648,quality=70,format=jpeg,fit=pad,dpr=1/https%3A%2F%2Fs3-images.gamingbible.co.uk%2Fs3%2Fcontent%2F9d58b8695f449faf19e0f7c97d05003c.jpg",
    atributos: {
      ataque: 9,
      defesa: 8,
      magia: 8
    }
  },
  {
    nome: "Charmander",
    imagem:
      "https://s2.megabrandsmedia.com/2020/12/10/16/18/18/WlQva27V2D1607635098.jpeg",
    atributos: {
      ataque: 5,
      defesa: 4,
      magia: 9
    }
  }
];

var cartaMaquina;
var cartaJogador;
var moldura =
  '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

function reiniciarJogo() {
  document.getElementById("carta-maquina").style.backgroundImage = "";
  document.getElementById("carta-jogador").style.backgroundImage = "";
  document.getElementById("carta-maquina").innerHTML = moldura;
  document.getElementById("carta-jogador").innerHTML = moldura;
  cartaMaquina = null;
  cartaJogador = null;
}

function sortearCarta() {
  reiniciarJogo();

  if (baralhoMaquina.length == 0) {
    alert("Maquina nao possui mais cartas no baralho.");
    return false;
  }

  var numeroCartaMaquina = parseInt(Math.random() * baralhoMaquina.length);
  cartaMaquina = baralhoMaquina[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * baralhoJogador.length);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * baralhoJogador.length);
  }

  cartaJogador = baralhoJogador[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributo() {
  var radioAtributos = document.getElementsByName("atributos");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributo();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  exibirCartaMaquina();

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML =
      "Voce venceu! " +
      " " +
      " " +
      "Voce tem : " +
      baralhoJogador.length +
      " " +
      "cartas";
    baralhoJogador.push(cartaMaquina);
    baralhoMaquina.splice(baralhoMaquina[cartaMaquina], 1);
  } else if (valorCartaJogador < valorCartaMaquina) {
    elementoResultado.innerHTML =
      "Voce perdeu!" +
      " " +
      " " +
      "Voce tem : " +
      baralhoJogador.length +
      " " +
      "cartas";
    baralhoMaquina.push(cartaJogador);
    baralhoJogador.splice(baralhoJogador[cartaJogador], 1);
  } else {
    elementoResultado.innerHTML = "Empatou";
  }

  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`; //acessando o css

  var tagHTML = "<div id = 'opcoes' class = 'carta-status'>";
  var opcoesTexto = "";
  for (var atributos in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type  = 'radio' name = 'atributos' value = '" +
      atributos +
      "'>" +
      atributos +
      " " +
      cartaJogador.atributos[atributos] +
      "<br>";
  }

  var nome = `<p class ="carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`; //acessando o css

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id = 'opcoes' class = 'carta-status'>";
  var opcoesTexto = "";
  for (var atributos in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type  = 'radio' name = 'atributos' value = '" +
      atributos +
      "'>" +
      atributos +
      " " +
      cartaMaquina.atributos[atributos] +
      "<br>";
  }

  var nome = `<p class ="carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}