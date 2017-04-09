/* eslint "flowtype/require-valid-file-annotation": 0 */

import React from 'react'
import { render } from 'react-dom'

const App = () => (
  <div>
    <h1>Hello World!!</h1>
  </div>
)

render(
  <App />,
  document.getElementById('app')
)