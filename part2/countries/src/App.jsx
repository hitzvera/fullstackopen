import { useEffect, useState } from "react";
import { getCountries } from "./services/countriesServices";
import { getWeather } from "./services/wetherServices";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [weather, setWeather] = useState({});

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
      const fetchData = async () => {
        const result = await getWeather(searchValue);
        setWeather(result);
      };
      fetchData();
    }
  }, [countries, searchValue]);

  const handleCountryInputChange = (event) => {
    const inputValue = event.target.value;
    if (searchValue === "") {
      setFilteredCountries([]);
    }
    setSearchValue(inputValue);
  };

  const weatherOfCountry = async (country) => {
    try {
      const data = await getWeather(country);
      setWeather(data);
    } catch (error) {
      console.error(error);
      return null;
    }
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
            {Object.entries(filteredCountries[0].languages).map(
              ([key, value]) => {
                return <li key={key}>{value}</li>;
              }
            )}
          </ul>
          <img
            src={filteredCountries[0].flags.png}
            alt={filteredCountries[0].flags.alt}
            width={150}
          />
          <h2>Weather in Helsinki</h2>
          <p>temperature {weather.main.temp} Celcius</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt=""
          />
          <p>wind {weather.wind.speed} m/s</p>
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
