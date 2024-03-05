import axios from "axios";





 const request = axios.create({baseURL: "http://localhost:3600"});


 request.interceptors.request.use((config) => {

    config.headers.Authorization = `Bearer shokhdevtodolist`
    

    return config;
    
 }, 
 
 (error) => {
    return Promise.reject(error);
 });



 export {request};