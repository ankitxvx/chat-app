import {useContext, useState} from "react";
import axios from "axios";
import {UserContext} from "../UserContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function RegisterAndLoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginOrRegister, setIsLoginOrRegister] = useState('login');
  const {setUsername:setLoggedInUsername, setId} = useContext(UserContext);
  const navigate = useNavigate();
  async function handleSubmit(ev) {
    ev.preventDefault();
    const url = isLoginOrRegister === 'register' ? 'register' : 'login';
    const {data} = await axios.post(url, {username,password});
    setLoggedInUsername(username);
    setId(data.id);
    
    if(url==='register'){
      setIsLoginOrRegister('login');
      setUsername('');
      setPassword('');
      navigate('/login');
    }
    else{
      navigate('/stt')
    }
   

  }
  

  return (
    <div className="flex flex-col h-[380px] w-[410px] backdrop-filter backdrop-blur-lg  rounded-lg   mt-10  mb-2  items-center">
      <h2 className="mt-12 mb-10 text-white text-[37px]">Signup/Login</h2>
      <form className="w-[370px] mb-12" onSubmit={handleSubmit}>
        <input  value={username}
               onChange={ev => setUsername(ev.target.value)}
               type="text" placeholder="username"
               className=" w-full rounded-sm p-2 mb-2 border" />
        <input value={password}
               onChange={ev => setPassword(ev.target.value)}
               type="password"
               placeholder="password"
               className="block w-full rounded-sm p-2 mb-2 border" />
        <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
          {isLoginOrRegister === 'register' ? 'Register' : "Let's  Go"}
        </button>
        <div className="text-center text-white mt-2">
          {isLoginOrRegister === 'register' && (
            <div>
              Already a member?
              <button className="ml-1" onClick={() => setIsLoginOrRegister('login')}>
                Login here
              </button>
            </div>
          )}
          {isLoginOrRegister === 'login' && (
            <div>
              Dont have an account?
              <button className="ml-1" onClick={() => setIsLoginOrRegister('register')}>
                Register
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

