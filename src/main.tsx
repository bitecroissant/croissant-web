import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <div>请选择<ul><li>home</li><li>welcome</li><li>list</li></ul></div> },
      { 
        path: 'solar-terms',
        element: <div> 空 <Outlet /> </div>,
        children: [
          // 模板
          // { path: '/1', element: <div>1</div> },
          { path: 'list', element: <div> 24 列表 </div> },
          { path: 'list-dates', element: <div> 24 日期列表 </div> },
        ]
      },
    ]
  },
])

const div = document.getElementById('root')

const root = createRoot(div!)

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
