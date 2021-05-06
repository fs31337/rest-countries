import React from 'react';
import {ReactComponent as Search} from '../../img/search.svg'

export default function SearchBox() {
    return (
        <div className="contenedorSB">
            <Search className="searchIcon"/>
            <input type="text" className="searchInput" placeholder="Search for a country..."/>
        </div>
    )
};