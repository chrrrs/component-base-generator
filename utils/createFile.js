const fs = require("fs");
const defineFile = require("./defineFile");

const createFile = (path, name, extension) => {
  fs.writeFile(
    // Remove ternary operator if all files should have the same naming 
    `${path}${extension === ".ts" ? "index" : name}${extension}`,
    defineFile(name, extension),
    (error) => {
      if (error) throw error;
      console.log(`Added ${name} file with the extension ${extension}`);
    }
  );
};

module.exports = createFile;
