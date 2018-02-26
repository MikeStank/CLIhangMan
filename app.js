// ================================== PSEUDOCODE ==================================
    //=== 1.) Command line will ask user to input a letter
    //=== 2.) If letter is in the hidden word, it will be added to the corresponding blank space
    //=== 3.) If letter is incorrect, user will be notified that it is not a part of the hidden word and will deduct one try from user
    //=== 4.) If the user uses up all of their tries, they lose, the command line tells them so, and a new blank word will appear
    //=== 5.) If the user completes the word, the command line will notify them they win, and then a new word will appear for them to work on


// Constructor will be housed in game.js file

Display = function(word) {

  this.wordArray = word.split(''),
  this.dashesArray = [],
  this.updated,
  this.originalDisplay = function() {
      for (var i = 0; i < this.wordArray.length; i++) {
        wordArray[i]
          if(this.wordArray[i] === ' '){
            x = ' ';
            this.dashesArray.push(x);
          }
          else {
            x = '-';
            this.dashesArray.push(x);
          }
      }
      console.log(this.dashesArray.join(''));

  },
  this.updatedDisplay = function(letter) {

    for (var i = 0; i < wordArray.length; i++) {
      if (letter == this.wordArray[i]){
          this.dashesArray.splice(i, 1, letter);
      }
    }
    this.updated = this.dashesArray.join('');
    console.log(this.updated);
  },

  this.checkinWins = function() {
     console.log('victory check complete')
     console.log('entered word = ' + this.arrayOfDashes.join(''));
     console.log(word);
     if(this.arrayOfDashes.join('') == word){
     	victory = true;
     	return victory;


  }

}
