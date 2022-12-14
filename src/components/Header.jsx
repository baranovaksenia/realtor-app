import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Logo from '../assets/images/logo.png';

const Header = () => {
  // if person not authenticated show "Sign In", otherwise "Profile"
  const [pageState, setPageState] = useState('Sign in');

  const auth = getAuth();

  // check if the user is authenticated
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState('Profile');
      } else {
        setPageState('Sign in');
      }
    });
  }, [auth]);

  const navigate = useNavigate();
  const location = useLocation();

  // function that responses for active link class
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className='bg-white shadow-sm border-b sticky top-0 z-40'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <img
            onClick={() => navigate('/')}
            className='cursor-pointer h-12'
            src={Logo}
            alt='logo'
          />
        </div>
        {/* navigation */}
        <ul className='flex space-x-10'>
          <li
            className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
              pathMatchRoute('/') && 'text-black border-b-red-500'
            }`}
            onClick={() => navigate('/')}
          >
            Home
          </li>

          <li
            className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
              pathMatchRoute('/offers') && 'text-black border-b-red-500'
            }`}
            onClick={() => navigate('/offers')}
          >
            Offers
          </li>

          <li
            className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
              (pathMatchRoute('/sign-in') || pathMatchRoute('/profile')) &&
              'text-black border-b-red-500'
            }`}
            onClick={() => navigate('/profile')}
          >
            {pageState}
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
