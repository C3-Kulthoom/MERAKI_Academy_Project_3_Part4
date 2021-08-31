import React from "react";
// import { Link} from "react-router-dom";

const Input = () => {
  return (
    <div style={{display:"grid" , gap:"10px" , width:"50%" }}>
      <input type="text" placeholder="firstName here"/>
      <input type="text" placeholder="lastName  here"/>
      <input type="number" placeholder="age here"/>
       
      <input type="text" placeholder=" country here"/>
      <input type="text" placeholder="email  here"/>
      <input type="password" placeholder="password  here "/>
     <button>Register</button>
    </div>
  );
};

export default Input;
