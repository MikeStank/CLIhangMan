// Constructor file

// Letter will either be shown or a "-" will be shown (right or wrong)
Check = function(word) {

  this.currentWord = word,
  this.currentWordArray = word.split(''),
  this.lettersGuessed = []

};
