import React from 'react';
import Card from './Card';
import CardsData from '../../../database/CardsData';

const Cards = () => (
    <div className="cards">
        {
            CardsData.map(({ id, style, title, number }) => {
                return (<Card
                    key={id}
                    id={id}
                    style={style}
                    title={title}
                    number={number}
                />)
            })
        }
    </div>
);

export default Cards;