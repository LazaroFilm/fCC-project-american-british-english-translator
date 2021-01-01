const _ = require("lodash");
const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");
const chalk = require("chalk");
const consoleRed = (...m) => console.log(chalk.red(...m));
const consoleGreen = (...m) => console.log(chalk.green(...m));
const consoleBlue = (...m) => console.log(chalk.blue(...m));

class Translator {
  ab(text) {
    let translated = text;
    translated = this.translate(translated, americanOnly);
    translated = this.translate(translated, americanToBritishSpelling);
    translated = this.translate(translated, americanToBritishTitles);
    return translated;
  }

  ba(text) {
    let translated = text;
    translated = this.translate(translated, britishOnly);
    translated = this.translate(
      translated,
      _.invert(americanToBritishSpelling)
    );
    translated = this.translate(translated, _.invert(americanToBritishTitles));
    return translated;
  }

  translate(translated, list) {
    for (const word in list) {
      // const Word = this.capitalize(word);
      const bWord = list[word];
      const re = new RegExp(`(${word})(\\W)`, "ig");
      translated = translated.replace(re, (_, a, b) => {
        return a === this.capitalize(word)
          ? `<span class="highlight">${this.capitalize(bWord)}</span>${b || ""}`
          : `<span class="highlight">${bWord}</span>${b || ""}`;
      });
    }
    return translated;
  }

  capitalize(word) {
    return word && word[0].toUpperCase() + word.slice(1);
  }
}

module.exports = Translator;
