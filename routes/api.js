"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    console.log("_____POST/translate_____");
    console.log(req.body);
    // req.body => {text, locale}
    const text = req.body.text;
    const locale = req.body.locale;
    const translation = translator.ab(text, locale);
    res.json({
      text,
      translation,
    });
  });
};
