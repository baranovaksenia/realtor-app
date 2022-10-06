import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

// check if user is logged in
const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    //Get the currently signed-in user
    const auth = getAuth();
    // The recommended way to get the current user is by setting an observer on the Auth object (docs)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      }
      setCheckingStatus(false);
    });
  }, []);
  return { loggedIn, checkingStatus };
};

export default useAuthStatus;
