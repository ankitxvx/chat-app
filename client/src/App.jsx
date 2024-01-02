import React from 'react';
import axios from 'axios';
 import { UserContextProvider } from './UserContext';
import Routes from './Routes';
import Login from './Components/Login';
function App() {
  // Set axios defaults
  axios.defaults.baseURL = 'http://localhost:8000';
  axios.defaults.withCredentials = true;
 

  return (
    <>
      
      <UserContextProvider>
        <Login/>
      </UserContextProvider>
      
       
     
    </>
  );
}

export default App;
