// @flow

import React from 'react'
import { render } from 'react-dom'

const square = (n: number): number => {
  return n * n
}

square(2)

const App = () => (
  <div>
    <h1>Hello World!!</h1>
  </div>
)

render(
  <App />,
  document.getElementById('app')
)