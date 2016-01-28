

var ChoseWord = function () {
  var array = ["pizza", "cat", "house", "poppy", "car", "orange"];
  var pickNumber = Math.floor(Math.random()*(6-0));
  var pickWord = array[pickNumber];
  return pickWord;
}

function Word(example, letter, guesses) {
    this.example = example;
    this.letter = letter;
    this.guesses = 0;
    this.currentWord = [];
};

Word.prototype.chop = function(word) {
    var firstWord = word.split("");
    return firstWord;
};

Word.prototype.replaceWord = function(word) {
    var newWord = new Word(word);
    var chopWord = newWord.chop(word);
    var wordExample = [];
    for (var i = 1; i <= chopWord.length; i++) {
        wordExample.push("_");
    };
    var joinword  = wordExample.join(" ");
    return joinword;
};

Word.prototype.count = function(word) {
    var newWord = new Word(word);
    var chopWord = newWord.chop(word);
    var wordLength = chopWord.length;
    return wordLength;
};

Word.prototype.lose = function(word, letter, guesses) {
    var newWord = new Word(word, letter, guesses);
    if (this.guesses >= newWord.count(word)) {
        return "you lose";
    } else {
        return "keep guessing";
    }
}

// Word.prototype.correct = function(currentWord) {
//   var correctArray = [];
//     for(i=0; i<= correctArray; i++) {
//       if(letter === guesses) {
//         return
//       }
//     }
//
// }


Word.prototype.guess = function(word, letter, guesses) {
  var newGuess = new Word(word, letter, guesses);
  var wordLength = newGuess.chop(word)
    for(var i = 0; i<=wordLength.length; i++ ){
      // debugger;
        if(letter === wordLength[i]) {
          var spliced = this.currentWord.push(letter)
          console.log(spliced)

            }else {
        this.guesses = this.guesses +1
            }
        return this.guesses
    }
};

$(function() {

var word = ChoseWord();
var newWord = new Word(word);
this.currentWord = newWord.replaceWord(word);
$("#word-display").text(this.currentWord);
$("#hiddenWord").append(word)

$("form").submit(function(event) {
var inputLetter = $("#letters").val();
var results = newWord.guess(word,inputLetter,guesses);

$("#guesses").text(results);
        event.preventDefault();
    })

})
