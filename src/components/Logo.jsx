import {Link, NavLink} from 'react-router-dom'
import Logo from '../assets/logo.png'
import {links} from '../data'
import './Logo.css'

const Logo = () => {
  return (
    <nav>
        <div className = "heading_container">
          <h2>Projekt is On.</h2>
        </div>
        <div className="logo_container">
            <Link to="/" className='logo'>
                <img src={Logo} alt="Logo" className="center"/>
            </Link>
        </div>
      </nav>
    )
}

export default Logo
