const validatePath = (path) => {
  const lastCharacter = path[path.length - 1]

  return lastCharacter === "/" || lastCharacter === "\\"
}

module.exports = validatePath
