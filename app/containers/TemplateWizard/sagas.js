import { takeEvery } from 'redux-saga';
import { take, put } from 'redux-saga/effects';

import {
    DEFAULT_ACTION,
    LOAD_TEMPLATES,
    TEMPLATES_LOADED,
    SAVE_TEMPLATE,
    NEW_TEMPLATE_ADDED,

} from './constants';
import {
    fetchPayslipTemplate,
    postRequestSaveTemplate
} from './api';

/**
* loadTemplates()
*/
export function* loadTemplates() {
    const request = yield fetchPayslipTemplate();
    yield put({
        type: TEMPLATES_LOADED,
        request
    });
}

/**
* watchForLoadTemplates()
*/
export function* watchForLoadTemplates() {
    while ( true ) { // eslint-disable-line no-constant-condition
        yield take( LOAD_TEMPLATES );
        yield loadTemplates();
    }
}

/**
* saveTemplate()
*/
export function* saveTemplate( template ) {
    const request = yield postRequestSaveTemplate( template.payload );
    yield put({
        type: NEW_TEMPLATE_ADDED,
        request: template.payload,
        payload: {
            template: {
                id: request.activeIndex,
                category: request.category,
                selected: request.selected,
                options: template.payload.options,
                type:template.payload.type
            }
        }
    });
}

/**
* watchForSaveTemplate()
*/
export function* watchForSaveTemplate() {
    while ( true ) { // eslint-disable-line no-constant-condition
        yield takeEvery( SAVE_TEMPLATE, saveTemplate);
    }
}

export default [
    watchForLoadTemplates,
    watchForSaveTemplate
];
