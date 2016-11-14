import expect from 'expect';
import styleGuideReducer from '../reducer';
import { fromJS } from 'immutable';

describe('styleGuideReducer', () => {
  it('returns the initial state', () => {
    expect(styleGuideReducer(undefined, {})).toEqual(fromJS({}));
  });
});
