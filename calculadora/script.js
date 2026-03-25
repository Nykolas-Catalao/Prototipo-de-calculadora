let display = document.getElementById("display");
let valorDisplay = "0";

function updateDisplay() {
    display.textContent = valorDisplay;
}

function appendNumber(num) {
    if(valorDisplay === "0"){
        valorDisplay = num.toString();
    } else {
        valorDisplay = valorDisplay + num.toString();
    }
    updateDisplay();
}
