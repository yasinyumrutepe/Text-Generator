import axios from "axios";
const api = () => {
  return axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    responseType: "json",
  });
};

export default api;
