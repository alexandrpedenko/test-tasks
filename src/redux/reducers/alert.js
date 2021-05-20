import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = {
  msg: null,
  alertType: null,
  id: null,
};

const alert = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return {
        ...state,
        ...payload,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        msg: null,
        alertType: null,
        id: null,
      };
    default:
      return state;
  }
};
export default alert;
