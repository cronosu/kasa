
import './Footer.scss'
import Logo from '../assets/LOGO.png';



function Footer() {

  return (
    <footer className='footer'>
         <img className="logo" src={Logo} alt="Logo" />
         <p>© 2020 Kasa. All rights reserved</p>
    </footer>
 
  )
}

export default Footer