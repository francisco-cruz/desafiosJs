const num01 = document.getElementById("num01");
const num02 = document.getElementById("num02");
const btnExibir = document.getElementById("btn-exibir");
const tabela = document.getElementById("table");
const nomesNumeros = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];

btnExibir.addEventListener('click', () => {

    tabela.innerHTML = ""; // resetar linhas da tabela

    const valueNum01 = parseInt(num01.value);
    const valueNum02 = parseInt(num02.value);

    for (let i = valueNum01; i <= valueNum02; i++) {
        let tableRow = `<tr>
                            <td>${nomesNumeros[i - 1]}</td>
                            <td>${i}</td>
                        </tr>`
        tabela.innerHTML += tableRow;
    }
    
})
