const fs = require("fs");
const defineFile = require("./defineFile");

const createFile = (path, name, extension) => {
  fs.writeFile(
    `${path}${extension === ".ts" ? "index" : name}${extension}`,
    defineFile(name, extension),
    (error) => {
      if (error) throw error;
      console.log(`Added ${name} file with the extension ${extension}`);
    }
  );
};

module.exports = createFile;
