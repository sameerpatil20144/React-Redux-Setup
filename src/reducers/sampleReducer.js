import {
    NO_DATA,LOGIN_SUCCESS
  } from "../actions/types";
  
  const initialState = {
    items:[],
  };
  
  export default function(state = initialState, action) {
    // console.log('SampleReducer working')
    switch (action.type) {
        case LOGIN_SUCCESS:
            // console.log('SampleReducer action.payload: ',action.payload)
            return {...state,items: action.payload}
        
        case NO_DATA:
            // console.log('Null Data from SampleReducer')
            return {...state,items: null}
        default:
          return state;
    }
}

