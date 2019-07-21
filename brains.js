
    let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let remaining = 9;
    let wins = 0;
    let losses = 0;
    let yourGuesses = []
    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

   

    let updateComputerGuess = function() {
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(`computer guess: ${computerGuess}`);
      };


    let updateRemaining = function() {
        document.querySelector('#remaining').innerHTML = ` ${remaining}`;
      };

    
    const newGame = function() {
            //Reset game stats
            remaining = 9;
            yourGuesses = [];
            userGuess = " ";
            //computer generates a new guess
            updateComputerGuess();
            updateRemaining();
            document.querySelector('#guesses').innerHTML = ` ${userGuess}`; 
            };
   
    //Game starts on key press
    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        document.querySelector('#guesses').innerHTML = `${userGuess}`;  
        console.log(`User guess: ${userGuess}`);
        yourGuesses.push(userGuess);
        if (userGuess === computerGuess) {
            wins++;
            document.querySelector('#wins').innerHTML = ` ${wins}`;
            alert("You are psychic!");
            newGame();
        } else {
            remaining--;
            if (remaining === 0) {
                losses++;
                document.querySelector('#losses').innerHTML = ` ${losses}`;
                alert("Sorry, you lose"); 
                newGame();
            }
        }
        updateRemaining();
        };

        //Log the first computer guess
        console.log(`computer guess: ${computerGuess}`);
        