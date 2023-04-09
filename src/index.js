import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

//? "</React.StrictMode>" is in development only, used for debugging and error catching (it renders twice on each reload of the app/website, but this is only affecting the development process, not the final production app)
