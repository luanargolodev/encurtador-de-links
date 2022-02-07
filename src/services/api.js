import axios from "axios";

export const key = "d4d77b6274f33369d8762a6b51fc8d0d703678bd";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4/",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
