import React from 'react';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import {createBrowserRouter,RouterProvider,Outlet,Link} from 'react-router-dom'
import Login from './Components/Login';
import { SpeechToText } from './Components/SpeechToText';
import { TextToSpeech } from './Components/TextToSpeech';
 const App = () => {
  axios.defaults.baseURL = 'http://localhost:8000';
  axios.defaults.withCredentials = true;
  return (
    
    <Outlet/>
  )
}

export const appRouter = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path:"/login",
        element: <Login/>
      },
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/stt",
        element: <SpeechToText/>,
      },
      {
        path: "/tts",
        element: <TextToSpeech />,
      },
    ],
  },
]);



export default App;

 