import { Route, Routes as Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { FC } from 'react';
import SignIn from '../components/post/SignIn';
const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' index element={<SignIn></SignIn>}></Route>
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
