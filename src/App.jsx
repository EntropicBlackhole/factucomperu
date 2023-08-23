import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Chart from "chart.js/auto";
// import { CategoryScale } from "chart.js";
// import { useState } from "react";
// import { Data } from "./utils/Data";

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

import Sales from './pages/Sales'
import Sell from './pages/Sell'
import Products from './pages/Products'
import Workers from './pages/Workers'

import Dashboard from './pages/Dashboard'
import LoggedInLayout from './LoggedInLayout'
import LoggedOutLayout from './LoggedOutLayout'
import './App.css'



function App() {
  const PrimaryRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoggedOutLayout />,
      children: [
      {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/comprobantes",
          element: <Sales />
        },
        {
          path: "/productos",
          element: <Products />
        },
        {
          path: "/trabajadores",
          element: <Workers />
        },
        {
          path: "/vender",
          element: <Sell />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={PrimaryRouter} />
    </>
  )
}

export default App
