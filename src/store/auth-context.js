import React from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  displayName: '',
  setDisplayName: (name) => {},
  onLogout: () => {},
  onLogin: () => {},
});

export default AuthContext;
