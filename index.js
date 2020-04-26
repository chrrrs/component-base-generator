const fs = require('fs');
const defineEntryFile = require("./templates/entry")
const defineMainFile = require("./templates/main")

const path = process.argv[2]
const name = process.argv[3]

console.log(path, name)

fs.writeFile(`${name}.ts`, defineEntryFile(name), function (err) {
  if (err) throw err;
  console.log('Added component entry file');
});

fs.writeFile(`${name}.tsx`, defineMainFile(name), function (err) {
  if (err) throw err;
  console.log('Added component main file');
});

fs.writeFile(`${name}.scss`, ``, function (err) {
  if (err) throw err;
  console.log('Add styles file');
});
