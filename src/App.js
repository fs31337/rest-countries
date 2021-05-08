import "./App.css";
import React, { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import DarkMode from "./components/DarkMode/DarkMode";
import Filter from "./components/Filter/Filter";
import Nav from "./components/Nav/Nav";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [paises, setPaises] = useState([]);

  useEffect(() => {    
    fetch("https://restcountries.eu/rest/v2/all")
    .then((r) => r.json())
    .then((recurso) => {
      recurso.map(e => {
        const pais = {
          bandera: e.flag,
          name: e.name,
          population: e.population,
          region: e.region,
          capital: e.capital,
        };
        setPaises((oldPaises) => [...oldPaises, pais]);
      })    
    })}
    ,[]  
  )  
  return (
    <div className="App">
      {/* {console.log(paises)} */}
      <Nav />
      <SearchBox />
      <Filter />
      <Cards paises={paises}/>
    </div>
  );
}

export default App;
