const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendCharacter(char) {
    if (currentInput.includes('.') && char === '.') return;
    currentInput += char;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput || '0';
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
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
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        if (button.textContent !== '=' && button.textContent !== 'C' && button.textContent !== 'DEL') {
            button.addEventListener('click', () => {
                const char = button.textContent;
                if (['/', '*', '-', '+'].includes(char)) {
                    if (currentInput === '') return;
                    operator = char;
                    previousInput = currentInput;
                    currentInput = '';
                }
            });
        }
    });
});
