import axios from 'axios';
import Cookies from 'js-cookie';
const token = Cookies.get('token');
export const loginApi = axios.create({
  baseURL: 'https://api.realworld.io/api/users/login',
});
export const signUpApi = axios.create({
  baseURL: 'https://api.realworld.io/api/users',
});
export const getCurrentUser = axios.create({
  baseURL:'https://api.realworld.io/api/user',
  headers:{
    Authorization:`Bearer ${token}`
  }
  
})
