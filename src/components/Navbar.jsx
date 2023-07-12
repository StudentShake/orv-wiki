import {Link, NavLink} from 'react-router-dom'

import './navbar.css'
import Logo from '../assets/logo.png'

import {GoHome} from 'react-icons/go'

const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='logo'>
                <img src={Logo} alt="Nav Logo" />
            </Link>
        </div>
        <a href="Home"><GoHome/></a>
    </nav>
  )
}

export default Navbar
