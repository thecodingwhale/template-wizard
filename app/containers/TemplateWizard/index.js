import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { fromJS } from 'immutable';
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
            isThereAnyCustomTemplates: false,
            defaultLayout: '',
            options: [],
            templates: []
        };

        this.selectTemplate = this.selectTemplate.bind( this );
        this.updateLayout = this.updateLayout.bind( this );
        this.updateOptionSetting = this.updateOptionSetting.bind( this );
    }
    /**
    * componentDidMount()
    */
    componentDidMount() {
        this.props.loadTemplates();
        // this.props.loadLayouts();
    }
    /**
    * componentWillReceiveProps()
    */
    componentWillReceiveProps( nextProps ) {

        const { templates } = nextProps.templateWizard;
        let isThereAnyCustomTemplates = false,
            defaultLayout = [],
            options = [];

        templates.map((template, index) => {
            if (template.type == 'custom') {
                isThereAnyCustomTemplates = true;
            }
            if (template.selected) {
                defaultLayout = template.value
                options = template.options
            }
        });

        this.setState({
            defaultLayout,
            isThereAnyCustomTemplates,
            templates,
            options
        });
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
    * selectOption()
    */
    updateOptionSetting( options, optionId, settingId ) {
        options[optionId - 1].settings[settingId - 1].selected = !options[optionId - 1].settings[settingId - 1].selected;
        this.setState({
            options: options
        });
    }
    /**
    * renderTopBar()
    */
    renderTopBar() {
        // let title = <FormattedMessage { ...messages.header } />;
        const { isTemplateWizardOpen, isThereAnyCustomTemplates } = this.state;
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
                    {isThereAnyCustomTemplates
                        ? (
                            <div>
                                <Button type="primary" size="large">
                                    CREATE NEW TEMPLATE
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
        const { templates, options } = this.state;

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
                                            <Button size="small" key={ index } type={ type } onClick={() => { this.updateOptionSetting(options, option.id, setting.id) }}>
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
        const { templates, defaultLayout } = this.state;
        return (
            <Sidebar
                title="Templates"
                position="right"
            >
                <div>
                    {templates.map( ( template, index ) => (
                        <a key={ index } href="#" onClick={() => { this.updateLayout(template.value, template.options) }}>
                            <div className={ cx( styles.boxRightSidebar, {
                                [ styles.boxRightSidebarSelected ]: template.value === defaultLayout
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
                            <Payslip
                                layout={ this.state.defaultLayout }
                                options={ this.state.options }
                            />
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
        return (
            <div>
                <p>
                    Hooray! You can create your payslip here!
                </p>
                <Button
                    type="primary"
                    onClick={ this.selectTemplate }
                >
                    Create
                </Button>
            </div>
        );
    }
    viewTemplates() {
        const { templates, defaultLayout } = this.state;
        return (
            <div>
                { this.renderTopBar() }
                <div
                    style={{
                        padding: '15px 20px'
                    }}
                >
                    <TitleHeader type="h3">
                        Your Payslip Templates
                    </TitleHeader>
                </div>
                <div
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}
                >
                    {templates.map((template, index) => {
                        return (
                            <div
                                style={{
                                    width: '25%',
                                    float: 'left'
                                }}
                                key={ index }
                            >
                                <a href="#" >
                                    <div
                                        style={{
                                            position: 'relative'
                                        }}
                                        className={ styles.boxRightSidebar }
                                    >
                                        <div
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                                backgroundColor: '#00A5E5',
                                                position: 'absolute',
                                                left: '50%',
                                                marginLeft: '-20px',
                                                top: '-20px',
                                                zIndex: '1',
                                                borderRadius: '50%',
                                                boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.12)'
                                            }}
                                        >

                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
    /**
    * render()
    */
    render() {
        const { isTemplateWizardOpen,
            isThereAnyCustomTemplates
        } = this.state;

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
                {isTemplateWizardOpen ? this.renderTemplateEditor() : isThereAnyCustomTemplates ? this.viewTemplates() : this.renderCreateTemplate()}
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
