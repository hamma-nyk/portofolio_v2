import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
const route = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)