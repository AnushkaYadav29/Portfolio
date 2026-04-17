import React from 'react';
import { FaGithubSquare, FaLinkedin, FaInstagramSquare,FaFacebook} from "react-icons/fa";

const Footer = () => {
  return (
    <div
    style={{
        background: "white",
        color: "black"
      }}
    >
    <div className="container bg-light" >
      <div className="row">
        <div className="col-md-3 customFooter"><FaGithubSquare size={50}/></div>
        <div className="col-md-3 customFooter"><FaLinkedin  size={50}/></div>
        <div className="col-md-3 customFooter"><FaInstagramSquare  size={50} /></div>
        <div className="col-md-3 customFooter"><FaFacebook  size={50}/></div>
        <div className='text-center'>@Anushkayadav</div>
      </div>
    </div>
    </div>
    
  )
}

export default Footer