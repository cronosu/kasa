/*import { useState } from 'react'*/
import './Header.scss'
import Logo from '../assets/LOGO.png';
import {Link} from "react-router-dom";


function Header() {

  return (
    <>
      <nav className="nav">
        <img className="logo" src={Logo} alt="Logo" />
        <div className='nav-link'>
          <Link className='nav-link-btn' to="/">Accueil</Link> 
          <Link className='nav-link-btn'  to="/">A Propos</Link>
        </div>
      </nav>
    </>
  )
}

export default Header
