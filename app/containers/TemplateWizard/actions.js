import {
    DEFAULT_ACTION,
    LOAD_TEMPLATES,
    SAVE_TEMPLATE,
    SET_ACTIVE_TEMPLATE
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