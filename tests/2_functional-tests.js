const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

suite("Functional Tests", () => {
  suite("POST request to /api/translate", () => {
    const url = "/api/translate";
    test("Translation with text and locale fields", () => {
      chai
        .request(server)
        .post(url)
        .set("content-type", "application/x-www-form-urlencoded")
        .send({
          text: "Color is a power which directly influences the soul.",
          locale: "american-to-british",
        })
        .end((err, res) => {
          assert.equal(res.status, 200, "status should be 200");
          assert.isObject(res.body);
          assert.hasAllKeys(res.body, ["text", "translation"]);
          assert.equal(
            res.body.translation,
            `<span class="highlight">Colour</span> is a power which directly influences the soul.`
          );
        });
    });
    test("Translation with text and invalid locale fields", () => {
      chai
        .request(server)
        .post(url)
        .set("content-type", "application/x-www-form-urlencoded")
        .send({
          text: "Color is a power which directly influences the soul.",
          locale: "potatoes-to-carrots",
        })
        .end((err, res) => {
          assert.equal(res.status, 200, "status should be 200");
          assert.isObject(res.body);
          assert.hasAllKeys(res.body, "error");
          assert.equal(res.body.error, `Invalid value for locale field`);
        });
    });
    test("Translation with missing text field", () => {
      chai
        .request(server)
        .post(url)
        .set("content-type", "application/x-www-form-urlencoded")
        .send({
          locale: "american-to-british",
        })
        .end((err, res) => {
          assert.equal(res.status, 200, "status should be 200");
          assert.isObject(res.body);
          assert.hasAllKeys(res.body, "error");
          assert.equal(res.body.error, `Required field(s) missing`);
        });
    });
    test("Translation with missing locale field", () => {
      chai
        .request(server)
        .post(url)
        .set("content-type", "application/x-www-form-urlencoded")
        .send({
          text: "Color is a power which directly influences the soul.",
        })
        .end((err, res) => {
          assert.equal(res.status, 200, "status should be 200");
          assert.isObject(res.body);
          assert.hasAllKeys(res.body, "error");
          assert.equal(res.body.error, `Required field(s) missing`);
        });
    });
    test("Translation with empty text", () => {
      chai
        .request(server)
        .post(url)
        .set("content-type", "application/x-www-form-urlencoded")
        .send({
          text: "",
          locale: "american-to-british",
        })
        .end((err, res) => {
          assert.equal(res.status, 200, "status should be 200");
          assert.isObject(res.body);
          assert.hasAllKeys(res.body, "error");
          assert.equal(res.body.error, `No text to translate`);
        });
    });
    test("Translation with text that needs no translation", () => {
      chai
        .request(server)
        .post(url)
        .set("content-type", "application/x-www-form-urlencoded")
        .send({
          text: "Happy New Year!",
          locale: "american-to-british",
        })
        .end((err, res) => {
          assert.equal(res.status, 200, "status should be 200");
          assert.isObject(res.body);
          assert.hasAllKeys(res.body, ["text", "translation"]);
          assert.equal(res.body.translation, `Everything looks good to me!`);
        });
    });
  });
});
