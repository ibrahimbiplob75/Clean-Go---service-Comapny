import axios from 'axios';
import useAuth from './useAuth';

 const instance = axios.create({
   baseURL: "http://localhost:3000/api",
   withCredentials: true,
 });



const UseAxios = () => {
  const {logOut}=useAuth();
    
    instance.interceptors.request.use(
      function (response) {
        return response;
      },
      function (error) {
        console.log(error)
        if (error.response.status == 401 || error.response.status == 403) {
          logOut();
        }
      }
    );
    return instance;

    
    
};

export default UseAxios;