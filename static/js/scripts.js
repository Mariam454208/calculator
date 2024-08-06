document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            if (value === 'CE') {
                display.value = '0';
            } else if (value === '=') {
                display.value = calculateResult(display.value);
            } else {
                if (display.value === '0' && !['+', '-', '*', '/'].includes(value)) {
                    display.value = value;
                } else {
                    display.value += value;
                }
            }
        });
    });

    function calculateResult(equation) {
        try {
            const result = eval(equation);
            if (isNaN(result) || !isFinite(result)) return 'Error';
            return result.toString();
        } catch {
            return 'Error';
        }
    }
});
