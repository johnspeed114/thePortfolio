import React, { useEffect, useState } from 'react';
import AuthContext from './auth-context.js';

export const AuthConextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggin = localStorage.getItem('isLoggedIn');

    if (storedUserLoggin === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  //[TO DO ]add use reducer like cart provider in food app

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('isLogged', '0');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
