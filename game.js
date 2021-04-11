// Rock Paper Scissors

const GAMEOPTIONS = ["Rock", "Paper", "Scissors"];

// 1.

let computerHand = () => {
    /**
     * Generates random int
     * Between 0 and options available
     * Returns that int as the computer's hand
     */

    let hand = Math.floor(Math.random() * GAMEOPTIONS.length);
    return hand;
}

// 2.

let userHand = () => {
    /**
     * Asks the user for hand
     * Keeps asking until between 0...3
     * Returns the hand
     */

    const prompt = require('prompt-sync')({sigint: true});

    let hand;

    while (!(hand in [...Array(GAMEOPTIONS.length + 1).keys()])) {
        hand = Number(prompt("Your choice: "));
    }

    return hand;

}

// 3.

let result = (user, computer) => {
    /** 
    * Takes two ints matching the two hands
    * Returns the winner
    */

    if (user === computer) {
        return "tie";
    } else if ((user === 0 && computer === 2) || user === computer+1) {
        return "user";
    } else {
        return "computer";
    }

}

// 4.

let game = () => {

    // Initial messages
    console.log("Welcome to Paper Rock Scissors!");
    console.log("Can you make it against the might of your computer?");

    // Boolean defining if game is on
    let gameIsOn = true;

    // Scores:
    let userWins = 0;
    let computerWins = 0;

    // Game loop
    while (gameIsOn) {

        console.log();
        console.log("------------------------------------------");
        console.log("Enter [0] for rock, [1] for paper, [2] for scissors, [3] to stop playing.");

        // The two hands
        let user = userHand();
        let computer = computerHand();

        // Abort game
        if (user === 3) {
            gameIsOn = !gameIsOn;
            console.log("Ok, bye!");
            continue;
        }

        // Display gands
        console.log(`You chose ${GAMEOPTIONS[user]}.`);
        console.log(`The computer chose ${GAMEOPTIONS[computer]}.`);

        // Play the game
        let outcome = result(user, computer);

        // Display result
        if (outcome === "user") {
            console.log("You won.");
            userWins++;
        } else if (outcome === "computer") {
            console.log("You lost.");
            computerWins++;
        } else if (outcome === "tie") {
            console.log("It's a tie.");
        }

        console.log(`You: ${userWins}. Computer: ${computerWins}.`);
        console.log();


    }

}

// Call the game
game();