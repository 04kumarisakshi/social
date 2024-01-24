import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,

} from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/register/Register';
import Navbar from './components/Navbar/Navbar';
import Leftbar from './components/LeftBar/Leftbar';
import Rightbar from './components/RightBar/Rightbar';
import Home from './components/home/Home';
import Profile from './components/Profile/Profile';
import "./index.css"

const currentUser=true;
const Layout =() =>{
  return(
    <div className="">
      <Navbar/>
      <div style={{display:"flex"}}>
        <Leftbar/>
        <Outlet/>
        <Rightbar/>
      </div>
    </div>
  )
}

//to protect the home page from every user
const ProtectedRoute = ({ children}) => {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

const router = createBrowserRouter([
  
    {
      path: "/",
      element: (
      <ProtectedRoute><Layout/></ProtectedRoute>
      ),
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/profile/:id",
        element: <Profile/>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
