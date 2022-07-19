import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';
import logo from '../../assest/images/logo.png';
import { AuthContext } from '../context/AuthContex';

const NavBar = () => {
  const { user } = useContext(AuthContext);
  const handleClick = () => {
    localStorage.clear();
   
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg '>
        <div className='container-fluid'>
          <div className='nav-content d-flex mx-2'>
            <img src={logo} alt='' />

            <Link to='/' style={{ textDecoration: 'none' }}>
              <h4>Travel BD</h4>
            </Link>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'>
              <FontAwesomeIcon icon={faBars} />
            </span>
          </button>
          <div className='collapse navbar-collapse justify-content-end ' id='navbarNav'>
            <ul className='navbar-nav mx-5 '>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>
                  About
                </Link>
              </li>

              {!user ? (
                <li className='nav-item'>
                  <Link to='/login' className='nav-link'>
                    Login
                  </Link>
                </li>
              ) : (
                <li className='nav-item '>
                  <h3 className='nav-link mt-1'>{user.userName}</h3>
                </li>
              )}
              <li className='nav-item'>
                <button className='nav-link' onClick={handleClick}>
                  LogOut
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
