describe("Word", function() {
    it("will create a word object with given properties", function() {
        var newWord = new Word("dog");
        expect(newWord.example).to.equal("dog");
        expect(newWord.wrongGuesses).to.equal(0);
        expect(newWord.guessedLetters).to.eql([]);
    });

    it("will chop up a word into its letters", function() {
        var newWord = new Word("dog");
        expect(newWord.chop("dog")).to.eql(["d", "o", "g"]);
    });

    it("will replace letters with underscore", function() {
        var newWord = new Word("dog");
        expect(newWord.replaceWord("dog")).to.eql("_ _ _");
    });

    it("will count total number of letters in the word", function() {
        var newWord = new Word("dog");
        expect(newWord.count("dog")).to.equal(3);
    });

    it("will check how many guesses are wrong", function() {
      var newWord = new Word("dog");
      expect(newWord.wrongGuesses).to.equal(0);
    });
});

describe('loopLetter', function() {
  it('will search the loopcreated and if the guess is wrong will give the user false', function(){
    var newWord = new Word("house");
    expect(loopLetter('t', newWord)).to.equal(false);
  });

  // it('will search the loopcreated for correct guess and will return an array with the locations of that letter', function() {
  //   var newWord = new Word("house");
  //   expect(loopLetter('o', newWord)).to.eql([1, 5]);
  // });

  it('will add guessed letters to the guessedLetters array', function() {
    var newWord = new Word("house");
    loopLetter('h' , newWord);
    loopLetter('o' , newWord);
    loopLetter('u' , newWord);
    expect(newWord.guessedLetters).to.eql(['h', 'o', 'u']);
  });
});
