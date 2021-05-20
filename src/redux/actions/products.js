import axios from 'axios';
import { GET_PRODUCTS, FILTER_PRODUCT, PRODUCTS_ERORR } from './types';
import setAuthToken from '../../utils/setAuthHeaders';

// Get Products
export const getProducts =
  (pageNumber = 1) =>
  async (dispatch) => {
    if (localStorage.access_token && localStorage.token_type) {
      setAuthToken(localStorage.access_token, localStorage.token_type);
    }

    try {
      const res = await axios.get(
        `http://dummy-api.d0.acom.cloud/api/products?page=${pageNumber}`
      );

      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCTS_ERORR,
      });
    }
  };

export const filterProducts =
  (formObject = null, filterQuery = null) =>
  async (dispatch) => {
    if (localStorage.access_token && localStorage.token_type) {
      setAuthToken(localStorage.access_token, localStorage.token_type);
    }

    let filterQueryString = '';

    if (formObject !== null) {
      const { dateFrom, dateTo, priceFrom, priceTo, title } = formObject;
      filterQueryString = `http://dummy-api.d0.acom.cloud/api/products?from=${dateFrom}&to=${dateTo}&price_from=${priceFrom}&price_to=${priceTo}&title=${title}`;
    } else if (filterQuery) {
      filterQueryString = filterQuery;
    }

    try {
      const res = await axios.get(filterQueryString);

      dispatch({
        type: FILTER_PRODUCT,
        payload: { items: res.data, filterQuery: filterQueryString },
      });
    } catch (error) {
      dispatch({
        type: PRODUCTS_ERORR,
      });
    }
  };
