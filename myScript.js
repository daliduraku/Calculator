
function operate(str) {
    let operator = "";
    let numArr = [];
    let num = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === "+" || char === "-" || char === "*" || char === "/") {
            operator = char;
            numArr.push(parseFloat(num));  // Push the current number into the array
            num = "";  // Reset for the next number
        } else {
            num += char;  // Build the number as a string
        }
    }

    // Push the last number into the array
    if (num !== "") {
        numArr.push(parseFloat(num));
    }

    let result;
    if (operator === "+") {
        result = numArr.reduce((a, b) => a + b);
    } else if (operator === "-") {
        result = numArr.reduce((a, b) => a - b);
    } else if (operator === "*") {
        result = numArr.reduce((a, b) => a * b);
    } else if (operator === "/") {
        result = numArr.reduce((a, b) => a / b);
    }

    return result;
}


const buttons = document.querySelectorAll('.btn-number, .btn-operator')
const display = document.querySelector('.display')
let displayData = "";

buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        const buttonValue = button.getAttribute('data-num');
        
        displayData += buttonValue;
        display.textContent = displayData;
    })
})

const equalsButton = document.querySelector('.btn-equals')

equalsButton.addEventListener('click', function(){
    displayData = operate(displayData)
    display.textContent = displayData
} )

const clearButton = document.querySelector(".btn-clear")

clearButton.addEventListener('click', () => {
    displayData = "";
    display.textContent = displayData;
})