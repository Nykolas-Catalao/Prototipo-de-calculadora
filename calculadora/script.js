let display = document.getElementById("display");
let valorDisplay = "0";

function updateDisplay() {
    // Atualiza o display conforme os botões pressionados
    display.textContent = valorDisplay;
}

function appendNumber(num) {
    // Adiciona um número no display
    // Caso tenha somente um zero inicial, substitui por um novo número
    if(valorDisplay === "0"){
        valorDisplay = num.toString();
    } else {
        valorDisplay += num.toString();
    }
    updateDisplay();
}

function appendOperator(op) {
    // Adiciona uma operação na expressão.
    const ultimo = valorDisplay.at(-1);
    // Só é permitido adicionar um operador depois de um número
    // evita dois operadores em sequência.
    if(valorDisplay === '0'|| "+-*/.".includes(ultimo))
        return;
    valorDisplay += op;
    updateDisplay();
}

function percent() {
    try{
        valorDisplay = (parseFloat(valorDisplay) / 100).toString()
        updateDisplay()
    } catch{
        valorDisplay = "Error"
        updateDisplay()
    }
}

function calculate() {
    try {
        // Regex para atuar como um whitelist e so permitir termos numericos e operadores válidos
        if(!/^[0-9+\-*/.() ]+$/.test(valorDisplay)){
            valorDisplay = "Error"
            updateDisplay()
        }
        valorDisplay = eval(valorDisplay).toString()
        updateDisplay()
    } catch {
        valorDisplay = "Error"
        updateDisplay()
    }
}

function appendDecimal() {
    // Adiciona o separador decimal.
    const operadores = "+-*/";
    // Encontra o índice do operador na expressão
    let indiceOperador = -1;
    for(let i = valorDisplay.length; i >=0; i--) {
        if(operadores.includes(valorDisplay[i])) {
            indiceOperador = i;
            break;
        }            
    }
    // Verifica somente o numero atual, depois do operador
    const numeroAtual = valorDisplay.slice(indiceOperador + 1);
    // Caso o número já tenha um separador decimal, bloqueia
    if(numeroAtual.includes('.'))
        return
    valorDisplay += '.';
    updateDisplay();
}

function allClear() {
    // Reseta todo o conteúdo do display para 0
    valorDisplay = "0";
    updateDisplay();
}

function invertSignal() {
    // Inverte o sinal do número
    if(valorDisplay !== "0") {
        if(valorDisplay.includes("-")) {
            valorDisplay = valorDisplay.slice(1);
        } else {
            valorDisplay = "-" + valorDisplay
        }
    }
    updateDisplay();
}