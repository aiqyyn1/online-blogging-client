import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, FC, useState } from 'react';
import Navbar from './Navbar';
import { getCurrentUser } from '../store/actions/currentUser';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';

const Profile: FC = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state.current);
  const [token, setToken]= useState();
  useEffect(() => {
    
    dispatch(getCurrentUser() as any);
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <section
        style={{ fontFamily: 'Montserrat' }}
        className='  flex font-medium items-center justify-center h-screen'>
        <section className='w-64 mx-auto bg-slate-300 rounded-2xl px-8 py-6 shadow-lg'>
          <div className='flex items-center justify-between'>
            <span className='text-gray-400 text-sm'>2d ago</span>
            <span className='text-emerald-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                />
              </svg>
            </span>
          </div>
          <div className='mt-6 w-fit mx-auto'>
            <img
              src={selector.data.image}
              className='rounded-full w-28 '
              alt='profile picture'
            />
          </div>

          <div className='mt-8 '>
            <h2 className='text-white font-bold text-2xl tracking-wide'>
              {selector.data.username}
            </h2>
          </div>
          <p className='text-emerald-400 font-semibold mt-2.5'>Active</p>

          <div className='h-1 w-full bg-black mt-8 rounded-full'>
            <div className='h-1 rounded-full w-2/5 bg-yellow-500 '></div>
          </div>
          <div className='mt-3 text-white text-sm'>
            <span className='text-gray-400 font-semibold'>Storage:</span>
            <span>40%</span>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Profile;
