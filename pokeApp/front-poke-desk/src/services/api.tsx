import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:1337/",
    
  });

  export default api