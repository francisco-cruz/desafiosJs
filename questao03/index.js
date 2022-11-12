const date = document.getElementById("date");
const btnVerificar = document.getElementById("btn-verificar");

btnVerificar.addEventListener('click', () => {
    const dateInArray = date.value.split("-");
    const yaer = dateInArray[0];

    const isLeapYear = leapYear(yaer);
    
    if (isLeapYear) {
        alert(yaer+" É BISSEXTO")
    } else {
        alert(yaer+" NÃO É BISSEXTO")
    }

})

function leapYear(yaer) {
    if ((yaer % 4 == 0 && yaer % 100 != 0) || yaer % 400 == 0) { 
      return true; 
    } 
  
    return false;
  }
  