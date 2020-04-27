const define = (name) => `import React, { FC } from 'react'

type ${name}Props = {
}

const ${name}: FC < ${name}Props > = props => {
  const {} = props

  return ( 
    <div></div>
  )
}

export default ${name}
`

module.exports = define
