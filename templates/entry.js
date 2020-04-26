const defineEntryFile = (name) => `
  import './${name}.scss'

  export { default } from './${name}'
`

module.exports = defineEntryFile
