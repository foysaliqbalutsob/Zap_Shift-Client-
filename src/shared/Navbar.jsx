import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import Logo from "../components/Logo"

import NavLinks from "../components/NavLinks";
import useAuth from "../hooks/useAuth";
import { NavLink } from "react-router";

const Navbar = () => {
  const { user, logOut } = useAuth();
  console.log(user);

  const links = (
    <NavLinks>
      <NavLink to="/">Services</NavLink>
      <NavLink to="/coverage">Coverage</NavLink>
      <NavLink to="/about">About Us</NavLink>

      <NavLink to="/track-order">Tracking Parcel</NavLink>
      <NavLink to="/send-parcel">Send Parcel</NavLink>
      <NavLink to="/pricing">Pricing</NavLink>
      <NavLink to="/BeARider">Be a Rider</NavLink>
    </NavLinks>
  );

  const getInTouch = (
    <NavLinks>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </NavLinks>

    //  <NavLink to="/register">Register</NavLink>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          ></div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* <div className="navbar-end gap-2">
        {
          user ?<a className="btn">SignOut</a> :getInTouch 
        }
        <ThemeToggle />
        
      </div> */}

      <div className="navbar-end gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Profile"
                  src={
                    user?.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <p className="font-bold text-primary">
                  {user?.displayName || "User"}
                </p>
              </li>
              {/* এখানে NavLink ব্যবহার করুন */}
              <li>
                <NavLink to="/profile">My Profile</NavLink>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={logOut} className="text-error font-bold">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          getInTouch
        )}
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
