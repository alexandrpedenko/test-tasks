import React from 'react';
import { connect } from 'react-redux';

const Alert = ({ alert }) => {
  const error = alert.msg !== null &&
    !alert.msg.hasOwnProperty('email') &&
    !alert.msg.hasOwnProperty('password') && (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg.error === 'Unauthorized'
          ? 'Invalid Credentials'
          : 'Internal server error. Please try later'}
      </div>
    );

  return error;
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps)(Alert);
