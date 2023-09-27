import axios from "axios";

const getWeather = (location) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${
        import.meta.env.VITE_OPEN_WEATHER_API_KEY
      }&units=metric`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export { getWeather };
