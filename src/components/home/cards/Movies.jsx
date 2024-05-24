import React from 'react';
import "../cards/Movies.css";

function Movies(props) {
    console.log(props);
    return (
        <div className='moviesContainer'>
            {props.movies.map(movie => (<span key={movie.id}>
                <div className='hoverContainer'>
                    < img className='moviesLst' src={movie.image} alt="cards" />
                    <div className='linearGradient'>
                        <span>{movie.name}</span><br />
                        <span>{movie.watch}</span>
                    </div>
                </div>
            </span>

            ))}
        </div>
    )
}

export default Movies