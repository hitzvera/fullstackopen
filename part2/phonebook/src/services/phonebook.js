import axios from "axios";
const baseUrl = "http://localhost:3002/persons";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const addPhoneBook = (newObject) => {
  return axios.post(baseUrl, newObject).then((response) => response.data);
};

const deletePhonebook = (id) => {
  return axios
    .delete(`${baseUrl}/${id}`)
    .then((response) => response.data)
    .catch((error) => console.log(`error dalam menghapus data, ${error}`));
};

export default { getAll, addPhoneBook, deletePhonebook };
