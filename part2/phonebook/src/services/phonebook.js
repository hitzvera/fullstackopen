import axios from 'axios'
const baseUrl = "http://localhost:3002/persons"

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const addPhoneBook = newObject => {
    return axios.post(baseUrl, newObject).then(response => response.data)
}

export default { getAll, addPhoneBook }
