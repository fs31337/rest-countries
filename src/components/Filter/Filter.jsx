import React from 'react';

export default function Filter() {
    return (
        <div className="contenedorFilter">
            <select name="Filter by Region" className="filter" >
            <option hidden selected className="placeHolderFilter">Filter by Region</option>
            <option value="Africa"> Africa </option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            </select>     
        </div>
    )
};