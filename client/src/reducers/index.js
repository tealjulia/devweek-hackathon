import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import journalReducer from '././journalReducer';
import musicReducer from './musicReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  journal: journalReducer,
  music: musicReducer,
});
