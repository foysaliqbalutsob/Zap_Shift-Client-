import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layout/AuthLayOut";
import Login from "../pages/AuthRelatedPages/login";
import Register from "../pages/AuthRelatedPages/Register";
import ForgetPassWord from "../pages/AuthRelatedPages/ForgetPassWord";
import ResetPassword from "../pages/AuthRelatedPages/ResetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {

          path:"coverage",
          element:<Coverage></Coverage>
        },
        {
        path:"/",
      },
      
    ]
  },



  {

    path:"/",
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:"/",
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login/forgot-password",
        element:<ForgetPassWord></ForgetPassWord>
      },
      {
        path:"/reset",
        element:<ResetPassword></ResetPassword>
      },
      

      
      

    ]
  }
]);