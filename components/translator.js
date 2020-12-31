const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");
const Hidden = require("util");

const hidden = (...message) =>
  Hidden.inspect(...message, { showHidden: true, depth: null });

class Translator {
  abarray(text, locale) {
    let translated = "";
    // creates array of words and punctuation.
    const splitText = text
      .replace(/[^\w\s]|_/g, function ($1) {
        return ` |${$1}`;
      })
      .replace(/[ ]/g, " ")
      .split(/[ ]/);
    let split = [];
    console.log(splitText);

    // go through each word
    splitText.forEach((aWord) => {
      console.log(aWord);
      if (aWord[0] != "") {
      }
      const lAWord = aWord.toLowerCase();
      let bWord =
        americanToBritishSpelling[lAWord] ||
        americanOnly[lAWord] ||
        americanToBritishTitles[lAWord];
      bWord = aWord.match(/^[A-Z]/) ? this.capitalize(bWord) : bWord;
      translated += bWord
        ? `<span class="highlight">${bWord}</span> `
        : `${aWord} `;
    });

    translated = translated.trim();
    console.log("text:      ", hidden(text));
    console.log("translated:", hidden(translated));
    return translated;
    // Look for Caps, carriage returns (/n)
  }

  ab(text, locale) {
    //iterate through each list and find if the string contains that string
    let translated = text.toLowerCase(); //! this make American words lowercase, not good
    for (const aWord in americanToBritishSpelling) {
      // console.log(aWord);
      while (translated.includes(aWord)) {
        translated = this.translateAB(aWord, translated, text);
        console.log(translated);
      }
    }
    return translated;
    // repeat this until all duplicated words are translated
  }

  translateAB(aWord, translated, text) {
    const matched = translated.match(aWord);
    if (matched) {
      console.log("matched:", matched);
      if (text[matched.index] === text[matched.index].toUpperCase()) {
        return translated.replace(
          aWord,
          this.capitalize(americanToBritishSpelling[aWord])
        );
      } else {
        return translated.replace(aWord, americanToBritishSpelling[aWord]);
      }
    }
  }

  capitalize(word) {
    return word && word[0].toUpperCase() + word.slice(1);
  }
}

module.exports = Translator;
