const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();
const re = new RegExp(`(<span class="highlight">)|(</span>)`, "g");

suite(`Unit Tests`, () => {
  suite(`Translate to British English`, () => {
    test(`Translate Mangoes are my favorite fruit.`, () => {
      assert.equal(
        translator
          .ab(`Mangoes are my favorite fruit.`, `american-to-british`)
          .replace(re, ""),
        `Mangoes are my favourite fruit.`
      );
    });
    test(`I ate yogurt for breakfast.`, () => {
      assert.equal(
        translator
          .ab(`I ate yogurt for breakfast.`, `american-to-british`)
          .replace(re, ""),
        `I ate yoghurt for breakfast.`
      );
    });
    test(`We had a party at my friend's condo.`, () => {
      assert.equal(
        translator
          .ab(`We had a party at my friend's condo.`, `american-to-british`)
          .replace(re, ""),
        `We had a party at my friend's flat.`
      );
    });
    test(`Can you toss this in the trashcan for me?`, () => {
      assert.equal(
        translator
          .ab(
            `Can you toss this in the trashcan for me?`,
            `american-to-british`
          )
          .replace(re, ""),
        `Can you toss this in the bin for me?`
      );
    });
    test(`The parking lot was full.`, () => {
      assert.equal(
        translator
          .ab(`The parking lot was full.`, `american-to-british`)
          .replace(re, ""),
        `The car park was full.`
      );
    });
    test(`Like a high tech Rube Goldberg machine.`, () => {
      assert.equal(
        translator
          .ab(`Like a high tech Rube Goldberg machine.`, `american-to-british`)
          .replace(re, ""),
        `Like a high tech Heath Robinson device.`
      );
    });
    test(`To play hooky means to skip class or work.`, () => {
      assert.equal(
        translator
          .ab(
            `To play hooky means to skip class or work.`,
            `american-to-british`
          )
          .replace(re, ""),
        `To bunk off means to skip class or work.`
      );
    });
    test(`No Mr. Bond, I expect you to die.`, () => {
      assert.equal(
        translator
          .ab(`No Mr. Bond, I expect you to die.`, `american-to-british`)
          .replace(re, ""),
        `No Mr Bond, I expect you to die.`
      );
    });
    test(`Dr. Grosh will see you now.`, () => {
      assert.equal(
        translator
          .ab(`Dr. Grosh will see you now.`, `american-to-british`)
          .replace(re, ""),
        `Dr Grosh will see you now.`
      );
    });
    test(`Lunch is at 12:15 today.`, () => {
      assert.equal(
        translator
          .ab(`Lunch is at 12:15 today.`, `american-to-british`)
          .replace(re, ""),
        `Lunch is at 12.15`
      );
    });
  });
  suite(`Translate to American English`, () => {
    test(`We watched the footie match for a while.`, () => {
      assert.equal(
        translator
          .ab(`We watched the footie match for a while.`, `british-to-american`)
          .replace(re, ""),
        ``
      );
    });
    test(`Paracetamol takes up to an hour to work.`, () => {
      assert.equal(
        translator
          .ab(`Paracetamol takes up to an hour to work.`, `british-to-american`)
          .replace(re, ""),
        ``
      );
    });
    test(`First, caramelise the onions.`, () => {
      assert.equal(
        translator
          .ab(`First, caramelise the onions.`, `british-to-american`)
          .replace(re, ""),
        ``
      );
    });
    test(`I spent the bank holiday at the funfair.`, () => {
      assert.equal(
        translator
          .ab(`I spent the bank holiday at the funfair.`, `british-to-american`)
          .replace(re, ""),
        ``
      );
    });
    test(`I had a bicky then went to the chippy.`, () => {
      assert.equal(
        translator
          .ab(`I had a bicky then went to the chippy.`, `british-to-american`)
          .replace(re, ""),
        ``
      );
    });
    test(`I've just got bits and bobs in my bum bag.`, () => {
      assert.equal(
        translator
          .ab(
            `I've just got bits and bobs in my bum bag.`,
            `british-to-american`
          )
          .replace(re, ""),
        ``
      );
    });
    test(`The car boot sale at Boxted Airfield was called off.`, () => {
      assert.equal(
        translator
          .ab(
            `The car boot sale at Boxted Airfield was called off.`,
            `british-to-american`
          )
          .replace(re, ""),
        ``
      );
    });
    test(`Have you met Mrs Kalyani?`, () => {
      assert.equal(
        translator
          .ab(`Have you met Mrs Kalyani?`, `british-to-american`)
          .replace(re, ""),
        ``
      );
    });
    test(`Prof Joyner of King's College, London.`, () => {
      assert.equal(
        translator
          .ab(`Prof Joyner of King's College, London.`, `british-to-american`)
          .replace(re, ""),
        ``
      );
    });
    test(`Tea time is usually around 4 or 4.30.`, () => {
      assert.equal(
        translator
          .ab(`Tea time is usually around 4 or 4.30.`, `british-to-american`)
          .replace(re, ""),
        ``
      );
    });
  });
});
