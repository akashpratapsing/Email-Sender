import axios from "axios"

const baseUrl = 'http://localhost:8080/api';

export const customAxios = axios.create({
    baseURL:baseUrl,
})