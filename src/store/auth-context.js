import { createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  displayName: '',
  setDisplayName: (name) => {},
  onLogout: () => {},
  onLogin: () => {},
});

export default AuthContext;
