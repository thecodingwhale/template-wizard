import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import selectTemplateWizard from './selectors';
// import messages from './messages';
import styles from './styles.css';

import TopBar from '../../components/TopBar'; // eslint-disable-line no-multi-spaces
import ButtonGroup from '../../components/ButtonGroup'; // eslint-disable-line no-multi-spaces
import Button from '../../components/Button'; // eslint-disable-line no-multi-spaces
import Sidebar from  '../../components/Sidebar'; // eslint-disable-line no-multi-spaces
import TitleHeader from  '../../components/TitleHeader'; // eslint-disable-line no-multi-spaces

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
    * renderLeftSidebar()
    */
    renderLeftSidebar() {
        return (
            <Sidebar>
                <TitleHeader
                    bold
                    type="h4"
                >
                    Employee Details
                </TitleHeader>
                <ButtonGroup>
                    <Button type="primary">Employee Name</Button>
                    <Button type="primary">Employee ID</Button>
                    <Button type="primary">Gender</Button>
                    <Button type="primary">Photo</Button>
                    <Button>Birth Date</Button>
                    <Button>Mobile</Button>
                    <Button>Telephone</Button>
                    <Button>Email</Button>
                    <Button>Address</Button>
                    <Button>Zip</Button>
                </ButtonGroup>
            </Sidebar>
        );
    }
    /**
    * renderRightSidebar()
    */
    renderRightSidebar() {
        return (
            <Sidebar
                title="Templates"
                position="right"
            >

            </Sidebar>
        );
    }
    /**
    * renderTemplateEditor()
    */
    renderTemplateEditor() {
        return (
            <div>
                { this.renderTopBar() }
                { this.renderLeftSidebar() }
                { this.renderRightSidebar() }
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
                { this.renderTemplateEditor() }
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
