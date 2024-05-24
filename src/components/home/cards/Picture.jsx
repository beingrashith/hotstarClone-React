import React from 'react';
import "../cards/Picture.css";

function Picture(props) {
    console.log(props);
    return (
        <div className='pictureContainer'>
            {props.pictures.map(movie => (<span key={movie.id}>
                <div className='hoverContainer'>
                    < img className='picture' src={movie.image} alt="cards" />
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

export default Picture