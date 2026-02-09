import "../styles/index.scss"
import ImgHome from '../assets/img_home.png'
import { HouseList } from '../datas/houses.js'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="home">
                <img src={ImgHome} alt="Image d'accueil" />
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <ul className="house-list">
                {HouseList.map(({id, title, cover}) => (
                    <li key={id} className="house-card" onClick={() => navigate(`/house/${id}`)}>
                        <img src={cover} alt={title} />
                        <div className="house-title">{title}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home