

var ChoseWord = function () {
  var array = ["pizza", "cat", "house", "poppy", "car", "orange"];
  var pickNumber = Math.floor(Math.random()*(6-0));
  var pickWord = array[pickNumber];
  return pickWord;
}

function Word(example, letter, guesses) {
    this.example = example;
    this.letter = letter;
    this.guesses = guesses;
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

Word.prototype.result = function(word, letter, guesses) {
    var newWord = new Word(word, letter, guesses);
    debugger;
    if (this.guesses >= newWord.count(word)) {
        return "you lose";
    } else {
        return "keep guessing";
    }
}

Word.prototype.guess = function(word, letter, guesses) {
  var newGuess = new Word(word, letter, guesses);
  var wordLength = newGuess.chop(word)
  console.log(wordLength.length)
    for(var i = 0; i<=wordLength.length; i = i+1 ){
        if(this.letter === wordLength[i]) {
          console.log(wordLength[i])
          this.currentWord.push(letter)
        }
    }
    return this.currentWord;
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
