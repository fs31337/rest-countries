import React from 'react';

export default function Card() {
    return (
        <div className="cardContainer">
            <img src="https://restcountries.eu/data/arg.svg" alt="" className="cardImg"/> 
            <div className="cardDataContainer">

                <span className="cardTitulo">Argentina</span>
                <div className="cardData"> 
                    <div className="cardRenglon">
                    <span className="cardTituloInfo">Population:</span><span className="cardInfo">45000000</span>
                    </div>  
                    <div className="cardRenglon">
                    <span className="cardTituloInfo">Capital:</span><span className="cardInfo">Buenos Aires</span>
                    </div> 
                    <div className="cardRenglon">
                    <span className="cardTituloInfo">Area:</span><span className="cardInfo">America</span>
                    </div>   
                </div>

            </div>
        </div>
    )
};