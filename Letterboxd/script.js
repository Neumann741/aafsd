

function cadastroFilme() {
    const nome_film = document.getElementById("nome_film").value;
    const gen_film = document.getElementById("gen_film").value;
    const ano_film = document.getElementById("ano_film").value;

    if (nome_film === "") {
        alert("Digite o nome do filme antes de adicionar.");
        return;
    }else if (gen_film === ""){
        alert("Digite o genêro antes de adicionar.");
        return;
    }else if (ano_film === ""){
        alert("Digite o ano antes de adicionar.");
        return;
    }

    let infos = [nome_film, gen_film, ano_film ];
    
    for (let i of infos) {
        let item = document.createElement("li");
        item.innerText = i;
        document.getElementById("lista").appendChild(item);
    }
}

function alterarCor() {
    document.body.classList.toggle("dark");
    document.querySelector("header").classList.toggle("dark");
}

card.classList.add("filme");