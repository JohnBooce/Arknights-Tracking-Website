import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import Home from './components/Home.jsx'
import OperatorList from './components/OperatorList/operatorList.jsx'
import Register from './components/LoginRegister/Register.jsx'
import Login from './components/LoginRegister/Login.jsx'
import Import from './components/import/importOP.jsx'
import { Authentication } from './components/LoginRegister/Authentication.jsx'
import Profile from './components/display/profile.jsx'
import Lookup from './components/Lookup/lookup.jsx'
import Guide from './components/guide/guide.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "operatorList",
    element: <OperatorList/> 
  },
  {
    path: "register",
    element: <Register/> 
  },
  {
    path: "login",
    element: <Login/>
  }
  ,
  {
    path: "import",
    element: <Import/>
  },
  {
    path: "profile",
    element: <Profile/>
  },
  {
    path: "lookup",
    element: <Lookup/>
  },
  {
    path: "/guide",
    element: <Guide/>
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authentication>
    <RouterProvider router={router}/>
    </Authentication>
  </React.StrictMode>,
)
