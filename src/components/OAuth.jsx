import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {
  const navigate = useNavigate();

  // sing-in / sign up with google account
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // check for the user in db
      const docRef = doc(db, 'users', user.uid);

      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      // navigate to home page
      navigate('/');
    } catch (err) {
      toast.error('Could not authorize with Google');
      console.log(err);
    }
  }
  return (
    <button
      onClick={onGoogleClick}
      type='button'
      className='flex items-center justify-center w-full bg-[#FF735C] text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg 
    transition duration-150 ease-in-out rounded'
    >
      <FcGoogle className='mr-2 text-2xl bg-white rounded-full ' />
      Continue with Google
    </button>
  );
};

export default OAuth;
