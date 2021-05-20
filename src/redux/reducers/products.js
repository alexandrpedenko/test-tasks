import { GET_PRODUCTS, FILTER_PRODUCT, PRODUCTS_ERORR } from '../actions/types';

const initialState = {
  filter_query: null,
  current_page: null,
  data: [],
  first_page_url: null,
  from: null,
  last_page: null,
  last_page_url: null,
  links: [],
  next_page_url: null,
  path: null,
  per_page: null,
  prev_page_url: null,
  to: null,
  total: null,
  loading: true,
};

const products = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      localStorage.removeItem('filter_query');
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case FILTER_PRODUCT:
      localStorage.setItem('filter_query', payload.filterQuery);
      return {
        ...state,
        ...payload.items,
        filter_query: payload.filterQuery,
        loading: false,
      };
    case PRODUCTS_ERORR:
      localStorage.removeItem('filter_query');
      return {
        ...state,
        filter_query: null,
        current_page: null,
        data: [],
        first_page_url: null,
        from: null,
        last_page: null,
        last_page_url: null,
        links: [],
        next_page_url: null,
        path: null,
        per_page: null,
        prev_page_url: null,
        to: null,
        total: null,
        loading: false,
      };

    default:
      return state;
  }
};
export default products;
