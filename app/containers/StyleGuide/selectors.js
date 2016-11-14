import { createSelector } from 'reselect';

/**
 * Direct selector to the styleGuide state domain
 */
const selectStyleGuideDomain = () => (state) => state.get('styleGuide');

/**
 * Other specific selectors
 */


/**
 * Default selector used by StyleGuide
 */

const selectStyleGuide = () => createSelector(
  selectStyleGuideDomain(),
  (substate) => substate.toJS()
);

export default selectStyleGuide;
export {
  selectStyleGuideDomain,
};
