function pesquisar() {
    console.log("Função pesquisar chamada");

    let section = document.getElementById("resultSearch");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();
    console.log("Campo de Pesquisa:", campoPesquisa);

    if (campoPesquisa === "") {
        section.innerHTML = "Nada foi encontrado";
        return;
    }

    let resultados = "";

    
    if (typeof personagens === 'undefined' || personagens.length === 0) {
        console.error("Variável 'personagens' não definida ou vazia.");
        section.innerHTML = "Dados não carregados";
        return;
    }

    for (let personagem of personagens) {
        console.log("Verificando personagem:", personagem.name);

        if (personagem.name.toLowerCase().includes(campoPesquisa) || 
            (personagem.crew && personagem.crew.name.toLowerCase().includes(campoPesquisa))) {

            resultados += `
            <div class="item-resultado">
                <div class="box-resultado" id="boxResult">
                    <div class="box-img-personagem" id="boxPersonagem">
                         <img src="${personagem.image}" alt="Imagem do personagem" style="width: 500px; height: auto;">
                    </div>
                    <div class="box-info-total" id="box-total">
                        <div class="box-info" id="box-info">
                            <h2>${personagem.name}</h2>
                            <p>Tamanho: ${personagem.size || 'Desconhecido'}</p>
                            <p>Recompensa: ${personagem.bounty || 'Desconhecida'} Barries</p>
                            <p>Idade: ${personagem.age || 'Desconhecida'}</p>
                            <p>Equipe: ${personagem.crew?.name || 'Desconhecida'}</p>
                        </div>
                        <div class="info-fruta" id="boxfruit">
                            <p>Fruta do Diabo: ${personagem.fruit?.name || 'Desconhecida'}</p>
                            <p>Descrição da Fruta: ${personagem.fruit?.description || 'Descrição não disponível'}</p>
                            <div class="box-img-fruta" id="boxFruit">    
                                <img src="${personagem.fruit?.filename || 'https://via.placeholder.com/100'}" alt="Imagem da fruta do diabo" style="width: 100px; height: auto;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
    }

    section.innerHTML = resultados || "Nada foi encontrado";
}
