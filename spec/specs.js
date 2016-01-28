// describe("ChoseWord", function() {
//   it("will chose from a list of six random words", function() {
//     var chosewords= new ChoseWord ();
//     expect(chosewords.pickNumber.to.equal("pizza");
//     });
//     it("will chose from a list of six random words", function() {
//     var chosewords= new ChoseWord ();
//     expect(chosewords.pickNumber).to.equal("cat");
//     });
//     it("will chose from a list of six random words", function() {
//     var chosewords= new ChoseWord ();
//     expect(chosewords.pickNumber).to.equal("house");
//     });
// });




describe("Word", function() {
    it("will display its word", function() {
        var newWord = new Word("dog");
        expect(newWord.example).to.equal("dog");
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
    it("will test if word contains a letter", function() {
        var newWord = new Word("dog", "d", 0);
        expect(newWord.guess("dog", "d")).to.equal(true);
        expect(newWord.guess("dog", "o")).to.equal(true);
        expect(newWord.guess("dog", "g")).to.equal(true);
        expect(newWord.guess("dog", "z")).to.equal(1);
    });
    it("will tell you if you lose", function() {
        var newWord = new Word("dog", "d", 4);
        expect(newWord.lose("dog", "z", 4)).to.equal("you lose");
    });
    it("will tell you if you should keep guessing", function() {
        var newWord = new Word("dog", "d", 0);
        expect(newWord.lose("dog", "z", 0)).to.equal("keep guessing");
    });
    it("will display letter once picked", function() {
        var newWord = new Word("dog", "d", 0);
        expect(newWord.picked("dog", "d", 0)).to.eql(["d", "_", "_"]);
    });
});
