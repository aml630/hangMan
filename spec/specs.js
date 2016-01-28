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
    it("will tell you if you lose", function() {
        var newWord = new Word("dog", "d", 9);
        expect(newWord.result("dog", "z", 9)).to.equal("you lose");
    });
    it("will tell you if you should keep guessing", function() {
        var newWord = new Word("dog", "d", 0);
        expect(newWord.result("dog", "z", 0)).to.equal("keep guessing");
    });
});
