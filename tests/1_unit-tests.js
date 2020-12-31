const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();

suite(`Unit Tests`, () => {
  suite(`to British English`, () => {
    test(`Translate Mangoes are my favorite fruit.`, () => {
      assert.equal(
        translator.ab(`Mangoes are my favorite fruit.`, `american-to-british`),
        `Mangoes are my <span class="highlight">favourite</span> fruit.`
      );
    });
    test(`I ate yogurt for breakfast.`, () => {
      assert.equal(
        translator.ab(`I ate yogurt for breakfast.`, `american-to-british`),
        `I ate <span class="highlight">yoghurt</span> for breakfast.`
      );
    });
    test(`We had a party at my friend's condo.`, () => {
      assert.equal(
        translator.ab(
          `We had a party at my friend's condo.`,
          `american-to-british`
        ),
        `We had a party at my friend's <span class="highlight">flat</span>.`
      );
    });
    test(`Can you toss this in the trashcan for me?`, () => {
      assert.equal(
        translator.ab(
          `Can you toss this in the trashcan for me?`,
          `american-to-british`
        ),
        `Can you toss this in the <span class="highlight">bin</span> for me?`
      );
    });
    test(`The parking lot was full.`, () => {
      assert.equal(
        translator.ab(`The parking lot was full.`, `american-to-british`),
        `The <span class="highlight">car park</span> was full.`
      );
    });
    test(`Like a high tech Rube Goldberg machine.`, () => {
      assert.equal(
        translator.ab(
          `Like a high tech Rube Goldberg machine.`,
          `american-to-british`
        ),
        `Like a high tech <span class="highlight">Heath Robinson device</span>.`
      );
    });
  });
});
