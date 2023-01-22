"use strict";

const path = require("path");
const assert = require("assert");
const { getAllFiles } = require("../../../lib/loader");

const BASEPATH = path.join(__dirname, "../../../");

suite("loader", function () {
  test("getAllFiles - success - gets all file names", async function () {
    const files = getAllFiles(path.join(BASEPATH, "/test/mock-dir"));
    assert.deepEqual(files, {
      "index.js":
        '"use strict";\r\n' +
        "\r\n" +
        "function index() {\r\n" +
        '  console.log("index");\r\n' +
        "}\r\n" +
        "\r\n" +
        "module.exports = { index };\r\n",
      "test.js":
        '"use strict";\r\n' +
        "\r\n" +
        "function test() {\r\n" +
        '  console.log("test");\r\n' +
        "}\r\n" +
        "\r\n" +
        "module.exports = { test };\r\n",
      lib: {
        "example.js":
          '"use strict";\r\n' +
          "\r\n" +
          "function example() {\r\n" +
          '  console.log("example");\r\n' +
          "}\r\n" +
          "\r\n" +
          "module.exports = { example };\r\n",
        "index.js":
          '"use strict";\r\n' +
          "\r\n" +
          "function indexInDiretory() {\r\n" +
          '  console.log("indexInDiretory");\r\n' +
          "}\r\n" +
          "\r\n" +
          "module.exports = { indexInDiretory };\r\n",
      },
    });
  });
});
