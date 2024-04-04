import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './themes/ThemeContext.jsx'
import { RouterProvider } from 'react-router-dom'
import routesApp from './routes/RoutesApp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={routesApp} />
    </ThemeProvider>
  </React.StrictMode>,
)