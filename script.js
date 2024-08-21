let currentValue = '';
let currentOperation = '';
let previousValue = '';

function appendNumber(number) {
    currentValue += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentValue === '') return;
    if (previousValue !== '') {
        calculateResult();
    }
    currentOperation = operation;
    previousValue = currentValue;
    currentValue = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    if (isNaN(prev) || isNaN(current)) return;

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentValue = result.toString();
    currentOperation = '';
    previousValue = '';
    updateDisplay();
}

function clearResult() {
    currentValue = '';
    previousValue = '';
    currentOperation = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = currentValue;
}
