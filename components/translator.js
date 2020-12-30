const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");
const Hidden = require("util");

const hidden = (...message) =>
  Hidden.inspect(...message, { showHidden: true, depth: null });

class Translator {
  translate(text, locale) {
    let translated = "";
    const splitText = text.split(" ");
    console.log(splitText);
    splitText.forEach((aWord) => {
      // checks for uppercase

      const bWord = aWord.match(/^[A-Z]/)
        ? this.capitalize(americanToBritishSpelling[aWord.toLowerCase()])
        : americanToBritishSpelling[aWord];

      translated += (bWord || aWord) + " ";
    });
    translated = translated.trim();
    console.log("text:      ", hidden(text));
    console.log("translated:", hidden(translated));
    return translated;
    // Look for Caps, carriage returns (/n)
  }

  capitalize(word) {
    return word && word[0].toUpperCase() + word.slice(1);
  }
}

module.exports = Translator;
