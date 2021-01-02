const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();
const re = new RegExp(`(<span class="highlight">)|(</span>)`, "g");

suite(`Unit Tests`, () => {
  suite(`Translate to British English`, () => {
    test(`Translate Mangoes are my favorite fruit.`, () => {
      assert.equal(
        translator.ab(`Mangoes are my favorite fruit.`).replace(re, ""),
        `Mangoes are my favourite fruit.`
      );
    });
    test(`I ate yogurt for breakfast.`, () => {
      assert.equal(
        translator.ab(`I ate yogurt for breakfast.`).replace(re, ""),
        `I ate yoghurt for breakfast.`
      );
    });
    test(`We had a party at my friend's condo.`, () => {
      assert.equal(
        translator.ab(`We had a party at my friend's condo.`).replace(re, ""),
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
        translator.ab(`The parking lot was full.`).replace(re, ""),
        `The car park was full.`
      );
    });
    test(`Like a high tech Rube Goldberg machine.`, () => {
      assert.equal(
        translator
          .ab(`Like a high tech Rube Goldberg machine.`)
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
        translator.ab(`No Mr. Bond, I expect you to die.`).replace(re, ""),
        `No Mr Bond, I expect you to die.`
      );
    });
    test(`Dr. Grosh will see you now.`, () => {
      assert.equal(
        translator.ab(`Dr. Grosh will see you now.`).replace(re, ""),
        `Dr Grosh will see you now.`
      );
    });
    test(`Lunch is at 12:15 today.`, () => {
      assert.equal(
        translator.ab(`Lunch is at 12:15 today.`).replace(re, ""),
        `Lunch is at 12.15 today.`
      );
    });
  });
  suite(`Translate to American English`, () => {
    test(`We watched the footie match for a while.`, () => {
      assert.equal(
        translator
          .ba(`We watched the footie match for a while.`)
          .replace(re, ""),
        `We watched the soccer match for a while.`
      );
    });
    test(`Paracetamol takes up to an hour to work.`, () => {
      assert.equal(
        translator
          .ba(`Paracetamol takes up to an hour to work.`)
          .replace(re, ""),
        `Tylenol takes up to an hour to work.`
      );
    });
    test(`First, caramelise the onions.`, () => {
      assert.equal(
        translator.ba(`First, caramelise the onions.`).replace(re, ""),
        `First, caramelize the onions.`
      );
    });
    test(`I spent the bank holiday at the funfair.`, () => {
      assert.equal(
        translator
          .ba(`I spent the bank holiday at the funfair.`)
          .replace(re, ""),
        `I spent the public holiday at the carnival.`
      );
    });
    test(`I had a bicky then went to the chippy.`, () => {
      assert.equal(
        translator.ba(`I had a bicky then went to the chippy.`).replace(re, ""),
        `I had a cookie then went to the fish-and-fish-and-chip shop.`
      );
    });
    test(`I've just got bits and bobs in my bum bag.`, () => {
      assert.equal(
        translator
          .ba(
            `I've just got bits and bobs in my bum bag.`,
            `british-to-american`
          )
          .replace(re, ""),
        `I've just got odds and ends in my fanny pack.`
      );
    });
    test(`The car boot sale at Boxted Airfield was called off.`, () => {
      assert.equal(
        translator
          .ba(
            `The car boot sale at Boxted Airfield was called off.`,
            `british-to-american`
          )
          .replace(re, ""),
        `The swap meet at Boxted Airfield was called off.`
      );
    });
    test(`Have you met Mrs Kalyani?`, () => {
      assert.equal(
        translator.ba(`Have you met Mrs Kalyani?`).replace(re, ""),
        `Have you met Mrs. Kalyani?`
      );
    });
    test(`Prof Joyner of King's College, London.`, () => {
      assert.equal(
        translator
          .ba(`Prof Joyner of King's College, London.`, `british-to-american`)
          .replace(re, ""),
        `Prof. Joyner of King's College, London.`
      );
    });
    test(`Tea time is usually around 4 or 4.30.`, () => {
      assert.equal(
        translator.ba(`Tea time is usually around 4 or 4.30.`).replace(re, ""),
        `Tea time is usually around 4 or 4:30.`
      );
    });
  });
  suite(`Highlight translation`, () => {
    test(`Mangoes are my favorite fruit.`, () => {
      assert.include(
        translator.ab(`Mangoes are my favorite fruit.`),
        `<span class="highlight">favourite</span>`
      );
    });
    test(`I ate yogurt for breakfast.`, () => {
      assert.include(
        translator.ab(`I ate yogurt for breakfast.`),
        `<span class="highlight">yoghurt</span>`
      );
    });
    test(`We watched the footie match for a while.`, () => {
      assert.include(
        translator.ba(`We watched the footie match for a while.`),
        `<span class="highlight">soccer</span>`
      );
    });
    test(`Paracetamol takes up to an hour to work.`, () => {
      assert.include(
        translator.ba(`Paracetamol takes up to an hour to work.`),
        `<span class="highlight">Tylenol</span>`
      );
    });
  });
});
