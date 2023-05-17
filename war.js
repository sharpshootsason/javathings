
const cardGame = [
let aryClubs = ['2-C.png', '3-C.png', '4-C.png','5-C.png', '6-C.png','7-C.png', '8-C.png', '9-C.png', '10-C.png',
 'J-C.png', 'Q-C.png', 'K-C.png', 'A-C.png']
let aryDiamonds = ['2-D.png', '3-D.png', '4-D.png','5-D.png', '6-D.png','7-D.png', '8-D.png', '9-D.png', '10-D.png',
 'J-D.png', 'Q-D.png', 'K-D.png', 'A-D.png']
 let aryHearts = ['2-H.png', '3-H.png', '4-H.png','5-H.png', '6-H.png','7-H.png', '8-H.png', '9-H.png', '10-H.png',
 'J-H.png', 'Q-H.png', 'K-H.png', 'A-H.png']
 let arySpades = ['2-S.png', '3-S.png', '4-S.png','5-S.png', '6-S.png','7-S.png', '8-S.png', '9-S.png', '10-S.png',
 'J-S.png', 'Q-S.png', 'K-S.png', 'A-S.png'] ]


 let playerScore = 0
 let computerScore = 0


 document.querySelector("#start").addEventListener('click', function() {
    startGame();
 })

cardGame.forEach((card) => card.addEventListener('click')

function startGame() {

    document.querySelector('#next').addEventListener('click', function() {
        

        let suit1 = Math.ceil(Math.random() * 4)
        let suit2 = Math.ceil(Math.random() * 4)
        let card1 = Math.floor(Math.random() * 13)
        let card2 = Math.floor(Math.random() * 13)
    
        let cardSelected1
           
        console.log(suit1)
        console.log(card1)
       

        for (let i = 0; i < 52; i++) {

            
           
            if (suit1 == '1') {
               cardSelected1 = aryClubs[card1]
               console.log(cardSelected1)
            } else if (suit1 == '2') {
               cardSelected1 = aryDiamonds[card1]
               console.log(cardSelected1)
            } else if (suit1 == '3') {
               cardSelected1 = aryHearts[card1]
               console.log(cardSelected1)
            } else {
               cardSelected1 = arySpades[card1]
            }
        // we console.log to help us de-bug
            document.getElementById("card1").src = './cards/' + cardSelected1
        
            if (suit2 == '1') {
                cardSelected1 = aryClubs[card2]
                console.log(cardSelected1)
             } else if (suit2 == '2') {
                cardSelected1 = aryDiamonds[card2]
                console.log(cardSelected1)
             } else if (suit2 == '3') {
                cardSelected1 = aryHearts[card2]
                console.log(cardSelected1)
             } else {
                cardSElected1 = arySpades[card2]
             }
        
             document.getElementById("card2").src = './cards/' + cardSelected1
        
        
            if (card1 > card2) {
            playerScore ++
            } else if (card1 < card2) {
            computerScore ++
            } else if (card1 == card2) {
                playerScore ++
                computerScore ++
            }
    }



    let winner = ""

    if (playerScore > computerScore) {
       winner = "Phew! You win!"
    } else if (computerScore > playerScore) {
        winner = "oh no, you lost!"
    } else if (playerScore === computerScore) {
        winner = "Woah, its a tie- thats pretty rare!"
    }

    document.getElementById('results').innerText = winner
    })
}
