import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <div> root </div> },
  { path: '/home', element: <div> home </div> },
  { path: '/welcome', element: <div> welcome </div> },
  { path: '/list', element: <div> logined </div> },
])

const div = document.getElementById('root')

const root = createRoot(div!)

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
