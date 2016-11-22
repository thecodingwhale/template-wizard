import {
    DEFAULT_ACTION
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
        type: 'LOAD_TEMPLATES'
    };
}

/**
 * loadLayouts()
 */
export function loadLayouts() {
    return {
        type: 'LOAD_LAYOUTS'
    };
}
