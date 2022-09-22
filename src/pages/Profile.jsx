import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const auth = getAuth();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: 'John',
    email: 'john@example.com',
  });

  // destructuring
  const { name, email } = formData;

  // logout
  const onLogout = () => {
    auth.signOut();
    navigate('/');
  };
  return (
    <section className='max-w-6xl mx-auto flex items-center justify-center flex-col'>
      <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>
      <div className='w-full md:w-[50%] mt-6 px-3'>
        <form>
          {/* name input */}
          <input
            disabled
            className='w-full  xp-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded
            transition ease-in-out
            '
            type='text'
            name='name'
            value={name}
          />
          {/* email input */}
          <input
            disabled
            className=' my-4 w-full xp-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded
            transition ease-in-out
            '
            type='email'
            name='email'
            value={email}
          />
          <div className='flex  justify-between items-center whitespace-nowrap text-sm sm:text-lg'>
            <p className='flex'>
              Do you want to change your name?
              <span className='text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer'>
                Edit
              </span>
            </p>

            <p
              onClick={onLogout}
              className='text-blue-600 hover:text-blue-800transition duration-200 ease-in-out cursor-pointer'
            >
              Sign out
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;
