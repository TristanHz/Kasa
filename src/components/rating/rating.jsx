import star from "../../assets/star.png"
import greyStar from "../../assets/grey_star.png"
import "./rating.scss"

function Rating({ rating }) {
    const maxStars = 5
    const numericRating = Number(rating)

    return (
        <div className="rating">
            {[...Array(maxStars)].map((_, index) => (
                <img
                    key={index}
                    className="rating-star"
                    src={index < numericRating ? star : greyStar}
                    alt={index < numericRating ? "étoile pleine" : "étoile vide"}
                />
            ))}
        </div>
    )
}

export default Rating