import React from 'react';
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container display-flex-space-between-center'>
        <div className='left'>
        <Link to="/">
          <img src={process.env.PUBLIC_URL + "/logo.png"} className="logo" />
        </Link>
        <p>&copy; {new Date().getFullYear()} Galois , All Rights Reserved.</p>
        </div>
        <div className='right display-flex-end-center'>
            <Link to='' className='link'>Privacy Statement</Link>
            <Link to='' className='link'>Term of Use</Link>
            <Link to='' className='link'>Cookie Statement</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
