"use strict";

function publish(content) {
  const stream = console.log;
  stream(content);
}

module.exports = { publish };
