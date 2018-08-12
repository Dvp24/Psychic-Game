var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var userChoice;
var guesses = 5;
var wins = 0;
var losses = 0;

var computerSel = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerSel);
document.onkeyup = function(event) {
  userChoice = event.key;
  console.log("you pressed key " + userChoice)
  for (i=guesses; i>=0; i--)
  {

    if(userChoice === computerSel){
      wins++;
    }
    else 
    {
      guesses--;
      if(guesses === 0)
      {
      losses++;
      }
    }

  }
}
