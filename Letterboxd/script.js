let contador = 0;

function cadastroFilme() {
    const nome_film = document.getElementById("nome_film").value;
    const gen_film = document.getElementById("gen_film").value;
    const ano_film = document.getElementById("ano_film").value;
    const lista = document.getElementById("lista");


if (nome_film === "" || gen_film === "" || ano_film === "") {
    alert("Preencha todos os campos!");
    return;
}

let card = document.createElement("li");
    card.classList.add("filme");

card.innerHTML = `
    <h3> ${nome_film}</h3>
    <p> ${gen_film}</p>
    <p> ${ano_film}</p>
    <button>Excluir</button>`;

  

const botaoExcluir = card.querySelector("button");

botaoExcluir.addEventListener("click", function () {
    card.remove();
    contador--;
    atualizarContador();
});

lista.appendChild(card);

contador++;
atualizarContador();

document.getElementById("nome_film").value = "";
document.getElementById("gen_film").value = "";
document.getElementById("ano_film").value = "";
}

function atualizarContador() {
    document.getElementById("contador").innerText =
        `Filmes cadastrados: ${contador}`;
}



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

