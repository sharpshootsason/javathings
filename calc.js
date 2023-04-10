// make a grid with buttons
// each button should have an event listener where it outputs a number
// loop through basic numbering of additions, sub, mult, divide?
// and or pass through numbers
    // function x (n) {
        //   for (let i=0; i < n: i++)
             // i think i need a for loop that can keep running numbers and then n can pass through 
        //}
// , but need to figure out how to pass through multiple numbers
// return answer on top (might have to use input)
        // create an equals key that the return is passed inside 

 // return inside equals button and numbers inside of return button 

 // n + n , return 5 function --> inside return key which will have the function to display the number --> activated by equals keyt
let currentValue = '';
let prevousValue = '';
let operator = ''


document.addEventListener("DOMContentLoaded", function () {

   let previousScreen = document.querySelector(".previousscreen")

   let currentScreen = document.querySelector('.currentscreen')

   let numbers = document.querySelectorAll(".number")

   let operators = document.querySelectorAll('.operator')

   numbers.forEach(number => number.addEventListener('click', function(e){
      handleNumber(e.target.textContent)
      currentScreen.textContent = currentValue 
      
   }))

   function handleNumber(num) {
      currentValue += num 
   }

   operators.forEach(op => op.addEventListener('click', function (e) {
      handleOperator(e.target.textContent)
      previousScreen.textContent = previousValue + '' + operator
      currentScreen.textContent = currentValue
   }))

   function handleOperator(op) {
      operator = op
    previousValue = currentValue
      curentValue = ''
}
});