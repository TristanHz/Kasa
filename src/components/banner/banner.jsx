import "./banner.scss"

function Banner({ logo, text }) {
    return (<div className="home">
        <img src={logo} alt="Image d'accueil" />
        <p>{text}</p>
    </div>)
}

export default Banner