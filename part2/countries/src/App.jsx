import { useEffect, useState } from "react";
import { getCountries } from "./services/countriesServices";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getCountries().then((result) => {
      setCountries(result);
      console.log(result);
    });
  }, []);

  useEffect(() => {
    if (searchValue === "") {
      setFilteredCountries([]);
    } else {
      const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredCountries(filteredCountries);
    }
  }, [countries, searchValue]);

  const handleCountryInputChange = (event) => {
    const inputValue = event.target.value;
    if (searchValue === "") {
      setFilteredCountries([]);
    }
    setSearchValue(inputValue);
  };

  return (
    <>
      {/* change to component Search */}
      <div>
        <label htmlFor="searchCountry">find countries</label>
        <input
          type="search"
          name="searchCountry"
          id="searchCountry"
          onChange={handleCountryInputChange}
        />
      </div>
      {filteredCountries.length === 1 ? (
        <div>
          <h2>{filteredCountries[0].name.common}</h2>
          <p>
            capital {filteredCountries[0].capital[0]}
            <br />
            area {filteredCountries[0].area}
          </p>
          <h3>languages:</h3>
          <ul>
            {
              Object.entries(filteredCountries[0].languages).map(([key, value]) => {
                return <li key={key}>{value}</li>;
              })
            }
          </ul>
          <img
            src={filteredCountries[0].flags.png}
            alt={filteredCountries[0].flags.alt}
            width={150}
          />
        </div>
      ) : (
        <div>
          {filteredCountries.map((country) => (
            <div key={country.name.common} className="list__country-item">
              <div>{country.name.common}</div>
              <button>show</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
