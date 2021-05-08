import React from 'react';
import Card from '../Card/Card';

export default function Cards({ paises }) {
    return (
        <div className="cardsContainer">
            {paises.map(e => 
                    <Card name={e.name} bandera={e.bandera} population={e.population} region={e.region} capital={e.capital} />
                )
            }
        </div>
    )
};

