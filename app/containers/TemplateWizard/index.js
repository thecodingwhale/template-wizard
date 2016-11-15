import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectTemplateWizard from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

/**
 * TemplateWizard
 */
export class TemplateWizard extends React.Component {
    /**
    * render()
    */
    render() {
        return (
            <div className={ styles.templateWizard }>
                <Helmet
                    title="TemplateWizard"
                    meta={ [
                        {
                            name: 'description',
                            content: 'Description of TemplateWizard'
                        }
                    ] }
                />
                <FormattedMessage { ...messages.header } />
            </div>
        );
    }
}

const mapStateToProps = selectTemplateWizard();

/**
* mapDispatchToProps()
*/
function mapDispatchToProps( dispatch ) {
    return {
        dispatch
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)( TemplateWizard );
