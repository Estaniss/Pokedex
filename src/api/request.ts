import axios from "axios";

const url = "https://pokeapi.co/api/v2/";

const request = axios.create({
  baseURL: url,
});

export default request;
