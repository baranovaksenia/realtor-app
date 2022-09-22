import React, { useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from './../firebase';

const Profile = () => {
  const auth = getAuth();

  const navigate = useNavigate();

  const [changeDetail, setChangeDetail] = useState(false);

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  // destructuring
  const { name, email } = formData;

  // logout
  const onLogout = () => {
    auth.signOut();
    navigate('/');
  };

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        // update display name in firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        // update name in firestore
        const docRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(docRef, {
          name: name,
        });
      }
      toast.success('Profile details updated');
    } catch (error) {
      toast.error('Could nots update profile detail');
    }
  };
  return (
    <section className='max-w-6xl mx-auto flex items-center justify-center flex-col'>
      <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>
      <div className='w-full md:w-[50%] mt-6 px-3'>
        <form>
          {/* name input */}
          <input
            disabled={!changeDetail}
            onChange={onChange}
            className={`w-full  xp-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded
            transition ease-in-out
            ${changeDetail && 'bg-red-200 focus:bg-red-200'}`}
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
              <span
                onClick={() => {
                  changeDetail && onSubmit();
                  setChangeDetail((prev) => !prev);
                }}
                className='text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer'
              >
                {changeDetail ? 'Apply change' : 'Edit'}
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
