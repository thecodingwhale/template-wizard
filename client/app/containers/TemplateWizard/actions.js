import {
    DEFAULT_ACTION,
    LOAD_TEMPLATES,
    SAVE_TEMPLATE,
    SET_ACTIVE_TEMPLATE,
    OPEN_TEMPLATE_EDITOR,
    SELECT_OPTION,
    SELECT_TEMPLATE
} from './constants';

/**
 * defaultAction()
 */
export function defaultAction() {
    return {
        type: DEFAULT_ACTION
    };
}

/**
 * loadTemplates()
 */
export function loadTemplates() {
    return {
        type: LOAD_TEMPLATES
    };
}

/**
 * loadLayouts()
 */
export function saveTemplate(template) {
    return {
        payload: template,
        type: SAVE_TEMPLATE
    }
}

/**
 * setActiveTemplate()
 */

export function setActiveTemplate( templateId ) {
    return {
        payload: templateId,
        type: SET_ACTIVE_TEMPLATE
    }
}

export function openTemplateEditor() {
    return {
        type: OPEN_TEMPLATE_EDITOR
    }
}

export function selectOptionSetting( payload ) {
    return {
        type: SELECT_OPTION,
        payload
    }
}

export function selecteTemplateLayout( payload ) {
    return {
        type: SELECT_TEMPLATE,
        payload
    }
}