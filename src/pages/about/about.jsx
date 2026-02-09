import "./about.css"
import Collapse from '../../components/collapse/collapse.jsx'
import { aboutData } from "../../datas/about.js"
import ImgAbout from '../../assets/about_img.png'

function About() {
    return (    
        <div className="about">
                <img src={ImgAbout} alt="Image de présentation de la page à propos" />
                {aboutData.map(({id, title, content}) => (
                    <Collapse key={id} title={title} content={content} />
                ))}
        </div>
    )
}

export default About