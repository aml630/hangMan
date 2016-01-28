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

    // it("will tell you if you lose", function() {
    //     var newWord = new Word("dog", "d", 9);
    //     expect(newWord.result("dog", "z", 9)).to.equal("you lose");
    // });
    //
    // it("will tell you if you should keep guessing", function() {
    //     var newWord = new Word("dog", "d", 0);
    //     expect(newWord.result("dog", "z", 0)).to.equal("keep guessing");
    // });
});



describe('loopLetter', function() {
  it('will search the loopcreated and if the guess is wrong will give the user false', function(){
    var newWord = new Word("house");
    expect(loopLetter('t', newWord)).to.equal(false);
  });

  it('will search the loopcreated for correct guess and will return an array with the locations of that letter', function() {
    var newWord = new Word("house");
    expect(loopLetter('h', newWord)).to.eql([0,5]);
  });

//   it('will add guessed letters to the usedLetters array', function() {
//     var testGame = new Game("falafel");
//     findLetter('r', testGame);
//     findLetter('f', testGame);
//     findLetter('s', testGame);
//     expect(testGame.usedLetters).to.eql(['r', 'f', 's']);
//   });
});
