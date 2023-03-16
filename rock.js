function computerPlay () {
    const arrOfChoices = ['rock' , 'paper' , 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = arrOfChoices[randomNum]
    return compChoice 
}


let playerScore = 0
let computerScore = 0 

function playRound (playerSelection, computerSelection) {
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

function game () {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Hello player. Choose rock, paper, or scissors' , 'Roshambo').toLowerCase
        const computerSelection = computerPlay()
        console.log('1 ', playRound(playerSelection, computerSelection))
    }
}

console.log(game())