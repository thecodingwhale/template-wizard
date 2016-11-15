import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import selectTemplateWizard from './selectors';
// import messages from './messages';
import styles from './styles.css';

import TopBar from '../../components/TopBar';
import Button from '../../components/Button';

/**
 * TemplateWizard
 */
class TemplateWizard extends React.Component {
    /**
    * renderTopBar()
    */
    renderTopBar() {
        // let title = <FormattedMessage { ...messages.header } />;
        return (
            <div>
                <TopBar title="Template Wizard">
                    <Button type="primary" size="large" outline>PDF PREVIEW</Button>
                    <Button type="primary" size="large">SAVE</Button>
                </TopBar>
            </div>
        );
    }
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
                { this.renderTopBar() }
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
