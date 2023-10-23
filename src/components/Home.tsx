import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Regin from './Regin';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Link to={'/'}>home</Link>
      <br></br>
      <Link to={'/login'}>login</Link>
      <br></br>
      <Link to={'/regin'}>regin</Link>
      <br></br>
      <Link to={'/profile'}>profile</Link>
    </div>
  );
};

export default Home;
