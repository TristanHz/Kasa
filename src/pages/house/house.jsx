import { useParams, Navigate } from 'react-router-dom'
import { HouseList } from '../../datas/houses.js'
import Collapse from '../../components/collapse/collapse.jsx'
import Slider from '../../components/slider/slider.jsx'
import Rating from '../../components/rating/rating.jsx'
import "./house.scss"

function House() {
    const { id } = useParams()
    const house = HouseList.find(house => house.id === id)

    if (!house) {
        return <Navigate to="/404" />
    }

    return <div>
        <div className="house-cover">
            <Slider pictures={house.pictures} title={house.title} />
            <div className='info-title-container'>
                <div className='main-info-house'>
                    <h1>{house.title}</h1>
                    <h2>{house.location}</h2>
                    <div className='tags-container'>
                        {house.tags.map((tag, index) => (
                            <span key={index} className='tag'>{tag}</span>
                        ))}
                    </div>
                </div>
                <div className='info-host-container'>
                    <div className='main-info-person'>
                        <div className='person-name'>
                            <span>{house.host.name.split(' ')[0]}</span>
                            <span>{house.host.name.split(' ')[1]}</span>
                        </div>
                        <img src={house.host.picture} alt={house.host.name} className='person-picture' />
                    </div>
                    <Rating house={house} />
                </div>
            </div>
            <div className='collapse-info'>
                <div className='collapse-description'>
                    <Collapse title="Description" content={house.description} />
                </div>
                <div className='collapse-equipments'>
                    <Collapse title="Equipements" content={house.equipments} />
                </div>
            </div>
        </div>
    </div>
}

export default House