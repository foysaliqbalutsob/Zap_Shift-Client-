import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layout/AuthLayOut";

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
      },
      {
        path:"/register",
      },
      
      

    ]
  }
]);