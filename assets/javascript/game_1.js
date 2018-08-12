var computerOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];                                   // Defining an array of 26 letters
var wins = 0;                                       //process - 1
var losses = 0;                                     //process - 2
// function newGame() {
  var guessesLeft = 5;                                //process - 3, allowing user to guess 5 times
  var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
  console.log(computerChoice);                  //input - 1: computer choosing a random letter

  document.onkeyup = function (event) {        //input - 2: user guessing a letter (event listner:on key release)
    var userGuess = event.key;
    console.log(userGuess);
    if (userGuess === computerChoice) {        //condition check - 1: checks if user and computer chose same letter
      console.log("well done!!");               //true
      wins++;
      console.log("wins" + wins);
    }
    else                                        //false
      guessesLeft--;

    if (guessesLeft !== 0) {               //condition check - 2: checks if user have more chances to guess letter
      console.log("guesses left = " + guessesLeft);     //true
    }
    else
      console.log("Game Over");                 //false
    losses++;
    // newGame();
    //call fnction from guesses left


  }
// }