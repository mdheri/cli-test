"use strict";

const fs = require("fs");
const path = require("path");
const { parse } = require("./parser");
const SUPPORTED_FILE_EXTENSIONS = [".js"];

/**
 * @param {string} directoryName - name of directory to index
 * @returns {object<string, object>}
 */
function getAllFiles(directoryName) {
  const entries = fs.readdirSync(directoryName, { withFileTypes: true });

  const codefiles = {};
  entries.forEach(function (entry) {
    const absolutePathToEntry = path.join(directoryName, entry.name);
    const fileExtension = path.extname(entry.name);

    let result = null;

    if (entry.isDirectory()) {
      result = getAllFiles(absolutePathToEntry);
    } else if (SUPPORTED_FILE_EXTENSIONS.includes(fileExtension)) {
      result = parse(fs.readFileSync(absolutePathToEntry, "utf8"));
    }

    if (result === null) {
      return;
    }

    codefiles[entry.name] = result;
  });
  return codefiles;
}

module.exports = { getAllFiles };
