import React, { useState } from 'react';
import SignInImg from '../assets/images/signIn.jpg';
import { BiShow, BiHide } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // destructuring
  const { email, password } = formData;

  const navigate = useNavigate();

  // save in state user's information
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // if user credentials are in firebase store navigate to the home page
      if (userCredential.user) {
        navigate('/');
      }
    } catch (error) {
      toast.error('Bad user credentials');
    }
  }

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img
            className='w-full'
            src={SignInImg}
            alt='sign-in'
          />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form onSubmit={onSubmit}>
            <div className='mb-6'>
              <input
                onChange={onChange}
                className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded 
              transition ease-in-out
              '
                value={email}
                type='email'
                name='email'
                placeholder='Enter email'
              />
            </div>
            <div className='relative mb-6'>
              <input
                className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded 
              transition ease-in-out'
                onChange={onChange}
                value={password}
                name='password'
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter password'
              />
              {showPassword ? (
                <BiShow
                  className='absolute right-3 top-3 text-xl cursor-pointer'
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              ) : (
                <BiHide
                  className='absolute right-3 top-3 text-xl cursor-pointer'
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              )}
            </div>
            <div className='flex justify-between text-sm sm:text-lg whitespace-nowrap'>
              <p className='mb-6'>
                Don't have a account?
                <Link
                  to='/sign-up'
                  className='ml-2 text-red-600 hover:text-red-700 transition duration-200 ease-in-out'
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to='/reset-password'
                  className=' text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'
                >
                  Forgot password?
                </Link>
              </p>
            </div>
            <button
              className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'
              type='submit'
            >
              Sign in
            </button>
            <div className='flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
              <p className='text-center font-semibold mx-4'>OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

// max-w-6xl (header) + mx-auto (center) ml-space between (lg screen)
// 67% + 67% can not be on one line - wrap (top on each other)
//  whitespace-nowrap - don't go on second line
