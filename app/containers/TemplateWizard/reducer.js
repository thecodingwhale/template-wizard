import { fromJS } from 'immutable';
import {
    DEFAULT_ACTION
} from './constants';

const initialState = fromJS({
    templateWizard: {
        layouts: [],
        templates: []
    }
});

/**
 * TemplateWizard reducer
 */
function templateWizardReducer( state = initialState, action ) {
    switch ( action.type ) {
        case DEFAULT_ACTION:
            return state;
        case 'LAYOUTS_LOADED':
            return state.setIn(
                [
                    'templateWizard',
                    'layouts'
                ],
                action.request.layouts
            );
        case 'TEMPLATES_LOADED':
            return state.setIn(
                [
                    'templateWizard',
                    'templates'
                ],
                action.request.templates
            );
        default:
            return state;
    }
}

export default templateWizardReducer;
