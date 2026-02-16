import "./home.scss"
import ImgHome from '../../assets/img_home.png'
import { HouseList } from '../../datas/houses.js'
import Banner from '../../components/banner/banner.jsx'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <Banner logo={ImgHome}
                    text={
                            <> Chez vous,<span className="break-line"> partout et ailleurs</span> 
                            </>
                    }
            />
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