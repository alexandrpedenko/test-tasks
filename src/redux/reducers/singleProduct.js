import { GET_SINGLE_PRODUCT, SINGLE_PRODUCT_ERORR } from '../actions/types';

const initialState = {
  id: null,
  title: null,
  body: null,
  price: null,
  thumbnail: null,
  created_at: null,
  updated_at: null,
  loading: true,
};

const singleProduct = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SINGLE_PRODUCT:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case SINGLE_PRODUCT_ERORR:
      return {
        ...state,
        id: null,
        title: null,
        body: null,
        price: null,
        thumbnail: null,
        created_at: null,
        updated_at: null,
        loading: false,
      };

    default:
      return state;
  }
};
export default singleProduct;
