import { fromJS } from 'immutable';
import {
    DEFAULT_ACTION,
    TEMPLATES_LOADED,
    NEW_TEMPLATE_ADDED,
    NEW_ACTIVE_TEMPLATE,
    CUSTOM_TEMPLATES_ARE_AVAILABLE,
    OPEN_TEMPLATE_EDITOR,
    SELECT_OPTION,
    SELECT_TEMPLATE
} from './constants';

const initialState = fromJS({
    templateWizard: {
        activeIndex: '',
        isTemplateWizardOpen: false,
        isThereAnyCustomTemplates: false,
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
        case SELECT_TEMPLATE:
            return state.withMutations(map => {
                let indexOfCurrentActiveToUpdate = map.getIn(['templateWizard','templates']).findIndex(template => {
                    return template.get('selected') === 1;
                });
                let indexOfNewActiveTemplateToUpdate = map.getIn(['templateWizard','templates']).findIndex(template => {
                    return template.get('id') === action.payload.templateId;
                });
                map.setIn(['templateWizard', 'templates', indexOfCurrentActiveToUpdate, 'selected'], 0)
                map.setIn(['templateWizard', 'templates', indexOfNewActiveTemplateToUpdate, 'selected'], 1)
                return map
            });
        case SELECT_OPTION:
            return state.withMutations(map => {
                const indexOfTemplate = map.getIn(['templateWizard','templates']).findIndex(template => {
                    return template.get('id') === action.payload.templateId;
                });
                const indexOfTemplateOption = map.getIn(['templateWizard','templates', indexOfTemplate, 'options']).findIndex(option => {
                    return option.get('id') === action.payload.optionId;
                });
                const indexOfTemplateOptionSetting = map.getIn(['templateWizard','templates', indexOfTemplate, 'options', indexOfTemplateOption, 'settings']).findIndex(setting => {
                    return setting.get('id') === action.payload.settingId;
                });
                const selected = map.getIn(['templateWizard','templates', indexOfTemplate, 'options', indexOfTemplateOption, 'settings', indexOfTemplateOptionSetting, 'selected'])
                map.setIn(['templateWizard','templates', indexOfTemplate, 'options', indexOfTemplateOption, 'settings', indexOfTemplateOptionSetting, 'selected'], !selected)
                return map
            });
        case OPEN_TEMPLATE_EDITOR:
            return state.withMutations(map => {
                map.setIn(['templateWizard', 'isTemplateWizardOpen'], true);
                map.setIn(['templateWizard', 'isThereAnyCustomTemplates' ], false);
                return map
            });
        case CUSTOM_TEMPLATES_ARE_AVAILABLE:
            return state.withMutations(map => {
                map.setIn(['templateWizard', 'isThereAnyCustomTemplates' ], true);
                map.setIn(['templateWizard', 'isTemplateWizardOpen'], false);
                return map
            });
        case TEMPLATES_LOADED:
            return state.withMutations(map => {
                map.setIn(
                    [
                        'templateWizard',
                        'templates'
                    ],
                    fromJS(action.request.templates)
                );
                return map
            });

        case NEW_TEMPLATE_ADDED:
            return state.withMutations(map => {
                const indexOfTemplateToUpdate = map.getIn(['templateWizard','templates']).findIndex(template => {
                    return template.get('selected') === 1;
                });
                map.setIn(['templateWizard','isThereAnyCustomTemplates'], true);
                map.setIn(['templateWizard','isTemplateWizardOpen'], false);
                map.setIn(['templateWizard', 'templates', indexOfTemplateToUpdate, 'selected'], 0)
                map.updateIn(['templateWizard','templates'], templates => templates.push({
                    id: action.payload.template.id,
                    category: action.payload.template.category,
                    selected: action.payload.template.selected,
                    options: action.payload.template.options,
                    type: action.payload.template.type
                }))
                return map
            });
        case NEW_ACTIVE_TEMPLATE:
            return state.withMutations(map => {
                const indexOfCurrentActiveToUpdate = map.getIn(['templateWizard','templates']).findIndex(template => {
                    return template.get('selected') === 1;
                });
                const indexOfNewActiveTemplateToUpdate = map.getIn(['templateWizard','templates']).findIndex(template => {
                    return template.get('id') === action.payload.id;
                });
                map.setIn(['templateWizard', 'templates', indexOfCurrentActiveToUpdate, 'selected'], 0)
                map.setIn(['templateWizard', 'templates', indexOfNewActiveTemplateToUpdate, 'selected'], 1)
                return map
            });
        default:
            return state;
    }
}

export default templateWizardReducer;
