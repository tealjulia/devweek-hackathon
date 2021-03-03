import { SET_ERROR, SET_USER } from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

export const logoutUser = () => (dispatch) => {
  //Remove token from ls
  localStorage.removeItem('jwtToken');
  //Remove token from axios header
  setAuthToken(false);
  //Reset user in the redux store
  dispatch({
    type: SET_USER,
    payload: {},
  });
};