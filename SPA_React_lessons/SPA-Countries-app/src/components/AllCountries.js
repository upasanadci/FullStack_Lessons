import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

export default function AllCountries() {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    // Named function
    // const fetchCountries = async () => {}
    // fetchCountries()

    // self Invoked anonymous function
    (async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      console.log(data);
      setAllCountries(data);
    })();
  }, []);

  return (
    <div className="countries-container">
      {allCountries.map((item, i) => {
        return <CountryCard country={item} key={i} />;
      })}
    </div>
  );
}
