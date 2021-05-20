import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  REFRESH_SUCCESS,
  LOGIN_ERROR,
  REFRESH_ERROR,
  LOGOUT,
  LOGOUT_ERROR,
} from '../actions/types';

const initialState = {
  access_token: localStorage.getItem('access_token'),
  token_type: null,
  expires_in: null,
  isAuthenticated: null,
  loading: true,
  user: null,
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
    case REFRESH_SUCCESS:
      localStorage.setItem('access_token', payload.access_token);
      localStorage.setItem('token_type', payload.token_type);
      localStorage.setItem('expires_in', payload.expires_in);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_ERROR:
    case LOGIN_ERROR:
    case REFRESH_ERROR:
    case LOGOUT:
    case LOGOUT_ERROR:
      localStorage.removeItem('access_token');
      localStorage.removeItem('token_type');
      localStorage.removeItem('expires_in');
      return {
        ...state,
        access_token: null,
        token_type: null,
        expires_in: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    default:
      return state;
  }
};

export default auth;
