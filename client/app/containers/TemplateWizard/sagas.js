import { takeEvery } from 'redux-saga';
import { take, put } from 'redux-saga/effects';

import {
    DEFAULT_ACTION,
    LOAD_TEMPLATES,
    TEMPLATES_LOADED,
    SAVE_TEMPLATE,
    NEW_TEMPLATE_ADDED,
    SET_ACTIVE_TEMPLATE,
    NEW_ACTIVE_TEMPLATE,
    CUSTOM_TEMPLATES_ARE_AVAILABLE
} from './constants';
import {
    fetchPayslipTemplate,
    postRequestSaveTemplate,
    postSetActiveTemplate
} from './api';

/**
* loadTemplates()
*/
export function* loadTemplates() {
    const request = yield fetchPayslipTemplate();

    for (let template of request.templates) {
        if (template.category === 'custom') {
            yield put({
                type: CUSTOM_TEMPLATES_ARE_AVAILABLE
            });
        }
    }

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

/**
* setActiveTemplate()
*/
export function* setActiveTemplate( params ) {
    const request = yield postSetActiveTemplate( params );
    yield put({
        type: NEW_ACTIVE_TEMPLATE,
        payload: request.template
    });
}

/**
* watchForSaveTemplate()
*/
export function* watchForSetActiveTemplate() {
    while ( true ) { // eslint-disable-line no-constant-condition
        yield takeEvery( SET_ACTIVE_TEMPLATE, setActiveTemplate);
    }
}

export default [
    watchForLoadTemplates,
    watchForSaveTemplate,
    watchForSetActiveTemplate
];
