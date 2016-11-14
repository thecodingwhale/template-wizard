/*
 *
 * LanguageProvider actions
 *
 */

import {
    CHANGE_LOCALE
} from './constants';

/**
 * { fetch and changes locale of contents }
 *
 * @param      {<type>}  languageLocale  The language locale
 * @return     {Object}  { return new locale }
 */
export function changeLocale( languageLocale ) {
    return {
        type: CHANGE_LOCALE,
        locale: languageLocale
    };
}
