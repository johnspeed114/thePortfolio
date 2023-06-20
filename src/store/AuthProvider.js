import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';

import { auth } from '../firebase.js';
import AuthContext from './auth-context.js';

const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState('');
  useEffect(() => {
    // const storedUserLoggin = localStorage.getItem('isLoggedIn');
    // if (storedUserLoggin === '1') {
    //   setIsLoggedIn(true);
    // }
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setDisplayName(user.displayName);
        setIsLoggedIn(true);
        console.log('User is signed in');
      } else {
        // User is signed out
        setIsLoggedIn(false);
        console.log('User is signed out');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  //[TO DO ]add use reducer like cart provider in food app

  const loginHandler = () => {
    //might need to remove this
    // localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        console.log('Signed out successfully');
      })
      .catch((error) => {
        // An error happened.
      });
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        displayName: displayName,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
