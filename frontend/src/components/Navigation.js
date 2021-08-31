import React from "react";
import { Link} from "react-router-dom";


  const Navigation =()=>{

    return (
        <div style={{ display: "flex", gap: "20px", border:"blue  2px  solid " }}>
          <Link to="/Login">Login </Link>
          <Link to="/Register">Register </Link>
         </div>
    )
    }

    
export default Navigation;