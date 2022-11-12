const fistNumber = prompt("Digite o primeiro número:")
const secondNumber = prompt("Digite eo segundo número");

const greaterNumberIsTheFist = fistNumber > secondNumber;
const greaterNumberIsTheSecound = secondNumber > fistNumber;

if (greaterNumberIsTheFist) {
    alert(fistNumber + " é o maior")
} else if (greaterNumberIsTheSecound) {
    alert(secondNumber + " é o maior")
} else {
    alert(fistNumber + " e " + secondNumber + " são iguais")
}


