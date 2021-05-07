import React from 'react';

export default function Card() {
    return (
        <div className="cardContainer">
            <img src="https://restcountries.eu/data/arg.svg" alt="" className="cardImg" />
            <div className="cardDataContainer">
                <div className="cardTitulo">
                    <span>Germany</span>
                </div>
                <div className="cardData">
                    <div className="cardRenglon">
                        <span className="cardTituloInfo">Population:</span><span className="cardInfo">81,770,900</span>
                    </div>
                    <div className="cardRenglon">
                        <span className="cardTituloInfo">Region:</span><span className="cardInfo">Europe</span>
                    </div>
                    <div className="cardRenglon">
                        <span className="cardTituloInfo">Capital:</span><span className="cardInfo">Berlin</span>
                    </div>
                </div>
            </div>
        </div>
    )
};