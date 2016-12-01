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
            return state.withMutations(map => {
                const indexOfTemplateToUpdate = map.getIn(['templateWizard','templates']).findIndex(template => {
                    return template.get('selected') === 1;
                });
                map.setIn(['templateWizard', 'templates', indexOfTemplateToUpdate, 'selected'], false)
                map.updateIn(['templateWizard','templates'], templates => templates.push({
                    id: action.payload.template.id,
                    category: action.payload.template.category,
                    selected: action.payload.template.selected,
                    options: action.payload.template.options,
                    type: action.payload.template.type
                }))
                return map
            });
        default:
            return state;
    }
}

export default templateWizardReducer;
