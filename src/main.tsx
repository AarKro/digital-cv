import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

export const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
