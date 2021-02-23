import {
  UPDATE_GENRES,
  UPDATE_PREFERENCES,
  UPDATE_MOOD
} from '../actions/types'

const initialState = {
  genres: [],
  preferences: {},
  mood: [],
  loading: false
}

export default function (state = initialState, action) {
  switch(action.type){
    case UPDATE_GENRES:
      return {
        ...state,
        genres: [action.payload]
      };
    case UPDATE_PREFERENCES:
      return {
        ...state,
        preferences: [action.payload]
      };
    case UPDATE_MOOD:
      return {
        ...state,
        mood: [action.payload.emotion]
      }
    case MUSIC_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
    }
}