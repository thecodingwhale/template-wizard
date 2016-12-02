import { createSelector } from 'reselect';

/**
 * Direct selector to the templateWizard state domain
 */
const selectTemplateWizardDomain = () => ( state ) => state.get( 'templateWizard' );

/**
 * Default selector used by TemplateWizard
 */
const selectTemplateWizard = () => createSelector(
    selectTemplateWizardDomain(),
    ( substate ) => substate.toJS()
);

export default selectTemplateWizard;

export {
    selectTemplateWizardDomain
};
