function Word(example) {
    this.example = example;
    this.letter = "";
    this.wrongGuesses = 0;
    this.correctGuesses = this.example.length;
    this.guessedLetters = [];
};


Word.prototype.chop = function() {
    var firstWord = this.example.split("");
    return firstWord;
};

Word.prototype.wrongGuesses = function() {
  this.wrongGuesses = this.wrongGuesses +1 ;
    return this.wrongGuesses;

};
Word.prototype.correctGuesses = function() {
  this.correctGuesses = this.correctGuesses  -1 ;
        return this.correctGuesses;
};

var loopLetters = function(letter, word) {
  var gotletter = false;
  var array = [];
  word.guessedLetters.push(letter);
  for(var i = 0; i<=word.example.length; i = i+1 ){
    if(word.example[i] === letter) {
      array.push(i)
      foundLetter = true;
      }
    }
    if (gotletter === false) {
      return gotletter;
    }else {
    return array;
};
}

//
Word.prototype.replaceWord = function() {

    var chopWord = this.example;
    for (var i = 1; i <= chopWord.length; i++) {
        this.guessedLetters.push("_");
    };
    var joinword  = this.guessedLetters.join(" ");
    return joinword;
};

Word.prototype.count = function() {
  // debugger;
  console.log(this.example)
return this.example.length
};

// Word.prototype.result = function(word, letter, guesses) {
//     var newWord = new Word(word, letter, guesses);
//     debugger;
//     if (this.guesses >= newWord.count(word)) {
//         return "you lose";
//     } else {
//         return "keep guessing";
//     }
// }
//
// Word.prototype.guess = function(word, letter, guesses) {
//   var newGuess = new Word(word, letter, guesses);
//   var wordLength = newGuess.chop(word)
//   console.log(wordLength.length)
//     for(var i = 0; i<=wordLength.length; i = i+1 ){
//         if(this.letter === wordLength[i]) {
//           console.log(wordLength[i])
//           this.currentWord.push(letter)
//         }
//     }
//     return this.currentWord;
// };


// $(function() {
//
//   // var word = ChoseWord();
//   // var newWord = new Word(word);
//   // this.currentWord = newWord.replaceWord(word);
//   $("#word-display").text(this.currentWord);
//   $("#hiddenWord").append(word)
//
//   $("form").submit(function(event) {
//     var inputLetter = $("#letters").val();
//     var results = newWord.guess(word,inputLetter,guesses);
//   });
// });
// $("#guesses").text(results);
//         event.preventDefault();
//     });
