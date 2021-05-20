import axios from 'axios';
import { GET_SINGLE_PRODUCT, SINGLE_PRODUCT_ERORR } from './types';
import setAuthToken from '../../utils/setAuthHeaders';

// Get Single Product
export const getSingleProduct = (productId) => async (dispatch) => {
  if (localStorage.access_token && localStorage.token_type) {
    setAuthToken(localStorage.access_token, localStorage.token_type);
  }

  try {
    const res = await axios.get(
      `http://dummy-api.d0.acom.cloud/api/products/${productId}`
    );

    dispatch({
      type: GET_SINGLE_PRODUCT,
      payload: res.data[0],
    });
  } catch (error) {
    dispatch({
      type: SINGLE_PRODUCT_ERORR,
    });
  }
};
