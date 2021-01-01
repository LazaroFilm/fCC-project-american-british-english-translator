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
    let translated = text;
    for (const aWord in americanToBritishSpelling) {
      // Checking if the string still contains american words.
      while (
        translated
          .toLowerCase()
          .replace(`<span class="highlight">`, "")
          .replace(`</span>`, "")
          .includes(aWord)
      ) {
        translated = this.translateAB(aWord, translated, text);
        // console.log("translating", aWord);
      }
    }
    return translated;
  }

  translateAB(aWord, translated, text) {
    const matched = translated.toLowerCase().match(aWord);
    console.log(matched);
    if (matched) {
      //! This breaks after replacing the first word
      //? index of text and translated don't match anymore
      if (
        translated[matched.index] === translated[matched.index].toUpperCase()
      ) {
        return translated.replace(
          this.capitalize(aWord),
          `<span class="highlight">${this.capitalize(
            americanToBritishSpelling[aWord]
          )}</span>`
        );
      } else {
        return translated.replace(
          aWord,
          `<span class="highlight">${americanToBritishSpelling[aWord]}</span>`
        );
      }
    }
  }

  capitalize(word) {
    return word && word[0].toUpperCase() + word.slice(1);
  }
}

module.exports = Translator;
