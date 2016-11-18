import {
    DEFAULT_ACTION
} from './constants';

/**
 * TemplateWizard actions
 */
export function defaultAction() {
    return {
        type: DEFAULT_ACTION
    };
}

export function loadLayouts() {
    return {
        type: 'LOAD_LAYOUTS'
    };
}

export function loadTemplates() {
    return {
        type: 'LOAD_TEMPLATES'
    };
}