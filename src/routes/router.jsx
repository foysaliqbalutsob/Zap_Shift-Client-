import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layout/AuthLayOut";
import Login from "../pages/AuthRelatedPages/login";
import Register from "../pages/AuthRelatedPages/Register";
import ForgetPassWord from "../pages/AuthRelatedPages/ForgetPassWord";
import ResetPassword from "../pages/AuthRelatedPages/ResetPassword";
import About from "../pages/About/About";
import Profile from "../pages/AuthRelatedPages/Profile";
import PrivateRoute from "./PrivateRoute";
import Pricing from "../pages/Pricing/Pricing";
import BeARider from "../pages/BeARider/BeARider";
import SendParcel from "../pages/SendParcel/SendParcel";
import TrackOrder from "../pages/TrackOrder/TrackOrder";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "coverage",
        element: <Coverage></Coverage>,
      },
      {
        path: "about",
        element: (
            <About></About>
          
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },

      {
        path: "pricing",
        element: (
          <PrivateRoute>
            <Pricing></Pricing>
          </PrivateRoute>
        ),
      },

      {
        path: "BeARider",
        element: (
          <PrivateRoute>
            <BeARider></BeARider>
          </PrivateRoute>
        ),
      },
      
      {
        path: "send-parcel",
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
      },

      {
        path: "track-order",
        element: (
          <PrivateRoute>
            <TrackOrder></TrackOrder>
          </PrivateRoute>
        ),
      },
      



    ],
  },

  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/",
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login/forgot-password",
        element: <ForgetPassWord></ForgetPassWord>,
      },
      {
        path: "/reset",
        element: <ResetPassword></ResetPassword>,
      },
    ],
  },
]);
