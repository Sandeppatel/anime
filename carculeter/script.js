document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    var currentInput = "";
    var storedInput = "";
    var operator = "";

    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");

            if (value === "C") {
                currentInput = "";
                storedInput = "";
                operator = "";
                display.value = "";
            } else if (value === "=") {
                if (operator && currentInput) {
                    currentInput = evaluateExpression(storedInput, currentInput, operator);
                    display.value = currentInput;
                    operator = "";
                    storedInput = "";
                }
            } else if (["+", "-", "*", "/"].includes(value)) {
                if (currentInput) {
                    if (storedInput && operator) {
                        storedInput = evaluateExpression(storedInput, currentInput, operator);
                    } else {
                        storedInput = currentInput;
                    }
                    operator = value;
                    currentInput = "";
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });

    function evaluateExpression(a, b, operator) {
        const numA = parseFloat(a);
        const numB = parseFloat(b);

        switch (operator) {
            case "+":
                return (numA + numB).toString();
            case "-":
                return (numA - numB).toString();
            case "*":
                return (numA * numB).toString();
            case "/":
                return (numA / numB).toString();
            default:
                return b;
        }
    }
});
