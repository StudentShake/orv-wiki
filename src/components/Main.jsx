import {Link, NavLink} from 'react-router-dom'
import LogoImg from '../assets/logo.png'
import {links} from '../data'
import './main.css'

const Main = () => {
  return (
    <nav>
        <div className = "heading_container">
          <h2>Projekt is On.</h2>
        </div>
        <div className="logo_container">
            <Link to="/" className='logo'>
                <img src={LogoImg} alt="Logo" className="center"/>
            </Link>
        </div>
      </nav>
    )
}

export default Main
