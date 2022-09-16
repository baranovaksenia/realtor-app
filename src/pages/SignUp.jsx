import React, { useState } from 'react';
import SignInImg from '../assets/images/signIn.jpg';
import { BiShow, BiHide } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

import { db } from '../firebase.js';

import { toast } from 'react-toastify';

// import components
import OAuth from '../components/OAuth';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;
  const navigate = useNavigate();

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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const user = userCredential.user;
      const formDataCopy = {
        ...formData,
      };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      // save data inside users collection
      await setDoc(doc(db, 'users', user.uid), formDataCopy);
      toast.success('Sign up was successful');
      navigate('/');
    } catch (error) {
      toast.error('Something went wrong with the registration');
    }
  }

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign Up</h1>
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
                value={name}
                type='text'
                name='name'
                placeholder='Full Name'
              />
            </div>
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
                Have an account
                <Link
                  to='/sign-in'
                  className='ml-2 text-red-600 hover:text-red-700 transition duration-200 ease-in-out'
                >
                  Sign in
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
              Sign up
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

export default SignUp;
