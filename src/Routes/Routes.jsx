import React from 'react'
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home.jsx'
import MainLayout from '../Layouts/MainLayout.jsx'
import Apps from '../Pages/Apps.jsx'
import Installation from '../Pages/Installation.jsx'
import AppDetailPage from '../Pages/AppDetailPage.jsx'
import ErrorPage from '../Pages/ErrorPage.jsx'  // ✅ Import error page

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />, // ✅ Attach here so navbar still shows
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/apps",
        element: <Apps />
      },
      {
        path: "/installation",
        element: <Installation />
      },
      {
        path: "/apps/:id",
        element: <AppDetailPage />
      },
    ]
  }
])

export default router
