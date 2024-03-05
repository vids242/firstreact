import React from 'react';
import "./Card.module.css"

function Card({data}) {
    return (
        <div>
            <h3>{data.name}</h3>
            <p>{data.expiry}</p>
        </div>
    );
}

export default Card;