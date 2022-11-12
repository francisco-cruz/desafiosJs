const buttons = document.getElementsByTagName("button");
const h1 = document.getElementById("h1")

for (let i = 0; i <= buttons.length; i++) {
    let button = buttons[i];
    button.style.backgroundColor = `${generateColor()}`
}

function generateColor() {
    const letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function setColorOnLabel(button) {
    const color = window.getComputedStyle(button).backgroundColor
    h1.style.color = `${color}`
}