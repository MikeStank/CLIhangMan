// Game will be played here - the MAIN HOUSE!!!!!!!!!!!!!!!!

var inquirer = require('inquirer');
var words = require('game.js');
var display = require('./letter.js');
var check = require('./check.js')

// Set all of the initial settings
var currentWord;
var guessesLeft = 6;
var wins = 0;
var losses = 0;
var player = [];
var letter = [];
var wordsGuessed = [];

// Random word is selected for the user to play
function randoWordSelect() {

  var rando = Math.floor(Math.random() * 27)
  currentWord = words.wordSelection[x];
  // below code will not allow a repeat word to be shown
  if (wordsPlayed.includes(currentWord)){
    randoWordSelect();
  } else {
    player = new Display(currentWord);
    letter = new Check(currentWord);
  }
  wordsGuessed.push(currentWord);
};

// Game will restart after the user wins or loses

function newGame() {
  inquirer.prompt([{
    name: 'play',
    message: 'Wudchya say bout another? Click "y" or "n"',
  }]).then(function(yon) {
    var confirm = answer.play.toLowerCase();
    if (confirm == 'y'){
      guessesLeft = 6;
      letter.lettersGuessed = [];
      currentWord = '';
      letter.currentWordArray= [];

      selectRandomWord()
          console.log("Let's play Film Nerd hangman!");
          console.log("Guess letters to the word....");
          showPlayer.originalDisplay();
          console.log("Guesses Left: " + guessesLeft);
          guessLetters();
      } else if (confirm == 'n'){
        console.log("Well fine. I guess... bye?");
      } else {
        console.log("Press \'y\' or \'n\'");
        restartGame();
      }
    })
};

//START GAME------------------------------------------------------------
//select a random word from the state capital array
selectRandomWord();

// This is for TROUBLESHOOTING - it provides the correct answer
// console.log('the word is: ' + currentWord);


//Original display and instrictions

console.log("Let's play hangman!");
console.log('Guess letters to the word...');
showPlayer.originalDisplay();
console.log('');
console.log('Guesses Left: ' + guessesLeft);
console.log('');
//end of original display----------------------------

//Prompt the user to guess a letter
var guessLetters = function(){
	if(remainingGuesses > 0){
	inquirer.prompt([{
		name: 'currentGuess',
		message: 'Guess a letter'
	}]).then(function(answer){
		var letter = answer.currentGuess.toLowerCase();
		var letters = /^[a-z]+$/;
		//if letter is valid
		if(letter.match(letters)){
			if(checkLetter.lettersGuessed.includes(letter)){
				console.log('This has already been guessed');
				showPlayer.updatedDisplay(letter);
				console.log('Letters Guessed: ' + checkLetter.lettersGuessed);
				console.log('Guesses Left: ' + guessesLeft);
				console.log('-------------------------------------------------------');
				console.log('');
				guessLetters();
			}
			else{
				checkLetter.lettersGuessed.push(letter);
				if(checkLetter.currentWordArray.includes(letter)){
					console.log('That was a correct answer');
					showPlayer.updatedDisplay(letter);

					if(showPlayer.updated == currentWord){
						wins++;
						console.log('NICE. YOU WIN!');
						console.log('');
						console.log('# of wins: ' + wins);
						console.log('# of losses: ' + losses);
						console.log('');
						restartGame();
					}
					else{
						console.log('Letters Guessed: ' + checkLetter.lettersGuessed);
						console.log('Guesses Left: ' + guessesLeft);
						console.log('-------------------------------------------------------');
						console.log('');
						guessLetters();
					}
				}
				else{
					console.log('That was a wrong answer');
					showPlayer.updatedDisplay(letter);
					console.log('Letters Guessed: ' + checkLetter.lettersGuessed);
					guessesLeft--;
					console.log('Guesses Left: ' + guessesLeft);
					console.log('-------------------------------------------------------');
					console.log('');
					guessLetters();
				}
			}
		}
		//if letter is not valid
		else{
			console.log('Please select an alphabetic character');
			console.log('');
			guessLetters();
		}
	});
}
	else{
		losses++;
		console.log('Youuuuuu LOOOOOOOOSE!');
		console.log("You don't know jack about film. It was: " + currentWord);
		console.log('');
		console.log('# of Wins: ' + wins);
		console.log('# of losses: ' + losses);
		console.log('');
		restartGame();
	}
}

console.log('updated');
//Call the function
guessLetters();
