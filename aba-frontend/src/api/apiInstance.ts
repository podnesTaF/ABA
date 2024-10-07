import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api', // set the base URL for API
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;