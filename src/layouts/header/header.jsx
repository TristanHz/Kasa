import { NavLink } from 'react-router-dom'
import LogoKasa from '../../assets/Logo.png'
import "./header.scss"

function Header() {
    return (
        <div className="header">
            <img src={LogoKasa} alt="Logo Kasa" />
            <nav>
                <NavLink className={({ isActive }) => isActive ? "nav showActive" : "nav"
                } to="/" >Accueil</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav showActive" : "nav"
                } to="/about">A propos</NavLink>
            </nav>
        </div>
    )
}

export default Header