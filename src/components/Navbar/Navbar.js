import React, {useContext, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './/Navbar.style.scss';
import LocalStorageServices from '../../services/LocalStorageServices';
import Cart from '../Cart/Cart.component';
import {UserContext} from '../../context/UserContext';

const Navbar = () => {
  const {role, handleLogout, dispatch} = useContext(UserContext);

  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__brand'>
          <Link to='/'>CORRETTO</Link>
        </div>
        <div className='navbar__menu'>
          <ul className='navbar__link'>
            <li className='navbar__link--list'>
              <NavLink to='/'>Product</NavLink>
            </li>
            <li className='navbar__link--list'>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li className='navbar__link--list'>
              <NavLink to='#'>Help</NavLink>
            </li>
            {role === 'guest' ? (
              <div className='navbar__link'>
                <li className='navbar__link--list'>
                  <NavLink to='/register'>Register</NavLink>
                </li>
                <li className='navbar__link--list'>
                  <NavLink to='/signin'>SignIn</NavLink>
                </li>
              </div>
            ) : (
              <div className='navbar__link'>
                <li className='navbar__link--list'>
                  <NavLink to='/profile'>Profile</NavLink>
                </li>
                <li className='navbar__link--list' onClick={handleLogout}>
                  <NavLink to='/'>SignOut</NavLink>
                </li>
              </div>
            )}
            <Cart />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
