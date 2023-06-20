import React from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  displayName: '',
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export default AuthContext;
