import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';


const StarRating = () => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <div>
            {
                [...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return(
                        <label className="inline--stars">
                            <input className="rating-input" 
                                type="radio" 
                                name="rating" 
                                value = {ratingValue} 
                                onClick = {() => setRating(ratingValue)} 
                            />

                            <FaStar 
                                // onMouseOver = {() => setHover(!hover)} 
                                // className={ hover === true ? "check--color" : "star"}
                                onMouseEnter = {() => setHover(ratingValue)} 
                                onMouseLeave={() => setHover(null)}
                                className='star' color = {ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            />
                        </label>
                    )
                })
            }
        </div>
    );
}

export default StarRating;
