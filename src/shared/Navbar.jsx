import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import Logo from "../components/Logo";
import { NavLink } from "react-router";
import NavLinks from "../components/NavLinks";

const Navbar = () => {
  const links = (
    <NavLinks>
      <NavLink to="/">Services</NavLink>
      <NavLink to="/coverage">Coverage</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/pricing">Pricing</NavLink>
      <NavLink to="/rider">Be a Rider</NavLink>
       <NavLink to="/login">login</NavLink>

    </NavLinks>
  );


  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
           
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           {
            links
           }
          </ul>
        </div>
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          
                {
                  links
                }
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <ThemeToggle />
        
      </div>
    </div>
  );
};

export default Navbar;
