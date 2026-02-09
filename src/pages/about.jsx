import "../styles/index.scss"
import Collapse from '../components/collapse/collapse.jsx'
import { aboutData } from "../datas/about.js"

function About() {
    return (    
        <div className="about-page">
                <h1>À propos</h1>
                {aboutData.map(({id, title, content}) => (
                    <Collapse key={id} title={title} content={content} />
                ))}
        </div>
    )
}

export default About