import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import MainNavigation from './components/MainNavigation';
import Home from './pages/Home';



const router=createBrowserRouter([
  {path:"/",element:<MainNavigation/>,children:[
    {path:"/",element:<Home/>}

  ]},
  

])

export default function App() {
  return (
    <>
      <RouterProvider router={router}>   </RouterProvider>
    </>
  )
}


