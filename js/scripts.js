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

Word.prototype.replaceWord = function() {
    var chopWord = this.example;
    for (var i = 1; i <= chopWord.length; i++) {
        this.guessedLetters.push("_");
    };
    var joinword  = this.guessedLetters.join(" ");
    return joinword;
};

Word.prototype.count = function() {
return this.example.length
};

var loopLetter = function(letter, word) {
  var gotletter = false;
  var array = [];
  // word.guessedLetters.push(letter);
  for(var i = 0; i<=word.example.length; i = i+1 ){
    if(word.example[i] === letter) {
      // debugger;
      array.push(i)
      array.push(word.example.length)
      word.guessedLetters[i] = letter;
      gotletter = true;
      }
    }
    if (gotletter === false) {
      return gotletter;
    }else {
    return word.guessedLetters;
};
}

// var randomWord = function () {
// var array = ["dog", "mouse", "rat", "cat", "bird"]
// var random = math.random() *(4-0);
// console.log(random)
// }


$(function() {


  var newWord = new Word("house");
  var blanks = newWord.replaceWord();

  $("#word-display").text(blanks);
  $("#hiddenWord").append(newWord);
  $("form").submit(function(event) {
    // debugger;
    var inputLetter = $("#letters").val();
    var result = loopLetter(inputLetter, newWord)
    event.preventDefault();
    $("#word-display").text(result);

  });

$("#guesses").text("house");
    });
