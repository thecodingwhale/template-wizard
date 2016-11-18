import { take, call, put, select } from 'redux-saga/effects';
import { fetchPayslipTemplate } from './api';

export function* loadLayouts() {
    const request = yield fetchPayslipTemplate();
    yield put({type: 'LAYOUTS_LOADED', request});
}

export function* loadTemplates() {
    const request = yield fetchPayslipTemplate();
    yield put({type: 'TEMPLATES_LOADED', request});
}

/**
* watchForLoadLayouts()
*/
export function* watchForLoadLayouts() {
    while(true) {
        yield take('LOAD_LAYOUTS');
        yield loadLayouts();
    }
}

/**
* watchForLoadTemplates()
*/
export function* watchForLoadTemplates() {
    while(true) {
        yield take('LOAD_TEMPLATES');
        yield loadTemplates();
    }
}

export default [
    watchForLoadLayouts,
    watchForLoadTemplates
];
