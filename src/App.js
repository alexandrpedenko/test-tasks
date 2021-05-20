import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { loadUser } from './redux/actions/auth';
import setAuthHeaders from './utils/setAuthHeaders';

import PrivateRoute from './components/PrivateRoute';
import LogIn from './components/LogIn';
import Navigation from './components/Navigation';
import Category from './components/Category';
import SingleProduct from './components/SingleProduct';

if (localStorage.access_token) {
  setAuthHeaders(localStorage.access_token, localStorage.token_type);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className='app'>
        <Router>
          <Navigation />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={LogIn} />
              <PrivateRoute path='/products/:page?' component={Category} />
              <PrivateRoute
                exact
                path='/product/:id'
                component={SingleProduct}
              />
              <Redirect to='/' />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
