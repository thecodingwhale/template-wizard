import { fromJS } from 'immutable';
import {
    DEFAULT_ACTION,
    TEMPLATES_LOADED,
    NEW_TEMPLATE_ADDED
} from './constants';

const initialState = fromJS({
    templateWizard: {
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
        case TEMPLATES_LOADED:
            return state.setIn(
                [
                    'templateWizard',
                    'templates'
                ],
                fromJS(action.request.templates)
            );
        case NEW_TEMPLATE_ADDED:
            return state.withMutations(map =>
                map.updateIn([
                        'templateWizard',
                        'templates'
                    ],
                    templates => templates.push({
                        id: action.request.activeIndex + 1, // this should return from the backend
                        category: 'custom', // this should return from the backend
                        selected: 1,
                        options: action.request.options,
                        type: action.request.type
                    })
                )
            );
        default:
            return state;
    }
}

export default templateWizardReducer;
