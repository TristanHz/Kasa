import { useState } from "react"
import "./slider.scss"

function Slider({ pictures, title }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    if (!pictures || pictures.length === 0) return null

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === pictures.length - 1 ? 0 : prev + 1
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? pictures.length - 1 : prev - 1
        )
    }

    return (
        <div className="slider-container">
            <img
                key={currentIndex}
                src={pictures[currentIndex]}
                alt={title}
                className="house-slider"
            />

            {pictures.length > 1 && (
                <>
                    <button className="arrow left" onClick={prevSlide}>
                        <svg width="47" height="80" viewBox="0 0 47 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46.68 7.08L39.56 0L0 39.6L39.6 79.2L46.68 72.12L14.16 39.6L46.68 7.08Z" fill="white" />
                        </svg>

                    </button>

                    <button className="arrow right" onClick={nextSlide}>
                        <svg width="47" height="80" viewBox="0 0 47 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 72.12L7.08 79.2L46.68 39.6L7.08 0L0 7.08L32.52 39.6L0 72.12Z" fill="white" />
                        </svg>
                    </button>

                    <span className="counter">
                        {currentIndex + 1}/{pictures.length}
                    </span>

                </>
            )}
        </div>
    )
}

export default Slider
