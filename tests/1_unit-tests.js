const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();

suite("Unit Tests", () => {
  suite("to British English", () => {
    test("Translate Mangoes are my favorite fruit.", () => {
      assert.equal(
        translator.translate(
          "Mangoes are my favorite fruit.",
          "american-to-british"
        ),
        "Mangoes are my favourite fruit."
      );
    });
    test("I ate yogurt for breakfast.", () => {
      assert.equal(
        translator.translate(
          "I ate yogurt for breakfast.",
          "american-to-british"
        ),
        "I ate yoghurt for breakfast."
      );
    });
    test("We had a party at my friend's condo.", () => {
      assert.equal(
        translator.translate(
          "We had a party at my friend's condo.",
          "american-to-british"
        ),
        "We had a party at my friend's flat."
      );
    });
    test("Can you toss this in the trashcan for me?", () => {
      assert.equal(
        translator.translate(
          "Can you toss this in the trashcan for me?",
          "american-to-british"
        ),
        "Can you toss this in the bin for me?"
      );
    });
    test("The parking lot was full.", () => {
      assert.equal(
        translator.translate(
          "The parking lot was full.",
          "american-to-british"
        ),
        "The car park was full."
      );
    });
    test("Like a high tech Rube Goldberg machine.", () => {
      assert.equal(
        translator.translate(
          "Like a high tech Rube Goldberg machine.",
          "american-to-british"
        ),
        "Like a high tech Heath Robinson device."
      );
    });
  });
});
