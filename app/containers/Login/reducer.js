/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION
} from './constants';

const initialState = fromJS({});

/**
 * { reducer for login component }
 *
 * @param      {state}  state   The current state of initialize a new one
 * @param      {action}  action  The action to dispatch
 * @return     {state}  { return new state }
 */
function loginReducer( state = initialState, action ) {
    switch ( action.type ) {
        case DEFAULT_ACTION:
            return state;
        default:
            return state;
    }
}

export default loginReducer;
