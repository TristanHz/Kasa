import { Link } from 'react-router-dom'
import LogoKasa from '../assets/Logo.png'
import "../styles/index.scss"

function Header() {
    return (
        <div className="header">
            <img src={LogoKasa} alt="Logo Kasa" />
            <nav>
                <Link className='nav' to="/">Accueil</Link>
                <Link className='nav' to="/about">A propos</Link>
            </nav>
        </div>
    )
}

export default Header