document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    let currentInput = '';
    let equation = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            if (value >= '0' && value <= '9') {
                currentInput += value;
                display.value = equation + currentInput;
            } else if (value == 'plus' || value == 'minus' || value == 'multiply' || value == 'divide') {
                if (currentInput !== '') {
                    equation += currentInput;
                    currentInput = '';
                }
                let operator;
                switch (value) {
                    case 'plus':
                        operator = '+';
                        break;
                    case 'minus':
                        operator = '-';
                        break;
                    case 'multiply':
                        operator = '*';
                        break;
                    case 'divide':
                        operator = '/';
                        break;
                }
                equation += ' ' + operator + ' ';
                display.value = equation;
            } else if (value == 'equals') {
                if (currentInput !== '') {
                    equation += currentInput;
                    currentInput = '';
                }
                try {
                    let result = eval(equation.replace(/\s+/g, ''));
                    if (String(result).includes('Infinity') || String(result).includes('NaN')) {
                        result = 'Error';
                    }
                    display.value = result;
                    equation = result; 
                } catch (e) {
                    display.value = 'Error';
                    equation = '';
                }
            } else if (value == 'clear') {
                currentInput = '';
                equation = '';
                display.value = '';
            }
        });
    });
});
