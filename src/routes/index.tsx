import { Route, Routes as Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { FC } from 'react';
import SignIn from '../components/auth/SignIn';
import Post from '../components/post/Post';
const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' index element={<Post></Post>}></Route>
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
