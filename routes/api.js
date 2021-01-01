"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    // console.log("_____POST/translate_____");
    // console.log(req.body);
    const text = req.body.text;
    const locale = req.body.locale;

    const translation =
      locale == "american-to-british"
        ? translator.ab(text)
        : translator.ba(text);
    // console.log("route:", translation);
    res.json({ text, translation });
  });
};
