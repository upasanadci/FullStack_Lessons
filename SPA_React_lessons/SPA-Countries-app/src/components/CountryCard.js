import React from "react";

export default function CountryCard({ country }) {
 
  return (
    <div style={{border: '1px solid black', padding: '10px', width: '400px', height: '370px', borderRadius: '20px' ,marginTop: "20px"}}>
      <div style={{ fontSize: "100px" }}> {country.flag} </div>
      <h1>{country.name.common}</h1>
      <span style={{ fontSize: "27px" }}>
        <b>{country.capital &&  `Capital: ${country.capital}`}  </b> 
      </span>
      <span style={{ fontSize: "27px" }}>
        <b> Area: {country.area} <sup>2</sup></b>
      </span>
      <div style={{ fontSize: "27px" }}>
        <b>Population: {country.population}</b> 
      </div>
    </div>
  );
}
