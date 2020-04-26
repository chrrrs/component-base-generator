const define = (name) => `
  import './${name}.scss'

  export { default } from './${name}'
`

module.exports = define
