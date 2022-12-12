import React from 'react'
import ReactDOM from 'react-dom/client'
import "./pages/styles/global.css"

import { Home } from './pages/Home'
import "./pages/Home/home.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
)
