import {
  ADD_ENTRY,
  GET_ENTRY,
  GET_ENTRIES,
  DELETE_ENTRY,
  ENTRY_LOADING,
  SET_MOOD
} from '../actions/types';

const initialState = {
  entries: [],
  entry: {},
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type){
    case ADD_ENTRY:
      return {
        ...state,
        entries: [action.payload, ...state.posts]
      };
    case GET_ENTRY:
      return {
        ...state,
        entry: action.payload,
        loading: false
      };
    case GET_ENTRIES:
      return {
        ...state,
        entries: action.payload,
        loading: false
      }
    case DELETE_ENTRY:
      return {
        state,
        entries: state.entries.filter(entry => entry._id !== action.payload)
      };
    case ENTRY_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}