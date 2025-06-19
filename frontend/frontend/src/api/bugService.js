import axios from 'axios';

// Spring Boot backend URL
const API_URL = 'http://localhost:8080/api/bugs';

// Get all bugs from backend
export const getBugs = () => {
    return axios.get(API_URL);
};
