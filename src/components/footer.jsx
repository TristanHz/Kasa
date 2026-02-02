import LogoFooter from '../assets/Logo_footer.png'
import './main.css'

function Footer() {
    return (
            <div className='footer'>
                <img src={LogoFooter} alt="Logo Kasa" />
                <h3 className='footerContent'>© 2020 Kasa. All rights reserved</h3>
            </div>
         )
}

export default Footer