import axios from "axios";
const api = 'http://localhost:3000';

 export const getItems = async () => {
     try { 
        const response = await axios.get(`${api}/properties`); 
            return response.data; 
    } 
    catch (error) {
         console.error('Error fetching properties:', error);
             throw error; 
        }
    }