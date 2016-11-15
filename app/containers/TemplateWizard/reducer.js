import { fromJS } from 'immutable';
import {
    DEFAULT_ACTION
} from './constants';

const initialState = fromJS({
    templateWizard: {
        message: 'Hello World!'
    }
});

/**
 * TemplateWizard reducer
 */
function templateWizardReducer( state = initialState, action ) {
    switch ( action.type ) {
        case DEFAULT_ACTION:
            return state;
        default:
            return state;
    }
}

export default templateWizardReducer;
