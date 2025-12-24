import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deploy-3a2c.onrender.com",
});

export { axiosInstance };
