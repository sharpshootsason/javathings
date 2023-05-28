


let currentValue = ''
let previousValue = ''
let operator = ''

document.addEventListener('DOMContentLoaded', function() {
    let previousScreen = document.querySelector(".previous")
    let currentScreen = document.querySelector(".current")
    let numbers = document.querySelectorAll(".number")
    let operators = document.querySelectorAll(".operator")
    let clear = document.querySelector(".clear")
    let decimal = document.querySelector(".decimal")
    let equal = document.querySelector(".equal")
    
    numbers.forEach((number) => number.addEventListener('click', function(e) {
        handleNumber(e.target.textContent) // the text content of the target we click., the text content becomes the currentvalue
        currentScreen.textContent = currentValue // get this value created from handleNumber()
    }))


    operators.forEach(op => op.addEventListener('click', function(e) {
        handleOperator(e.target.textContent) // this just actualizes the text content into a value, since the text content in the buttons are numbers, and so forth
        previousScreen.textContent = previousValue + '' + operator // via handleOperator our previousValue 's value is what currentValue was
        currentScreen.textContent = currentValue
    }))



    clear.addEventListener('click', function(e) {
        previousValue = ''
        currentValue = ''
        operator = ''
        previousScreen.textContent = ''
        currentScreen.textContent = ''

    })

    equal.addEventListener('click', function() {
        calculate()
        previousScreen.textContent = ''
        currentScreen.textContent = previousValue //the current screen shows the value we added to the previousValue variable 
    })


})


function handleNumber(num) {
    currentValue += num
}



function handleOperator (op) {
    operator = op
    previousValue = currentValue  //the currentValue passes its value to the previousvalue and it empties itself, while they equa to the text content of the screens
    currentValue = ''
}



function calculate() {
    previousValue = Number(previousValue) // so that we can math the numbers
    currentValue = Number(currentValue)

    if (operator === '+') {
        previousValue += currentValue;
    } else if (operator === '-') {
        previousValue -= currentValue; 
    } else if (operator === '/') {
        previousValue /= currentValue
    }

    previousValue = previousValue.toString() // current and previous value now hold the same values but we only equal the previous value to the text content
    currentValue = previousValue.toString() // make it to string so that we can let it show in the html text content
} 