import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './route'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { ConfigProvider,theme } from 'antd'
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <React.StrictMode>
    <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
    <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  </React.StrictMode>
)
