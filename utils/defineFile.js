const defineFile = (name, extension) => {
  const define = require(`../templates/template${extension}.js`)
  return define(name)
}

module.exports = defineFile
