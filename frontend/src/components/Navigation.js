import React from "react";
import { Link} from "react-router-dom";


  const Navigation =({token ,setToken})=>{


  return (
    <div style={{ display: "flex", gap: "20px", border:"blue  2px  solid " }}>

{!token?(<><Link to='/Register'>Register </Link>  <Link to='/Login'>Login </Link></>)
:(<><Link to='/Dashboard'>Dashboard </Link><Link to='/Newarticle'>Newarticle </Link></>)}

    {/* token ?  ( <Link to='/Login'>Login </Link>
      <Link to='/Register'>Register </Link>)
      : (<Link to='/Dashboard'>Dashboard </Link>
      <Link to='/Newarticle'>Newarticle </Link>)  */}
     </div>
)
}


    
    
export default Navigation;