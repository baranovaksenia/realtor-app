import { Routes, Route } from 'react-router-dom';
import { Home, Offers, SignIn, SignUp, Profile, ResetPassword } from './pages';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        {/* if user log in navigate to profile page if not sign-in page */}
        <Route
          path='/profile'
          element={<PrivateRoute />}
        >
          <Route
            path='/profile'
            element={<Profile />}
          />
        </Route>
        <Route
          path='/offers'
          element={<Offers />}
        />

        <Route
          path='/reset-password'
          element={<ResetPassword />}
        />
        <Route
          path='/sign-in'
          element={<SignIn />}
        />
        <Route
          path='/sign-up'
          element={<SignUp />}
        />
      </Routes>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </>
  );
}

export default App;
