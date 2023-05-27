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
        handleNumber(e.target.textContent) // the text content of the target we click
        currentScreen.textContent = currentValue // get this value created from handleNumber()
    }))


    operators.forEach(op => op.addEventListener('click', function(e) {
        handleOperator(e.target.textContent) // this just actualizes the text content into a value, since the text content in the buttons are numbers, and so forth
        previousScreen.textContwnt = previousValue + '' + operator // via handleOperator our previousValue 's value is what currentValue was
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
        previousScreeen.textContent = ''
        currentScreen.textContent = previousValue //the current screen gets its value back (differently) once the calculate() function is called
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
    previousValue = Number(previousValue)
    currentValue = Number(currentValue)

    if (operator === '+') {
        previousValue += currentValue;
    } else if (operator === '-') {
        previousValue -= currentValue; 
    } else if (operator === '/') {
        previousValue /= currentValue
    }

    previousValue = previousValue.toString()
    currentValue = previousValue.toString()
}
