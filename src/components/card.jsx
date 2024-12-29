import React from 'react';
import '../styles/card.css'; 


function Card({id, name, price}){
    return(
        <div className='card' key={id}>
            <h3>{name}</h3>
            <h3> ₹{price}</h3>
        
        </div>
    )
}

export default Card;