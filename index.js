const fs = require('fs')
const defineEntryFile = require("./templates/entry")
const defineMainFile = require("./templates/main")

const path = process.argv[2]
const name = process.argv[3]

const validatePath = (path) => {
  const lastCharacter = path[path.length - 1]

  return lastCharacter === "/" || lastCharacter === "\\"
}

if (path && name) {

  if (validatePath(path)) {
    fs.mkdir(`${path}${name}`, (error) => {
      if (error) return console.log(`Error: ${error}`)
      console.log("folder was created")

      const newPath = `${path}${name}/`

      fs.writeFile(`${newPath}${name}.ts`, defineEntryFile(name), function (err) {
        if (err) throw err
        console.log('Added component entry file')
      })

      fs.writeFile(`${newPath}${name}.tsx`, defineMainFile(name), function (err) {
        if (err) throw err
        console.log('Added component main file')
      })

      fs.writeFile(`${newPath}${name}.scss`, ``, function (err) {
        if (err) throw err
        console.log('Add styles file')
      })

    })

  }

  console.log("Please supply valid path")
} else {
  console.log("Please supply both a path and name")
}
