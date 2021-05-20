import axios from 'axios';
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REFRESH_SUCCESS,
  REFRESH_ERROR,
  LOGOUT,
  LOGOUT_ERROR,
} from './types';
import { setAlert } from './alert';
import setAuthHeaders from '../../utils/setAuthHeaders';

export const refreshToken = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        Authorization: `${localStorage.token_type} ${localStorage.access_token}`,
      },
    };

    const res = await axios.post(
      'http://dummy-api.d0.acom.cloud/api/auth/refresh',
      {},
      config
    );

    dispatch({
      type: REFRESH_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REFRESH_ERROR,
    });
  }
};

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.access_token && localStorage.token_type) {
    setAuthHeaders(localStorage.access_token, localStorage.token_type);
  }

  try {
    const res = await axios.get(
      'http://dummy-api.d0.acom.cloud/api/auth/user-profile'
    );

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Login user
export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post(
      `http://dummy-api.d0.acom.cloud/api/auth/login?email=${email}&password=${password}`
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    setInterval(() => {
      dispatch(refreshToken());
    }, (localStorage.expires_in / 10) * 1000);
  } catch (error) {
    const errors = error.response.data;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }

    dispatch({
      type: LOGIN_ERROR,
    });
  }
};

// LogOut
export const logout = () => async (dispatch) => {
  try {
    await axios.post(`http://dummy-api.d0.acom.cloud/api/auth/logout`);

    dispatch({ type: LOGOUT });
  } catch (error) {
    dispatch({
      type: LOGOUT_ERROR,
    });
  }
};
