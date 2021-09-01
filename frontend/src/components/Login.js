import React from "react";
import axios from "axios"
import { useState } from "react";
import { useHistory } from "react-router";

const Login = ({token ,setToken }) => {
 
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [massage, setMassage] = useState("");
  const history = useHistory();


  const OnClicking = () => {
    let newLogin = {
        email,
        password
      };
    axios.post(`http://localhost:5000/Login/`, newLogin).then((res) => {
        if(!res.data.token){
            setMassage(<p> email dosnt exist </p>)
        }
       console.log(res)
       setToken(res.data.token)
       localStorage.setItem("token", JSON.stringify(res.data.token))
     history.push('/dashboard')
    }).catch((err)=>{
        setMassage(<p>The password you've entered is incorrect </p>)
        console.log(err)

    })
    
    
}
    


  return (

    <div style={{display:"grid" , gap:"10px" , width:"50%" }}>
        
      <input
        placeholder="email here"
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        placeholder="Password here  "
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}

      />

      <button type="submit" onClick={OnClicking}>
       Login
      </button>
<div>{massage}</div>

    </div>
  );

  
};

export default Login;
