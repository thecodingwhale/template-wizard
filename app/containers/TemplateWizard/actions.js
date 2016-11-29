import {
    DEFAULT_ACTION,
    LOAD_TEMPLATES,
    SAVE_TEMPLATE
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
