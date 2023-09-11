import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import SearchResult from "./SearchResult";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { TextField , Button } from "@mui/material";

export default function ByRegion() {
  const [chosenRegion, setChosenRegion] = useState("Africa");
  const [regionCountries, setRegionCountries] = useState([]);
  const [foundCountry, setFoundCountry] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${chosenRegion}`
      );
      const data = await res.json();
      setRegionCountries(data);
    })();
    setFoundCountry(null);
  }, [chosenRegion]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${searchInput}`
    );
    const data = await res.json();
    setFoundCountry(data[0]);
    setSearchInput("");
  };

  return (
    <div>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Region</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={(e) => {
            setChosenRegion(e.target.value);
          }}
        >
          <FormControlLabel
            value="Africa"
            control={<Radio />}
            label="Africa"
            defaultChecked
          />
          <FormControlLabel
            value="America"
            control={<Radio />}
            label="America"
          />
          <FormControlLabel value="Asia" control={<Radio />} label="Asia" />
          <FormControlLabel value="Europe" control={<Radio />} label="Europe" />
          <FormControlLabel
            value="Oceania"
            control={<Radio />}
            label="Oceania"
          />
        </RadioGroup>
      </FormControl>

      <form style={{ margin: "20px" }} onSubmit={submitHandler}>
        <TextField
          id="outlined-basic"
          label="Country"
          variant="outlined"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <Button style={{height:"55px"}} variant="outlined" type="submit">
          Search
        </Button>
      </form>

      {foundCountry && <SearchResult country={foundCountry} />}

      <div className="countries-container">
        {regionCountries.map((item, i) => {
          return <CountryCard country={item} key={i} />;
        })}
      </div>
    </div>
  );
}
