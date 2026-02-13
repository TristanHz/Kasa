
function Rating({ house }) {
        return (
            <div className='rating'>
                        {Array.from({ length: 5 }, (_, index) => (
                            <span key={index} className={`star ${index < house.rating ? 'filled' : ''}`}>★</span>
                        ))}
                    </div>
        )
}

export default Rating