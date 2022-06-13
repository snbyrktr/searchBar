import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List.js";

// json dosyasinin okunup, countries ve setcountries e atanmasi
export default function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((Response) => setCountries(Response.data))
      .catch((error) => console.log({ error }));
  }, []);

  const filteredCountries =
    search.length === 0
      ? countries
      : countries.filter((country) =>
          country.dataField.toLowerCase().includes(search.toLowerCase())
        );

  // countries e atanan verinin tabloya aktarimi
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(columns) => {
          setSearch(columns.target.value);
        }}
      />

      {search && search.map((country) => <span>{country.dataField}</span>)}

      <List countries={filteredCountries} />
    </div>
  );
}
