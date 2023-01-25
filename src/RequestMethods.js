import axios from "axios";

const BASE_URL = "https://boa-store.herokuapp.com/api/";
const token= process.env.REACT_APP_ACCESS_TOKEN;
localStorage.setItem('REACT_APP_ACCESS_TOKEN', token)

const TOKEN = localStorage.getItem('REACT_APP_ACCESS_TOKEN')
console.log(TOKEN)
export const publicRequest = axios.create({
    baseURL: BASE_URL
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
});