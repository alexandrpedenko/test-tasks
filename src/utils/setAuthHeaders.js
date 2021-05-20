import axios from 'axios';

const setAuthHeaders = (token, tokentype) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `${tokentype} ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthHeaders;
