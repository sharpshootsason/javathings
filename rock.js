const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorButton = document.querySelector(".scissor")
const divOutcome = document.querySelector(".outcome")
const playerSpan = document.querySelector(".player")
const computerSpan = document.querySelector(".computer")



function computerPlay () {
    const arrOfChoices = ['rock' , 'paper' , 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = arrOfChoices[randomNum]
    return compChoice 
}




let playerScore = 0
let computerScore = 0 

function playRound (playerSelection, computerSelection) {
    const p = document.createElement('p')
    console.log('1 ', playerSelection, '2 ', computerSelection)
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        p.innerText = 'you won! rock beats scissors. SMASH!'
        divOutcome.appendChild(p)
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        p.innerText = 'so close! you tied.'
        divOutcome.appendChild(p)
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        p.innerText = 'you lost! paper covers rock.'
        divOutcome.appendChild(p)
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        computerScore++
        p.innerText = 'you lost! scissor cuts right through you.'
        divOutcome.appendChild(p)
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        p.innerText = 'you tied!'
        divOutcome.appendChild(p)
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        p.innerText = 'you won! paper covers rock.'
        divOutcome.appendChild(p)
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        computerScore++
        p.innerText = 'you lost! rock beats scissors. SMASH!'
        divOutcome.appendChild(p)
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerScore++
        p.innerText = 'you won!'
        divOutcome.appendChild(p)
    } else if (playerSelection === 'scissor' && computerSelection === 'scissor') {
        p.innerText = 'you tied, you are still in this game!'
        divOutcome.appendChild(p)
    }
    
}

<<<<<<< HEAD


const updateScores = (playerScore, computerScore) => {
    playerSpan.innerText = `player:  ${playerScore}`
    computerSpan.innerText = `computer:   ${computerScore}`

}



rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    checkWinner(playerScore, computerScore)
    updateScores(playerScore, computerScore)
})

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    checkWinner(playerScore,computerScore)
    updateScores(playerScore, computerScore)
})


scissorButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = 'scissor'
    playRound(playerSelection, computerSelection)
    checkWinner(playerScore,computerScore)
    updateScores(playerScore, computerScore)
})


const checkWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
    var h2 = document.createElement("h2")
    h2.innerText = "You won the round! You beat the computer!"
    divOutcome.appendChild(h2)
    }
    if (computerScore === 5) {
    var h2 = document.createElement("h2")
    h2.innerText = "OH no! you have lost the round to a silly computer"
    divOutcome.appendChild(h2)
}
}



=======
//hello
>>>>>>> rps-ui

//function game () {
  // for (let i = 0; i < 5; i++) {
     //   const playerSelection = prompt('Hello player. Choose rock, paper, or scissors' , 'Roshambo').toLowerCase()
       // const computerSelection = computerPlay()
        //console.log(playRound(playerSelection, computerSelection))
    //}
//}

// console.log(game())


//const cats = ['Leapord', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

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
  
//    // a p eith red text that says 'hey im red!'
//    const body = document.body 
//   const div = document.createElement("div")
//   body.append(div)
//    const para = document.createElement("p")
//    div.append(para)
//   para.textContent = "hey i am red!"
//   para.style.color = "red"

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

//   const btn = document.querySelector('#btn');
//   btn.addEventListener('click', () => {
//     alert("hello world");
//   })

  