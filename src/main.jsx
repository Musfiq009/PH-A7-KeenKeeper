import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import FriendDetails from './pages/FriendDetails/FriendDetails'

const router = createBrowserRouter([{
  path:"/",
  Component:MainLayout,
  children:[
    {
      index:true,
      Component:Dashboard,
      loader: ()=>fetch("/Friends.json")
    },
    {
      path:"/:id",
      Component:FriendDetails,
      loader: ()=>fetch("/Friends.json")
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
