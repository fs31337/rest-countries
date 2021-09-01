import React from 'react';

export default function Card({name,bandera,region,population,capital}) {
    return (
        <div className="cardContainer">
            {console.log("CARD NAMEEEEEEE",name)}
            <div className="cardImg">
                <img src={bandera} alt="" className="cardImg"/>
            </div>
            <div className="cardDataContainer">
                <div className="cardTitulo">
                    <span>{name}</span>
                </div>
                <div className="cardData">
                    <div className="cardRenglon">
                        <span className="cardTituloInfo"><strong>Population:</strong></span><span className="cardInfo">{population}</span>
                    </div>
                    <div className="cardRenglon">
                        <span className="cardTituloInfo"><strong>Region:</strong></span><span className="cardInfo">{region}</span>
                    </div>
                    <div className="cardRenglon">
                        <span className="cardTituloInfo"><strong>Capital:</strong></span><span className="cardInfo">{capital}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};