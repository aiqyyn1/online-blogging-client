import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const selector = useSelector((state: RootState) => state.current);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <nav className='bg-slate-300 border-gray-200'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <a href='https://flowbite.com/' className='flex items-center'>
            <img
              src='https://flowbite.com/docs/images/logo.svg'
              className='h-8 mr-3'
              alt='Flowbite Logo'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              Flowbite
            </span>
          </a>
          <div className='flex items-center md:order-2'>
            <span className='sr-only'>Open user menu</span>
            <img
              className='w-8 h-8 rounded-full'
              onClick={toggleDropdown}
              src={selector.data.email}
              alt='user photo'
            />

            {isDropdownOpen && (
              <div
                className='z-50 absolute right-0  text-base list-none divide-y divide-gray-100 rounded-lg shadow bg-slate-400 md:mt-64'
                id='user-dropdown'>
                <div className='px-4 py-3'>
                  <span className='block text-sm text-gray-900 dark:text-white'>
                    {selector.data.email}
                  </span>
                  <span className='block text-sm text-gray-500 truncate dark:text-gray-400'>
                    {selector.data.email}
                  </span>
                </div>
                <ul className='py-2' aria-labelledby='user-menu-button'>
                  <li>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}

            <button
              data-collapse-toggle='navbar-user'
              type='button'
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-user'
              aria-expanded='false'>
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'>
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </button>
          </div>
          <div
            className='items-center bg-slate-300 justify-between hidden w-full md:flex md:w-auto md:order-1'
            id='navbar-user'>
            <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-slate-300'>
              <li>
                <a
                  href='#'
                  className='block py-2 pl-3 pr-4rounded md:bg-transparent dark:text-gray-700 md:p-0 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  aria-current='page'>
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 '>
                  About
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
