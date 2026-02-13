import "./about.scss"
import Collapse from '../../components/collapse/collapse.jsx'
import { aboutData } from "../../datas/about.js"
import ImgAbout from '../../assets/about_img.png'
import Banner from '../../components/banner/banner.jsx'

function About() {
    return (    
        <div className="about">
                <Banner logo={ImgAbout} text="" />
                <div className="collapse-column">
                {aboutData.map(({id, title, content}) => (
                    <Collapse key={id} title={title} content={content} />
                ))}
                </div>
        </div>
    )
}

export default About