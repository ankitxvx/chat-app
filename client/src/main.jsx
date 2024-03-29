import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { appRouter } from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { UserContextProvider } from './UserContext.jsx'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <UserContextProvider>
    <RouterProvider router={appRouter} />
    </UserContextProvider>
  </React.StrictMode>,
)
