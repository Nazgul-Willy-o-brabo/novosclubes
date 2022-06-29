const url = "https://api-db-clubes-jesus.herokuapp.com/clubes";

function cadastrarClube() {
    const user = JSON.stringify(
        {
            nome: document.getElementById("nome").value,
            categoria: document.getElementById("Categoria").value,
            quantIntegrantes: document.getElementById("Codin").value,
            descricao: document.getElementById("Descrição").value
        })

    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: user
    })
        .then(res => res.json())
        setTimeout(() => {
        window.location = "teste Smart Little/Tela Verificado/tela2/TelaVerificada.html";
    }, 500);
    //.then(() => location.reload());
}

function getClubes() {
    clubeHtml = document.getElementById("clubes");
    clubeHtml.innerHTML = null;
    pesquisa = document.getElementById("procuraClube");
    let destaque = false;
    fetch(url).then(res => res.json()).then(club => {
        club.forEach(aux => {
            const { nome, categoria, quantIntegrantes } = aux;
            if (pesquisa.value != "") {
                if (pesquisa.value.includes(nome)) {
                    let str = '<div class="row clubes">';
                    if (destaque)
                        str = '<div class="row clubes corFundo">';
                    clubeHtml.innerHTML += str + `
                        <div class="row clubes">
                        <div class="col-6 col-md-3 col-lg-2">
                            <img src="imgs/ingressarClubes/iconDefault.png" alt="">
                        </div>
                        <div class="col-6 col-md-5 col-lg-5">
                            <div>
                                <p><strong>Nome: </strong>${nome}</p>
                                <p><strong>Categoria: </strong>${categoria}</p>
                                <p><strong>Integrantes: </strong>${quantIntegrantes} / 30 </p>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4">
                        <a href="teste Smart Little/Tela Verificado/tela2/telaIngressaClube.html">
                        <button type="button" class="btn btn-dark">Enviar Solicitação</button>
                        </a>
                        </div>
                    </div>
                        `;
                }
            }

            else {
                let str = '<div class="row clubes">';
                if (destaque)
                    str = '<div class="row clubes corFundo">';
                clubeHtml.innerHTML += str + `
                    <div class="row clubes">
                    <div class="col-6 col-md-3 col-lg-2">
                        <img src="imgs/ingressarClubes/iconDefault.png" alt="">
                    </div>
                    <div class="col-6 col-md-5 col-lg-5">
                        <div>
                            <p><strong>Nome: </strong>${nome}</p>
                            <p><strong>Categoria: </strong>${categoria}</p>
                            <p><strong>Integrantes: </strong>${quantIntegrantes} / 30 </p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 col-lg-4">
                    <a href="teste Smart Little/Tela Verificado/tela2/telaIngressaClube.html">
                    <button type="button" class="btn btn-dark">Enviar Solicitação</button>
                    </a>
                    </div>
                </div>
                    `;
            }
            destaque = !destaque;
        })
    })
}

function limparProcura(){
    pesquisa = document.getElementById("procuraClube");
    pesquisa.value = "";
    getClubes();
}