"use strict";

const loader = require("./lib/loader");
const publisher = require("./lib/publisher");

const cli = {};

cli.generate = function () {
  const directory = __dirname;
  const content = loader.getAllFiles(directory);
  publisher.publish(content);
};

module.exports = cli;
