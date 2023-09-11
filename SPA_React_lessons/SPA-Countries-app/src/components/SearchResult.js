import React from "react";

export default function SearchResult({ country }) {
  console.log(country)
  return (
    <div
      style={{
        margin: "20px 10%",
        boxShadow: "6px 6px 10px",
        padding: "10px",
        width: "80%",
        height: "640px",
        borderRadius: "20px",
        fontSize: "27px",
      }}
    >
      <img src={country.flags.png} alt={country.flags.alt}  width="60%" />
      <h1>{country.name.common}</h1>
      <span>
        <b>Capital: {country.capital}</b>
      </span>
      <span>
        <b> Area: {country.area}</b>  km<sup>2</sup>
      </span>
      <br />
      <span>
        <b>Population: {country.population}</b>
      </span>
      <span>
        <a href={country.maps.googleMaps}> Map </a>
      </span>
    </div>
  );
}
