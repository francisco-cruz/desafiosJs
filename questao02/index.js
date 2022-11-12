const nota01 = document.getElementById("nota01");
const nota02 = document.getElementById("nota02");
const btnExibir = document.getElementById("btn-exibir");
const textResultado = document.getElementById("resultado");

btnExibir.addEventListener('click', () => {
    const soma = parseInt(nota01.value) + parseInt(nota02.value)
    const media = soma / 2;

    const mediaIsGreaterOrEqualsSeven = media >= 7;
    const mediaIsEqualsTen = media === 10;

    if (mediaIsEqualsTen) {
        textResultado.innerText = "Aprovado com Distinção"
    } else if (mediaIsGreaterOrEqualsSeven) {
        textResultado.innerText = "Aprovado!"
    } else {
        textResultado.innerText = "Reprovado!"
    }

})
