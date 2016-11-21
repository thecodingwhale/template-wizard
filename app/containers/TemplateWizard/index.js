import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import selectTemplateWizard from './selectors';
import * as TemplateWizardActions from './actions';
// import messages from './messages';
import styles from './styles.css';
import {bindActionCreators} from 'redux';
import TopBar from '../../components/TopBar'; // eslint-disable-line no-multi-spaces
import ButtonGroup from '../../components/ButtonGroup'; // eslint-disable-line no-multi-spaces
import Button from '../../components/Button'; // eslint-disable-line no-multi-spaces
import Sidebar from  '../../components/Sidebar'; // eslint-disable-line no-multi-spaces
import TitleHeader from  '../../components/TitleHeader'; // eslint-disable-line no-multi-spaces
import Payslip from  '../../components/Payslip'; // eslint-disable-line no-multi-spaces

/**
 * TemplateWizard
 */
class TemplateWizard extends React.Component {
    /**
    * constructor()
    */
    constructor( props ) {
        super( props );
        this.state = {
            isTemplateWizardOpen: true,
            isLayoutOptionsOpen: false,
            layouts: [],
            templates: []
        };
    }
    /**
    * componentWillReceiveProps()
    */
    componentWillReceiveProps( nextProps ) {
        this.setState({
            templates: nextProps.templateWizard.templates,
            layouts: nextProps.templateWizard.layouts
        });
    }
    /**
    * componentDidMount()
    */
    componentDidMount() {
        this.props.loadTemplates();
    }
    /**
    * renderTopBar()
    */
    renderTopBar() {
        // let title = <FormattedMessage { ...messages.header } />;
        const { isTemplateWizardOpen } = this.state;
        return (
            <div>
                <TopBar title="Template Wizard">
                    {isTemplateWizardOpen
                        ? (
                            <div>
                                <Button type="primary" size="large" outline>
                                    PDF PREVIEW
                                </Button>
                                <Button type="primary" size="large">
                                    SAVE
                                </Button>
                            </div>
                        )
                        : null}
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
                <div>
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
                </div>
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
                <div
                    style={{
                        border: '1px solid #00A5E5',
                        boxShadow: '0px 10px 22px 0px rgba(0,0,0,0.12)'
                    }}
                    className={ styles.boxRightSidebar }
                />
                <div className={ styles.boxRightSidebar } />
                <div className={ styles.boxRightSidebar } />
            </Sidebar>
        );
    }
    /**
    * renderTemplateEditor()
    */
    renderTemplateEditor() {
        const paneStyle = {
            width: '20%',
            display: 'block',
            minHeight: '30px',
            boxSizing: 'border-box',
            float: 'left',
        };
        const mainStyle = {
            width: '60%',
            display: 'block',
            minHeight: '30px',
            boxSizing: 'border-box',
            float: 'left',
        }
        return (
            <div>
                { this.renderTopBar() }
                <div>
                    <div style={ paneStyle }>
                        { this.renderLeftSidebar() }
                    </div>
                    <div style={ mainStyle }>
                        <div style={{
                            paddingTop: '70px'
                        }}>
                            <Payslip />
                        </div>
                    </div>
                    <div style={ paneStyle }>
                        { this.renderRightSidebar() }
                    </div>
                </div>
            </div>
        );
    }
    /**
    * viewAvailableTemplateLayouts()
    */
    viewAvailableTemplateLayouts() {
        this.setState({
            isLayoutOptionsOpen: true
        });
        this.props.loadLayouts();
    }
    /**
    * selectTemplate()
    */
    selectTemplate(layout, e) {
        e.preventDefault();
        this.setState({
            isTemplateWizardOpen: true
        });
    }
    /**
    * renderCreateTemplate()
    */
    renderCreateTemplate() {
        const { isLayoutOptionsOpen, layouts } = this.state;
        if (isLayoutOptionsOpen) {
            return (
                <div>
                    { this.renderTopBar() }
                    <div>
                        <TitleHeader type="h2">
                            Templates
                        </TitleHeader>
                        <div>
                            {layouts.map((layout, index) => (
                                <div
                                    key={index}
                                    className={ styles.boxTemplate }
                                    onClick={this.selectTemplate.bind(this, layout)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <p>
                        Hooray! You can create your payslip here!
                    </p>
                    <Button
                        type="primary"
                        onClick={::this.viewAvailableTemplateLayouts}
                    >
                        Create
                    </Button>
                </div>
            )
        }

    }
    /**
    * render()
    */
    render() {
        const { isTemplateWizardOpen } = this.state;
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
                {isTemplateWizardOpen ? this.renderTemplateEditor() : this.renderCreateTemplate()}
            </div>
        );
    }
}

const mapStateToProps = selectTemplateWizard();

/**
* mapDispatchToProps()
*/
function mapDispatchToProps( dispatch ) {
    return bindActionCreators(TemplateWizardActions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)( TemplateWizard );
