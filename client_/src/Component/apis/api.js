// import axios from 'axios';
import axios from "axios";


const Port = "http://localhost:8080/";


// http:localhost:8080/submit
 export const submit_data = async (data) => {
    console.log(data);
  try {
    return await axios.post(`${Port}submit`, data);
  } catch (e) {
    return e;
  }
};