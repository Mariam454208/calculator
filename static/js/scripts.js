document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-container');
    const firstNumberInput = document.querySelector('input[name="firstNumber"]');
    const secondNumberInput = document.querySelector('input[name="secondNumber"]');
    const operationSelect = document.querySelector('select[name="operation"]');
    const resultField = document.querySelector('.margin-top input');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstNumber = parseFloat(firstNumberInput.value);
        const secondNumber = parseFloat(secondNumberInput.value);
        const operation = operationSelect.value;
        let result;

        switch (operation) {
            case 'plus':
                result = firstNumber + secondNumber;
                break;
            case 'minus':
                result = firstNumber - secondNumber;
                break;
            case 'multiply':
                result = firstNumber * secondNumber;
                break;
            case 'divide':
                if (secondNumber === 0) {
                    result = "Cannot divide by zero.";
                } else {
                    result = firstNumber / secondNumber;
                }
                break;
            default:
                result = "Please select a valid operation.";
                break;
        }

        resultField.value = result;
    });
});
