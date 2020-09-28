import React from "react";
import { NavLink } from "react-router-dom";
import ".//Navbar.style.scss";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__brand'>CORRETTO</div>
        <div className='navbar__menu'>
          <ul className='navbar__link'>
            <li className='navbar__link--list'>
              <NavLink to='#'>Product</NavLink>
            </li>
            <li className='navbar__link--list'>
              <NavLink to='#'>Contact</NavLink>
            </li>
            <li className='navbar__link--list'>
              <NavLink to='#'>Help</NavLink>
            </li>
            <li className='navbar__link--list'>
              <NavLink to='#'>Sign In</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
