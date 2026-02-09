import { useParams } from 'react-router-dom'
import { HouseList } from '../../datas/houses.js'

function House() {
    const { id } = useParams()
    const house = HouseList.find(house => house.id === id)

    return <div>
        <div className="house-cover">
            <img src={house.cover} alt={house.title} />
        </div>
        <h1>{house.title}</h1>
    </div>
}

export default House