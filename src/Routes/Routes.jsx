import React from 'react'
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home.jsx';

import MainLayout from '../Layouts/MainLayout.jsx';
import Apps from '../Pages/Apps.jsx';
import Installation from '../Pages/Installation.jsx';


const router= createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
    path: "/apps",
    element: <Apps/>
  },
      {
    path: "/",
    element: <Home/>
  },
   {
    path: "/installation",
    element: <Installation/>
  },

      ]

  },
  
])

export default router