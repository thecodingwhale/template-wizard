import { take, put } from 'redux-saga/effects';
import {
    fetchPayslipTemplate,
    fetchPayslipLayout
} from './api';

/**
* loadLayouts()
*/
export function* loadLayouts() {
    const request = yield fetchPayslipLayout();
    yield put({
        type: 'LAYOUTS_LOADED',
        request
    });
}

/**
* watchForLoadLayouts()
*/
export function* watchForLoadLayouts() {
    while ( true ) { // eslint-disable-line no-constant-condition
        yield take( 'LOAD_LAYOUTS' );
        yield loadLayouts();
    }
}

/**
* loadTemplates()
*/
export function* loadTemplates() {
    const request = yield fetchPayslipTemplate();
    yield put({
        type: 'TEMPLATES_LOADED',
        request
    });
}

/**
* watchForLoadTemplates()
*/
export function* watchForLoadTemplates() {
    while ( true ) { // eslint-disable-line no-constant-condition
        yield take( 'LOAD_TEMPLATES' );
        yield loadTemplates();
    }
}

export default [
    watchForLoadLayouts,
    watchForLoadTemplates
];
