//Create ActionCreator functions here
import axios from 'axios';
import * as types from './actionTypes';
  export const getDataRequest=()=>({
    type:types.GET_SHOES_DATA_REQUEST,
  })
  export const getDataSuccess=(payload)=>({
    type:types.GET_SHOES_DATA_SUCCESS,
    payload,
  }) 
  export const getDataFailure=()=>({
    type:types.GET_SHOES_DATA_FAILURE,
  })

  export const shoeData=(params)=>(dispatch)=>{
    dispatch(getDataRequest())
    axios.get('/shoes',params)
    .then(r=>dispatch(getDataSuccess(r.data)))
    .catch(e=>dispatch(getDataFailure()))
  }