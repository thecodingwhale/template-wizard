/*
 *
 * Login actions
 *
 */

import {
  DEFAULT_ACTION
} from './constants';

/**
 * { return action to dispatch }
 *
 * @return     {Object}  { action to dispatch }
 */
export function defaultAction() {
    return {
        type: DEFAULT_ACTION
    };
}
