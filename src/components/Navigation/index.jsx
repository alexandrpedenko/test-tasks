import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import './index.sass';

const Navigation = ({ auth, logout }) => {
  const { isAuthenticated, loading } = auth;

  const notAuthLinks = (
    <NavLink exact to='/'>
      LogIn
    </NavLink>
  );

  const isAuthLinks = (
    <Fragment>
      <NavLink exact to='/products'>
        Products
      </NavLink>
      <button className='logout-btn' onClick={logout}>
        Logout
      </button>
    </Fragment>
  );

  return (
    <div className='app-nav'>
      <div className='container'>
        <nav className='app-nav-menu'>
          {!loading && (
            <Fragment>{isAuthenticated ? isAuthLinks : notAuthLinks}</Fragment>
          )}
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navigation);
