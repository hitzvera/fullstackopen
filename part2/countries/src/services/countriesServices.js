import axios from "axios";

const getCountries = async () => {
    const response = await axios.get(
      "https://studies.cs.helsinki.fi/restcountries/api/all"
    );
    // this results an array 
    return response.data;
}

export { getCountries }
