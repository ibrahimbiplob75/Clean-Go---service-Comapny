import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router-dom'
import route from './Route/Route'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>
)
