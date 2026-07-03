import axios from "axios";

const API = axios.create({
  baseURL: "http://nexus-ai-backend-qde1.onrender.com/api",
});

export default API;