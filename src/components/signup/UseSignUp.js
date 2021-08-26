import { useState } from "react";
import {useDispatch} from "react-redux";
import { doSignUp } from "../../store/action/AuthAction";
export default function UseSignUp(){
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [phone,setPhone]=useState("");
const [country,setCountry]=useState("");
const [loading,setLoading]=useState(false);
const [name,setName]=useState("")
const dispatch=useDispatch();
const doSignUpUser = () =>{
    const data={
     email,
     password,
        country,
        name,
        phone
    }
   
    dispatch(doSignUp(data));
    setEmail("")
    setPassword("")
    setPhone("")
    setCountry("")
    setName("")
    
}

return [email,password,phone,country,name,setEmail,setPassword,doSignUpUser,setLoading,setName,setPhone,setCountry];
}
