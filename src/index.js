import React from 'react'
import ReactDOM from 'react-dom'
import { Homepage } from './pages/Homepage/Homepage'

export const App = () => {
  return (
    <div>
      <Homepage />
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)




