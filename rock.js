function computerPlay () {
    const arrOfChoices = ['rock' , 'paper' , 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = arrOfChoices[randomNum]
    return compChoice 
}


let playerScore = 0
let computerScore = 0 

function playRound (playerSelection, computerSelection) {
    console.log('1 ', playerSelection, '2 ', computerSelection)
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'winner! rock beats scissors'
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'so close! you tied'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        return 'think harder! paper beats rock'
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        computerScore++
        return 'think harder! scissors beat paper'
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'so close! you tied'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'winner! paper beats rock'
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        computerScore++
        return 'think harder! rock beats scissors'
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerScore++
        return 'winner! scissors beat paper'
    } else if (playerSelection === 'scissor' && computerSelection === 'scissor') {
        return 'so close! you tied'
    }
    
}

//function game () {
  // for (let i = 0; i < 5; i++) {
     //   const playerSelection = prompt('Hello player. Choose rock, paper, or scissors' , 'Roshambo').toLowerCase()
       // const computerSelection = computerPlay()
        //console.log(playRound(playerSelection, computerSelection))
    //}
//}

// console.log(game())


const cats = ['Leapord', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// for (let i = 0; i < cats.length; i++) {
   //  console.log(cats[i]);
// } 
 

// testing putting a statement at the beginning as opposed to at the end with the last 'else' condition //

// for (cat of cats) {
    //if (cat === 'Caracal') {
      //  console.log('found it');
      //} else {
        //console.log(cat);
      //}
    //}

   // const bleh = document.querySelector('#bleh');
    //const para = document.createELement('p');
    //para.textContent = 'Hey Im Red!'; 
    //para.style.color = 'blue';
    //bleh.append('para');


    //const body = document.body
    //const div = document.createELement('div')
   // div.innerHTML = "hello"
  
   // a p eith red text that says 'hey im red!'
   const body = document.body 
  const div = document.createElement("div")
  body.append(div)
   const para = document.createElement("p")
   div.append(para)
  para.textContent = "hey i am red!"
  para.style.color = "red"

  //an h3 with blue text that says "im a blue h3!"
  //const ach = document.createElement("h3")
  //body.append(ach)
  //ach.textContent = "im a blue h3!"
  //ach.style.color = "blue"

  // a div with a black border and a pink background 
  //const div = documentcreateELement("div")
  
  //div.style.cssText = "border: black; backgroundcolor: pink;"
 // const one = documentcreateELement("h1")
  //one.textContent = "im a div!"
  //div.append(one)
  //const poro = documentcreateELement("p")
  //poro.textContent = "me too!"
  //div.append(poro)
  
  const btn = document.querySelector('#btn');
  btn.addEventListener('click', () => {
    alert("hello!!!!!");
  });
