import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import products from './products';
import singleProduct from './singleProduct';

export default combineReducers({
  auth,
  alert,
  products,
  singleProduct,
});
