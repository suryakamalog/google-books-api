import axios from 'axios';
const BASE_URL = 'https://www.googleapis.com/books/v1/';

export default axios.create({
    baseURL: BASE_URL
});
