/*
 *
 * Login
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLogin from './selectors';
import styles from './styles.css';

/**
 * Class for login.
 *
 * @class      Login (name)
 */
export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function

    /**
     * { components to render }
     *
     * @return     {component(s)}  { components to render }
     */
    render() {
        return (
            <div className={ styles.login }>
            </div>
        );
    }
}

const mapStateToProps = selectLogin();

/**
 * { dispatch to props }
 *
 * @param      {action}  dispatch  action to dispatch
 * @return     {Object}  { return action to dispatch }
 */
function mapDispatchToProps( dispatch ) {
    return {
        dispatch
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( Login );
