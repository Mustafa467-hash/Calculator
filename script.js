// Yeh variables hain jo calculator ki state ko track karte hain
let currentInput = '';          // Jo number user type kar raha hai
let currentOperation = '';      // Jo operation  user ne select kiya hai
let firstOperand = null;        // Pehla number jiske sath operation hoga

// Jab user koi number press kare
function appendNumber(number) {
    currentInput += number;     // Number ko input string mein add karo
    updateDisplay();            // Display update karo
}

// Jab user koi operation press kare
function setOperation(operation) {
    if (currentInput === '') return;  // Agar input khali hai to kuch nahi hoga

    firstOperand = parseFloat(currentInput);  // Pehla number ko float mein convert hoga
    currentOperation = operation;             //  phir Operation set hoga
    currentInput = '';                        // Input clear ho jayega taki user doosra number type kare
}

// Jab user equal ko press kare
function calculateResult() {
    // Agar pehla number ya current input nahi hai to kuch na karo
    if (firstOperand === null || currentInput === '') return;

    const secondOperand = parseFloat(currentInput);  // Doosra number le lo
    let result = 0;

    // Operation ke mutabiq result calculate karo
    switch (currentOperation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
    }

    // Result ko string mein convert karenge taake display ho sake
    currentInput = result.toString();
    firstOperand = null;         // Reset
    currentOperation = '';
    updateDisplay();             // Display update karo
}

// Jab user 'C' press kare
function clearResult() {
    // Sab kuch reset kar do
    currentInput = '';
    firstOperand = null;
    currentOperation = '';
    updateDisplay();
}

// Display ko update karne wali function
function updateDisplay() {
    document.getElementById('result').value = currentInput;  // Input box mein currentInput dikhayein
}


// Sir ji comment jaan buch kr urdu mai daaley hai behtar samjhne ke liye chatgpt se nhi banwaya