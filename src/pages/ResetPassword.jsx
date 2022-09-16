import React, { useState } from 'react';
import SignInImg from '../assets/images/signIn.jpg';

import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Reset Password</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img
            className='w-full'
            src={SignInImg}
            alt='sign-in'
          />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form>
            <div className='relative mb-6'>
              <input
                className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded 
              transition ease-in-out'
                onChange={onChange}
                value={email}
                name='email'
                type='email'
                placeholder='Email Address'
              />
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
                  to='/sign-in'
                  className=' text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'
                >
                  Sign In
                </Link>
              </p>
            </div>
            <button
              className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'
              type='submit'
            >
              Send password
            </button>
            <div className='flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
              <p className='text-center font-semibold mx-4'>OR</p>
            </div>
          </form>
          <OAuth />
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
