const _ = require("lodash");
const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");
const britishToAmericanSpelling = _.invert(americanToBritishSpelling);
const britishToAmericanTitles = _.invert(americanToBritishTitles);

class Translator {
  ab(text) {
    let translated = text;
    translated = this.translate(translated, americanOnly);
    translated = this.translate(translated, americanToBritishSpelling);
    translated = this.translate(translated, americanToBritishTitles);
    translated = translated.replace(
      /(\d{1,2})(:)(\d\d)/g,
      (_, hours, separator, minutes) => {
        return `<span class="highlight">${hours}.${minutes}</span>`;
      }
    );
    // console.log(translated);
    return translated;
  }

  ba(text) {
    let translated = text;
    translated = this.translate(translated, britishOnly);
    translated = this.translate(translated, britishToAmericanSpelling);
    translated = this.translate(translated, britishToAmericanTitles);
    translated = translated.replace(
      /(\d{1,2})(\.)(\d\d)/g,
      (_, hours, separator, minutes) => {
        return `<span class="highlight">${hours}:${minutes}</span>`;
      }
    );
    // console.log(translated);
    return translated;
  }

  translate(translated, list) {
    // orders the list form longest to shortest word
    const ordered = Object.keys(list).sort((a, b) => {
      return b.length - a.length;
    });
    for (const word of ordered) {
      const bWord = list[word];
      const re = new RegExp(word, "ig");
      // looks for word and replaces it
      translated = translated.replace(re, (match, index) => {
        console.log(match[0]);
        // checks if already translated
        if (
          translated.substr(index - 24, index) === `<span class="highlight">`
        ) {
          return match;
        } else {
          return match[0] === this.capitalize(word[0])
            ? `<span class="highlight">${this.capitalize(bWord)}</span>`
            : `<span class="highlight">${bWord}</span>`;
        }
      });
    }
    return translated;
  }

  capitalize(word) {
    return word && word[0].toUpperCase() + word.slice(1);
  }
}

module.exports = Translator;
