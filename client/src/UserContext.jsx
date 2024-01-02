import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({ username: '', setUsername: () => {}, id: '', setId: () => {} });

export function UserContextProvider({ children }) {
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);
  useEffect(()=>{
    axios.get('/profile', { withCredentials: true })
    .then((response) => {
      setId(response.data.userData.userId);
      setUsername(response.data.userData.username);
    })
    .catch((error) => {
      console.error('Error fetching user profile:', error);
    });
  })
  return (
    <UserContext.Provider value={ {username, setUsername, id, setId} }>
      {children}
    </UserContext.Provider>
  );
}
