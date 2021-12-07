import React from "react";
import {FaPlay} from 'react-icons/fa';


function MovieCard (props) {

    return (
        <div className="container mt-8">
			<div className="card movie_card">
                {/* <img src="" className="card-img-top" alt="..."/> */}
                <div class="card-body">

                    <i class="fas fa-play play_button" data-toggle="tooltip" 
                    data-placement="bottom" title="Play Trailer"></i>

                    <h5 className="card-title">
                        {props.movie.title}
                    </h5>
                    <p className="card-description">
                        {props.movie.description}
                    </p>

                </div>
                <span className="rate">{props.movie.rating}</span>
            </div>
        </div>
    );
}

export default MovieCard;