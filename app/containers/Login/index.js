/*
 *
 * Login
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLogin from './selectors';
import styles from './styles.css';

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.login}>
      </div>
    );
  }
}

const mapStateToProps = selectLogin();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
