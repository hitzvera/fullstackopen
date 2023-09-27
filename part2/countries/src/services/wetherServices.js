import axios from "axios";

const getWeather = async (location) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cfe8f80d830be808037aa796d80f7a65&units=metric`
  );
  return response.data;
};

export {getWeather}
