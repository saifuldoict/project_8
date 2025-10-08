import React from 'react'
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home.jsx';
import Products from '../Pages/Products.jsx';
import MainLayout from '../Layouts/MainLayout.jsx';


const router= createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
    path: "/products",
    element: <Products/>
  },
      {
    path: "/",
    element: <Home/>
  }
      ]

  },
  
])

export default router