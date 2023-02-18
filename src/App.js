import React from "react";
import AuthProvider from "store/AuthProvider.js";
import NavBarComp from "./components/Layout/NavBarComp.js";
function App() {
  return (
    <AuthProvider className="App">
      <NavBarComp />
    </AuthProvider>
  );
}

export default App;
