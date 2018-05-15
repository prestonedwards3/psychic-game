
    let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let remaining = 9;
    let wins = 0;
    let losses = 0;
    let yourGuesses = []
    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    

    let updateRemaining = function() {
        document.querySelector('#remaining').innerHTML = `Guesses left: ${remaining}`;
      };

    let updateYourGuesses = function (event) {
        userGuess = Document.onkeyup
        document.querySelector('#guesses').innerHTML = + userGuess;  
        
        
        }

        const newGame = function() {
            remaining = 9;
            yourGuesses = [];
          
            updateComputerGuess();
            updateRemaining();
            updateyourGuesses();
          }
          
        

    let updateComputerGuess = function() {
            this.computerGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
          };


          document.onkeyup = function(event) {
            remaining--;
          let userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        
          yourGuesses.push(userGuess);
          updateRemaining();
          updateYourGuesses();
        
                if (remaining > 0){
                    if (userGuess == computerGuess){
                        wins++;
                        document.querySelector('#wins').innerHTML = `Wins:  ${wins}`;
                        alert("You are psychic!");
                        newGame();
                    }
                }else if(remaining == 0){
                    losses++;
                    document.querySelector('#losses').innerHTML = `Losses:  ${losses}`;
                    alert("Sorry, you lose"); 
                    newGame();
                }
        };

        