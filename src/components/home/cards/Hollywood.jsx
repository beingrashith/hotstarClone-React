import React from 'react';
import "../cards/Hollywood.css";

function Hollywood(props) {
    console.log(props);
    return (
        <div className='hollywoodContainer'>
            {props.hollywood.map(item => (<span key={item.id}>
                <div className='hoverContainer'>
                    < img className='hollywood' src={item.image} alt="cards" />
                    <div className='linearGradient'>
                        <span>{item.name}</span><br />
                        <span>{item.watch}</span>
                    </div>
                </div>
            </span>


            ))}
        </div>
    )
}

export default Hollywood