import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import First from './Components/First/First'
import About from './Components/About/About';
import Second from './Second';
import Friends from './Components/Friends/Friends';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>  ,
    children: [
      {
        path: 'first',
        element: <First></First>
      },


      {
        path: 'second',
        element:<Second></Second>
      },

      {
        path: 'about',
        element:<About></About>
      },

      {
        path: 'friends',
        element: <Friends></Friends>
      }


    ]
  },
  

  {
    path: 'home',
    element: <Home></Home>
  },

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
