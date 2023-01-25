import axios from "axios";

const BASE_URL = "https://boa-store.herokuapp.com/api/";
const token= process.env.REACT_APP_ACESS_TOKEN;
localStorage.setItem('ACCESS_TOKEN', token)

const TOKEN = localStorage.getItem('ACCESS_TOKEN')

export const publicRequest = axios.create({
    baseUrl: BASE_URL,
});
export const userRequest = axios.create({
    baseUrl: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
});