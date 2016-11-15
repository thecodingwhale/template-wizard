/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_LOCALE
} from './constants';

const initialState = fromJS({
    locale: 'en'
});

/**
 * { reducer for language provider }
 *
 * @param      {state}  state   The current state or initialize a new one.
 * @param      {action}  action  action to dispatch
 * @return     {state}  { new state }
 */
function languageProviderReducer( state = initialState, action ) {
    switch ( action.type ) {
        case CHANGE_LOCALE:
            return state
        .set( 'locale', action.locale );
        default:
            return state;
    }
}

export default languageProviderReducer;
