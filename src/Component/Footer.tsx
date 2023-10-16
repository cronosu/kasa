
import { Link } from 'react-router-dom';
import Logo from '../assets/LOGO.png';

function Footer() {

  return (
    <footer className='footer'>
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>

  )
}

export default Footer