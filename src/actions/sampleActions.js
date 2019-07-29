import {
    LOGIN_SUCCESS,NO_DATA
  } from "./types";
import axios from 'axios';
  
// Login Page Actions
export const sampleAPI = () => (dispatch) => {
    // console.log('fetching login Actions working')
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        });
        // console.log('[ Sample_API_Actions: ]')
      })
      .catch(err => {
        dispatch({
          type: NO_DATA
        });
      });  
};
