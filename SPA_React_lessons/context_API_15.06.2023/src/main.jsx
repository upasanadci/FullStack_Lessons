import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyProvider from './context/MyProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>
    <App />
    </MyProvider>
  </React.StrictMode>,
)
