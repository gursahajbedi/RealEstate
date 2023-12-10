import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { render } from 'react-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
      <App />
  </AuthContextProvider>
)