import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import selectTemplateWizard from './selectors';
import * as TemplateWizardActions from './actions';
// import messages from './messages';
import styles from './styles.css';
import { bindActionCreators } from 'redux';
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
            isTemplateWizardOpen: false,
            isLayoutOptionsOpen: false,
            defaultLayout: 'two-column',
            options: [],
            layouts: [],
            templates: []
        };

        this.selectTemplate = this.selectTemplate.bind( this );
        this.viewAvailableTemplateLayouts = this.viewAvailableTemplateLayouts.bind( this );
        this.updateLayout = this.updateLayout.bind( this );
    }
    /**
    * componentDidMount()
    */
    componentDidMount() {
        this.props.loadTemplates();
    }
    /**
    * componentWillReceiveProps()
    */
    componentWillReceiveProps( nextProps ) {
        const { templates, layouts } = nextProps.templateWizard;
        let defaultLayout = [],
            options = [];

        layouts.map((layout, index) => {
            if (layout.selected) {
                defaultLayout = layout.value
                options = layout.options
            }
        })

        this.setState({
            defaultLayout,
            templates,
            options,
            layouts
        });

        console.log(options)
    }
    /**
    * updateLayout()
    */
    updateLayout( layout, options ) {
        this.setState({
            defaultLayout: layout,
            options: options
        });
    }
    /**
    * selectTemplate()
    */
    selectTemplate( e ) {
        e.preventDefault();
        this.setState({
            isTemplateWizardOpen: true
        });
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
    * renderTopBar()
    */
    renderTopBar() {
        // let title = <FormattedMessage { ...messages.header } />;
        const { isTemplateWizardOpen } = this.state;
        return (
            <div>
                <TopBar title="Template Wizard">
                    {isTemplateWizardOpen
                        ? ( <div>
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
        const { layouts, options } = this.state;

        return (
            <Sidebar>
                <div>
                    {options.map((option, index) => {
                        let settings = option.settings;
                        return (
                            <div key={ index }>
                                <TitleHeader
                                    bold
                                    type="h4"
                                >
                                    { option.name }
                                </TitleHeader>
                                <ButtonGroup>
                                    {settings.map((setting, index) => {
                                        let type = '';
                                        if (setting.selected) {
                                            type = "primary"
                                        }
                                        return (
                                            <Button key={ index } type={ type }>
                                                { setting.name }
                                            </Button>
                                        )
                                    })}
                                </ButtonGroup>
                            </div>
                        )
                    })}
                </div>
            </Sidebar>
        );
    }
    /**
    * renderRightSidebar()
    */
    renderRightSidebar() {
        const { layouts } = this.state;
        return (
            <Sidebar
                title="Templates"
                position="right"
            >
                <div>
                    {layouts.map( ( layout, index ) => (
                        <a key={ index } href="#" onClick={() => { this.updateLayout(layout.value, layout.options) }}>
                            <div className={ cx( styles.boxRightSidebar, {
                                [ styles.boxRightSidebarSelected ]: layout.selected
                            }) } />
                        </a>
                    ) )}
                </div>
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
            float: 'left'
        };
        const mainStyle = {
            width: '60%',
            display: 'block',
            minHeight: '30px',
            boxSizing: 'border-box',
            float: 'left'
        };
        return (
            <div>
                { this.renderTopBar() }
                <div>
                    <div style={ paneStyle }>
                        { this.renderLeftSidebar() }
                    </div>
                    <div style={ mainStyle }>
                        <div
                            style={ {
                                paddingTop: '50px',
                                paddingBottom: '50px',
                                height: 'calc(100vh - 183px)',
                                overflowY: 'scroll',
                                overflowX: 'hidden'
                            } }
                        >
                            <Payslip layout={ this.state.defaultLayout } />
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
    * renderCreateTemplate()
    */
    renderCreateTemplate() {
        const { isLayoutOptionsOpen, layouts } = this.state;
        if ( isLayoutOptionsOpen ) {
            return (
                <div>
                    { this.renderTopBar() }
                    <div>
                        <TitleHeader type="h2">
                            Templates
                        </TitleHeader>
                        <div>
                            {layouts.map( ( layout, index ) => (
                                <div // eslint-disable-line jsx-a11y/no-static-element-interactions
                                    key={ index }
                                    className={ styles.boxTemplate }
                                    onClick={ this.selectTemplate }
                                />
                            ) )}
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <p>
                    Hooray! You can create your payslip here!
                </p>
                <Button
                    type="primary"
                    onClick={ this.viewAvailableTemplateLayouts }
                >
                    Create
                </Button>
            </div>
        );
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

TemplateWizard.propTypes = {
    loadTemplates: React.PropTypes.func,
    loadLayouts: React.PropTypes.func
};

const mapStateToProps = selectTemplateWizard();

/**
* mapDispatchToProps()
*/
function mapDispatchToProps( dispatch ) {
    return bindActionCreators(
        TemplateWizardActions, dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)( TemplateWizard );
