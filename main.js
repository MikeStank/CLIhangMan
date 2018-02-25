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
    message: 'Wudja say bout another? Click "y" or "n"',
  }]).then(function(yon) {
    var confirm = answer.play.toLowerCase();
    if (confirm == 'y'){
      guessesLeft = 6;
      letter.lettersGuessed = [];
      currentWord = '';
      letter.currentWordArray= [];

      selectRandomWord(){

      }
    }
  })
}
