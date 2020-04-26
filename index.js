const fs = require('fs')
const validatePath = require("./utils/validatePath")
const createFile = require("./utils/createFile")

const path = process.argv[2]
const name = process.argv[3]

if (path && name) {

  if (validatePath(path)) {
    fs.mkdir(`${path}${name}`, (error) => {
      if (error) return console.log(`Error: ${error}`)
      console.log("folder was created")

      const newPath = `${path}${name}/`
      const extensions = [".ts", ".tsx", ".scss"]

      extensions.forEach(extension => {
        createFile(newPath, name, extension)
      });

    })

  } else {
    console.log("Please supply valid path")
  }

} else {
  console.log("Please supply both a path and name")
}
