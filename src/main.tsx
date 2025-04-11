import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './components/ErrorPage'
import { Auth0Provider, Auth0ProviderOptions } from '@auth0/auth0-react'
import { Home } from './components/Home'

import './assets/stylesheets/font.scss'
import './index.css'

import 'virtual:svgsprites'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
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

const auth0ProviderOptions: Auth0ProviderOptions = {
  domain: 'bitecroissant.jp.auth0.com',
  clientId: '9lu1GnDXmZyT6CS8CfTCJh81eoJrOGMr',
  authorizationParams: {
    redirect_uri: window.location.origin
  }
}

root.render(
  <StrictMode>
    <Auth0Provider {...auth0ProviderOptions} >
      <RouterProvider router={router} />
    </Auth0Provider>
  </StrictMode>,
)
