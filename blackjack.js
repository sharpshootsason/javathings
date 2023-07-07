let dealerSum = 0;
let yourSum = 0;

let dealerAceCount = 0;
let yourAceCount = 0;

let hidden;
let deck;

let canHit = true;

let cardImg = document.createElement('img'); // creating an <img> tag to append 

const yourCards = document.getElementById('your-cards') //grabbing the divs

const dealerCards = document.getElementById('dealer-cards')


 const startRound = document.getElementById('start-round') //button

startRound.addEventListener('click', function() {
  buildDeck();
    shuffleDeck();
    startGame();
})


function buildDeck() {
    let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let types = ['C', 'D', 'H', 'S'];

    deck = []

    //double for loop : it will go to one index of type and then loop through every array of values (it finalize when we deck.push)
    // ffor every 'types', it will look through all the values, and it will do that for each individual index of 'types'
    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + '-' + types[i]); // this is useful now that the array matches the card file name, 2-C, 32-D, 2-H, 2-S, 3-C ...
        }
    }
}

function shuffleDeck() { 
    for (let i = 0; i < deck.length; i++) { // after we label the deck variable, we modify it to be disordered
        let j = Math.floor(Math.random() * deck.length);

        let temp = deck[i]
        deck[i] = deck [j]
        deck[j] = temp;
    } 
}

function startGame() {
    hidden = deck.pop(); // selects random array
        // hidden becomes the back.png card, we reveal this card later when we hit stay
    dealerSum += getValue(hidden); 
    dealerAceCount += checkAce(hidden);  



    while (dealerSum < 17) { 
        let cardImg = document.createElement('img'); 
        let card = deck.pop(); // takes an array out ['2-C','3-C','4-C' . . .] 
        cardImg.src = './cards/' + card + ".png"
        dealerSum += getValue(card) // Ex: '4-C' , the += adds the sum for us when each card gets popped
        dealerAceCount += checkAce(card)
       dealerCards.append(cardImg); // we are popping cards and appending them as long as the dealersum is less than 17
       // it stops once it hits over 17
       
    }
        // for the player , getting the values for the player
    for (let i = 0; i < 2; i++) { // itll always get 2 cards immediately, the hit function is what will give me the extra card
       let cardImg = document.createElement('img');
        let card = deck.pop(); 
        cardImg.src = './cards/' + card + '.png'; 
        yourSum += getValue(card); //getVAlue and checkAce is modifying the array into a value for our counts
        yourAceCount += checkAce(card);
       yourCards.append(cardImg);
      document.getElementById('your-sum').innerText = yourSum;
    }

    document.getElementById('hit').addEventListener('click', Hit);

    document.getElementById('stay').addEventListener('click', Stay);

}



function getValue(card) { // this is where we break down the array to get the value
    let data = card.split('-'); // splits ['4-C'] into ['4', 'C'] , remember card is just a single index that we are splitting into 2
    let value = data[0] // [0] index of zero indicates first array- only 4 (not C)

    if (isNaN(value)) {
        if (value =='A'){ 
            return 11;
        } 
        return 10;
    }

    return parseInt(value);  //what allows the data type to go from string to number, which allows the values to be added instead of side by side when using +=
}


// where we count the aces
function checkAce(card) {
    if (card[0] == 'A') {
        return 1;
    }
        return 0;
}

function Hit() {
    if (!canHit) { // if canHit is false
        return; // function stops executing here 
    } // else  

    // we had the while loop take care of the dealer cards, the hit() function is just for the player, in which this is where we gamble
    let cardImg = document.createElement('img'); // have to keep declaring it so that it creates the tag when we fire the function
    let card = deck.pop(); 
    cardImg.src = './cards/' + card + '.png';
    yourSum += getValue(card); //however since these sums and counts are global variables, it just keeps getting added
    yourAceCount += checkAce(card);
    yourCards.append(cardImg);

    if (reduceAce(yourSum, yourAceCount) > 21) { // once the count becomes greater than 21
        // we are using reduceAce to modify our sum in accordance to our aces, giving us a chance to change the ace to value of 1 if needed
        canHit = false; // hence, it returns and does nothing, the button doesnt work anymore
    }
    document.getElementById('your-sum').innerText = yourSum;
}


function Stay() {
dealerSum = reduceAce(dealerSum, dealerAceCount); // now we are, again, equating the sums to reduceAce, to MODIFY OUR SUMS in accordance of if we hold an ace
yourSum = reduceAce(yourSum, yourAceCount);

canHit = false; // can't hit anymore

// for the dealer 
document.getElementById('hidden').src = './cards/' + hidden + '.png'; //turns the BCK.png to an actual card AND it has already been added to the dealer sum as shown above
// revealing** what the value/card is here by changing the src to the originally deck.pop() hidden card 

let message = ""

if (yourSum > 21) {
    message = "You Lose! refresh to start again"; 
}
else if (dealerSum > 21) {
    message = 'You Win! refresh to start again';
}
else if (yourSum == dealerSum) {
    message = 'Tie! refresh to start again';
}
else if (yourSum > dealerSum) {
    message = 'You Win! refresh to start again' // now its already ruled out in the first if statement that you cannot win at all if player is over 21 even if dealer is too
}
else if (yourSum < dealerSum) {
    message = 'You Lose! refresh to start again'
}

document.getElementById('results').innerText = message;
document.getElementById('dealer-sum').innertext = dealerSum; // the total 
document.getElementById('your-sum').innerText = yourSum; // the total



}


// this allows us to change 11 (ace) to 1 (ace) depending on the conditions of our ace count (checkace) and our sum (playerSum)
// this is why we counted the aces
function reduceAce(playerSum, playerAceCount) {
    while (playerSum > 21 && playerAceCount > 0) { // us having a positive player ace count indicates that there is an ace 
        playerSum -= 10;
        playerAceCount -= 1; // if yourAceCount was 2, it is now 1 (in terms of keeping track of YOUR aces)
    }
    return playerSum; // this is our else statement
}



/* nextRound.addEventListener('click', function() {
    yourCards.remove(cardImg);
    dealerCards.remove(cardImg);
    cardImg = ''
       dealerSum = 0;
     yourSum = 0;
      dealerAceCount = 0;
     yourAceCount = 0;
     message = ''
  }) */



