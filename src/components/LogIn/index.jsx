import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth';
import Alert from '../Alert/Alert';
import './index.sass';

const LogIn = ({ login, isAuthenticated, errorMsgs }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    login(email, password);
  };

  // Check if LogIn
  if (isAuthenticated) {
    return <Redirect to='/products' />;
  }

  return (
    <div className='app-login'>
      <h1 className='app-login__title'>Sign In</h1>
      <Alert />
      <form className='app-login__form' onSubmit={(e) => onSubmit(e)}>
        <div className='app-login__form-group'>
          {errorMsgs && errorMsgs.email && (
            <div className='alert alert-danger'>
              {errorMsgs.email.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          )}
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='app-login__form-group'>
          {errorMsgs && errorMsgs.password && (
            <div className='alert alert-danger'>
              {errorMsgs.password.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          )}
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type='submit' className='btn' value='Login' />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  errorMsgs: state.alert.msg,
});

export default connect(mapStateToProps, { login })(LogIn);
