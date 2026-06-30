//Contador
let contador = 0;

function cadastroFilme() {
//puxa as informaçoes do HTML
    const nome_film = document.getElementById("nome_film").value;
    const gen_film = document.getElementById("gen_film").value;
    const ano_film = document.getElementById("ano_film").value;
    const lista = document.getElementById("lista");

//Validação para garantir resposta válida
if (nome_film === "" || gen_film === "" || ano_film === "") {
    alert("Preencha todos os campos!");
    return;
}
//Cria o card e adiciona a classe filme
let card = document.createElement("li");
    card.classList.add("filme");

//Cria o card com os elementos de HTML
card.innerHTML = `
    <h3 class="cor-p"> ${nome_film}</h3>
    <p class="cor-p"> ${gen_film}</p>
    <p class="cor-p"> ${ano_film}</p>
    <button>Excluir</button>`;

//Puxa informacao do botao do card para manipular no js
const botaoExcluir = card.querySelector("button");
//Cria a funcao do botao, no caso excluir o card
botaoExcluir.addEventListener("click", function () {
    card.remove();
    contador--;
    atualizarContador();
});
//Adiciona o card a lista(UL)
lista.appendChild(card);
//Adiciona 1 ao contador a cada vez que o codigo chega a esse ponto
contador++;
atualizarContador();

//Limpa o campo (input) no HTML
document.getElementById("nome_film").value = "";
document.getElementById("gen_film").value = "";
document.getElementById("ano_film").value = "";
}

function atualizarContador() {
//Atualiza as informaçoes do contador
    document.getElementById("contador").innerText =
        `Filmes cadastrados: ${contador}`;
}


//Mudar cor para modo claro
function alterarCor() {
    document.body.classList.toggle("dark");
    document.querySelector("header").classList.toggle("dark");

    const botao = document.getElementById("noite");

    if (document.body.classList.contains("dark")) {
        botao.innerText = "Desligar as luzes";
    } else {
        botao.innerText = "Acender as luzes";
    }
}

