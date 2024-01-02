import { useContext } from "react";
import Register from "./Components/Register";
import { UserContext } from "./UserContext";
import Chat from "./Components/Chat";

export default function Routes(){
    const {username,id} = useContext(UserContext);
    console.log(username)
    if(username!==''){
         return  <Chat/>;
    }
    return(
        <Register/>
    )
}