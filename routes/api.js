"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    console.log("_____POST/translate_____");
    console.log(req.body);
    const text = req.body.text;
    const locale = req.body.locale;
    try {
      if (text === "") throw `No text to translate`;
      if (!text || !locale) throw `Required field(s) missing`;
      if ((locale != "british-to-american") & (locale != "american-to-british"))
        throw `Invalid value for locale field`;
      let translation =
        locale == "american-to-british"
          ? translator.ab(text)
          : translator.ba(text);
      if (text === translation) {
        translation = "Everything looks good to me!";
      }
      console.log("translation:", translation);
      res.json({ text, translation });
    } catch (error) {
      console.log("error:", error);
      res.json({ error });
    }
  });
};
