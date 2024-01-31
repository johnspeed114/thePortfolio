// @ts-nocheck
import React from 'react';
import AuthProvider from './store/AuthProvider';
import NavBarComp from './components/Layout/NavBarComp';
function App() {
  return (
    <AuthProvider className='App'>
      <NavBarComp />
    </AuthProvider>
  );
}

export default App;
