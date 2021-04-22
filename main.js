
// Array of options
const GAMEOPTIONS = ["Rock", "Paper", "Scissor"];

// Score cards on screen
let humanScoreCard = document.querySelector(".humanScoreCard");
let computerScoreCard = document.querySelector(".computerScoreCard");

// Points
let humanPoints = 0;
let computerPoints = 0;

// Update Points
function updatePoints() {
    humanScoreCard.innerText = String(humanPoints);
    computerScoreCard.innerText = String(computerPoints);
}

// Human and computer hand
let humanHand = (hand) => GAMEOPTIONS.indexOf(hand);
let computerHand = () => Math.floor(Math.random() * GAMEOPTIONS.length);

// Result calculator
let result = (user, computer) => {
    if (user === computer) {
        return "tie";
    } else if ((user === 0 && computer === 2) || user === computer+1) {
        humanPoints++;
        return "human";
    } else {
        computerPoints++;
        return "computer";
    }
}

function updateFrontEnd(human, computer, winner) {

    // Human update

    let humanVote = document.querySelector(`.${GAMEOPTIONS[human].toLocaleLowerCase()}.human`);
    humanVote.classList.add('selected');

    // Computer update
    let computerVote = document.querySelector(`.${GAMEOPTIONS[computer].toLocaleLowerCase()}.computer`);
    computerVote.classList.add('selected');

    // Update Points
    updatePoints();

    // Clean Shop
    setTimeout(function() {
        humanVote.classList.remove('selected');
        computerVote.classList.remove('selected');
    }, 1000);

}


function game(e) {

    let human = humanHand(e);
    let computer = computerHand();
    let winner = result(human, computer);

    updateFrontEnd(human, computer, winner);

}


window.addEventListener('click', function(e){

    const click = e.srcElement.innerText;

    if (GAMEOPTIONS.includes(click)) {
        game(click);
    }

});
