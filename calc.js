


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
    
    numbers.forEach((number) => number.addEventListener('click', function(e) { // selects all the class of numbers
        handleNumber(e.target.textContent) // the text content of the target we click., the text content becomes the currentvalue
        currentScreen.textContent = currentValue // get this value created from handleNumber()
    }))


    operators.forEach(op => op.addEventListener('click', function(e) {
        handleOperator(e.target.textContent) // this just actualizes the text content into a value, since the text content in the buttons are numbers, and so forth
        previousScreen.textContent = previousValue + '' + operator // via handleOperator our previousValue 's value is what currentValue was
        currentScreen.textContent = currentValue //  hence, emptying the value of the div, but it gets filled when we click on the numbers.forEach 
    }))


    decimal.addEventListener('click', function() {
        addDecimal()
    })

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
    currentValue += num // e.target.textContent =  num // we  can do += here because the currentValue is a string
    // allows us to keep adding the values side by side because we arent setting it to empty every time
}



function handleOperator(op) { // this happens first before the screen.textCOntent(s) changes are applied
    operator = op // now, operator = e.target.textContent
    previousValue = currentValue  //the currentValue passes its value to the previousvalue and it empties itself, while they equa to the text content of the screens
    currentValue = ''
}


function addDecimal() {
    if(!currentValue.includes(".")) {
        currentValue += ".";
    }
}

function calculate() {
    previousValue = Number(previousValue) // so that we can math the numbers below, now when we do += it actually adds instead of setting side by side
    currentValue = Number(currentValue)

    if (operator === '+') {
        previousValue += currentValue;
    } else if (operator === '-') {
        previousValue -= currentValue; 
    } else if (operator === '/') {
        previousValue /= currentValue
    } else if (operator === 'x') {
        previousValue *= currentValue
    }

    previousValue = previousValue.toString() // current and previous value now hold the same values but we only equal the previous value to the text content
    currentValue = previousValue.toString() // make it to string so that we can let it show in the html text content
} 