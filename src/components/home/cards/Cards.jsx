import React from 'react';
import "../cards/Cards.css";

function Cards(props) {
    console.log(props);
    return (
        <div className='cardContainer'  >
            {props.cards.map(item => (<span key={item.id} >
                <div className='hoverContainer'>
                    < img className='cards' src={item.image} alt="cards" />
                    <div className='linearGradient'>
                        <span>{item.name}</span><br />
                        <span>{item.watch}</span>
                    </div>
                    <div className='alert'><h2>alert !</h2></div>
                </div>
            </span>

            ))
            }
        </div >
    )
}

export default Cards