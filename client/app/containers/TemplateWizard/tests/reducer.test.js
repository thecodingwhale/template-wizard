import expect from 'expect';
import templateWizardReducer from '../reducer';
import { fromJS } from 'immutable';

describe( 'templateWizardReducer', () => {
    it( 'returns the initial state', () => {
        expect(
            templateWizardReducer( undefined, {})
        ).toEqual(
            fromJS({})
        );
    });
});
