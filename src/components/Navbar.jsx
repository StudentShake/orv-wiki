import {Link, NavLink} from 'react-router-dom'
import Logo from '../assets/logo.png'
import {links} from '../data'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='logo'>
                <img src={Logo} alt="Nav Logo" className="center"/>
            </Link>
        </div>
      </nav>
    )
}

export default Navbar
