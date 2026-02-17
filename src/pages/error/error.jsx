import './error.scss'

function Error() {
    return (
            <div className="error">
                <h1 className="title">404</h1>
                <h2 className="subTitle">Oups! La page que<br className='break-point' /> vous demandez n'existe pas.</h2>
                <a href="/" className="backlink">Retourner sur la page d'accueil</a>
            </div>
    )
}

export default Error