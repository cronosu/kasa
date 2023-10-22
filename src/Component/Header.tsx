import { CSSProperties } from 'react';
import Logo from '../assets/LOGO.png';
import { Link } from "react-router-dom";

type HeaderProps = {
  style?: CSSProperties;
  style2?: CSSProperties;
};

function Header(props: HeaderProps) {

  return (
    <>
      <header className="nav">
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        <nav className='nav-link'>
          <Link className='nav-link-btn' style={props.style} to="/">Accueil</Link>
          <Link className='nav-link-btn' style={props.style2} to="/apropos">A Propos</Link>
        </nav>
      </header>
    </>
  )
}

export default Header
