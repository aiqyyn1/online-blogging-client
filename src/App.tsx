import axios from 'axios';
import React, { FC, useState } from 'react';
import { BrowserRouter, Route, Router} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login';
import Regin from './components/Regin';
import Profile from './components/Profile';
const App :FC = () => {
  



  
  return (
    <div>
       <BrowserRouter>
          <Routes>
             <Route index path='/' element={<Home></Home>}></Route>
             <Route path='login' element={<Login></Login>}></Route>
             <Route path='regin' element={<Regin></Regin>}></Route>
             <Route path='profile' element={<Profile></Profile>}></Route>
          </Routes>
       </BrowserRouter>
    </div>
  );
};

export default App;
