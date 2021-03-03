import axios from 'axios';

import {
  ADD_ENTRY,
  GET_ENTRY,
  GET_ENTRIES,
  DELETE_ENTRY,
  ENTRY_LOADING,
  UPDATE_MOOD
} from './types';

//add entry
export const addEntry = (entryData) => {
  dispatch(clearErrors());
  
  axios
    .post('/api/entries/', entryData)
    .then((res) => 
      dispatch({
        type: ADD_ENTRY,
        payload: res.data
      }),
      dispatch({
        type: UPDATE_MOOD,
        payload: res.data
      })
    )
    .catch((err) => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
}
//get entry by id

//get entries
export const getUserEntries = () => (dispatch) => {
  dispatch(setEntryLoading());
  axios
    .get('/api/entries/all')
}
//delete entry by id

// Set loading state
export const setEntryLoading = () => {
  return {
    type: POST_LOADING,
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

