// make an aarray of 52 cards 
// when i hit next, i am going to pop 2 cards, one for p1  document.getElementById("card1").src = './cards/' + cardSelected1, and another for p2
// then compare the values, but how do we make them into values? (maybe look at war.js file method on math.floor)



let deck;

let playerScore = 0
let computerScore = 0


window.onload = function () {
    buildDeck();
    shuffleDeck();
    startGame();
}


function buildDeck() {
    let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let types = ['C', 'D', 'H', 'S'];

    deck = []


    // this is how we mix the deck by combinating the two arrays ^
    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + '-' + types[i]); // this is useful now that the array matches the card file name
        } 
    }
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);

        let temp = deck[i]
        deck[i] = deck [j]
        deck[j] = temp;
    }
}

function startGame() {

        // for player 2
        let cardImg = document.createElement('img')
        let card = deck.pop();
        cardImg.src = './cards/' + card + ".png"
        document.getElementById('card2').append(cardImg);
    
        // for the player1
   
        let cardImg = document.createElement('img');
        let card = deck.pop(); 
        cardImg.src = './cards/' + card + '.png';
      
        document.getElementById('card1').append(cardImg);
    }


