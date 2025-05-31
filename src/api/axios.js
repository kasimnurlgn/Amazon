import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5001/fir-d7510/us-central1/api",
  // baseURL: "https://amazon-api-deploy.onrender.com/",
});
export { axiosInstance };
