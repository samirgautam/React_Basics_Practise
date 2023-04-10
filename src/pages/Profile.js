import {ChangeProfile} from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";


export const Profile = () =>{
   const { username } = useContext(AppContext);

   return  <div>This is the Profile Page and user is : {username}
   <ChangeProfile />
   </div>
;}