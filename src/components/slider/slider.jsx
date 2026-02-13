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
                        ❮
                    </button>

                    <button className="arrow right" onClick={nextSlide}>
                        ❯
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
