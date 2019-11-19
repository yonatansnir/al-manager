import React from 'react';

const Card = ({ id, style, title, number }) => (
    <div className="card">
        <i className={style}>{id === 4 ? 'H' : ''}</i>
        <h3>{title}</h3>
        <p className="number">{number}</p>
    </div>
);

export default Card;