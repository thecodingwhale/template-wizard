import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { fromJS } from 'immutable';
import keydown from 'react-keydown';
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
        this.selectTemplate = this.selectTemplate.bind( this );
        this.updateLayout = this.updateLayout.bind( this );
        this.updateOptionSetting = this.updateOptionSetting.bind( this );
        this.saveTemplate = this.saveTemplate.bind( this );
        this.setActiveTemplate = this.setActiveTemplate.bind( this );
    }
    /**
    * componentDidMount()
    */
    componentDidMount() {
        this.props.loadTemplates();
    }
    /**
    * saveTemplate()
    */
    saveTemplate() {
        this.props.templateWizard.templates.map(template => {
            if (template.selected === 1) {
                this.props.saveTemplate({
                    activeIndex: template.id,
                    type: template.type,
                    options: template.options
                });
            }
        })
    }
    /**
    * setActiveTemplate()
    */
    setActiveTemplate( templateId ) {
        this.props.setActiveTemplate( templateId );
    }
    /**
    * updateLayout()
    */
    updateLayout( templateId ) {
        this.props.selecteTemplateLayout({
            templateId
        });
    }
    /**
    * selectTemplate()
    */
    selectTemplate( e ) {
        e.preventDefault();
        this.props.openTemplateEditor();
    }
    /**
    * selectOption()
    */
    updateOptionSetting( templateId, optionId, settingId ) {
        this.props.selectOptionSetting({
            templateId,
            optionId,
            settingId
        });
    }
    /**
    * renderTopBar()
    */
    renderTopBar() {
        // let title = <FormattedMessage { ...messages.header } />;
        const { isTemplateWizardOpen, isThereAnyCustomTemplates } = this.props.templateWizard;
        return (
            <div>
                <TopBar title="Template Wizard">
                    {isTemplateWizardOpen
                        ? ( <div>
                            <Button type="primary" size="large" outline>
                                PDF PREVIEW
                            </Button>
                            <Button
                                type="primary"
                                size="large"
                                onClick={() => { this.saveTemplate() }}
                            >
                                SAVE
                            </Button>
                        </div>
                        )
                        : null}
                    {isThereAnyCustomTemplates
                        ? (
                            <div>
                                <Button type="primary" size="large" onClick={ this.selectTemplate }>
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
        let options = [];
        let templateId;

        this.props.templateWizard.templates.map(template => {
            if ( template.selected == 1 ) {
                options = template.options;
                templateId = template.id
            }
        });

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
                                            <Button
                                                size="small"
                                                key={ index }
                                                type={ type }
                                                onClick={() => {
                                                    this.updateOptionSetting(templateId, option.id, setting.id)
                                                }}
                                            >
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
        const { templates } = this.props.templateWizard;

        return (
            <Sidebar
                title="Templates"
                position="right"
            >
                <div>
                    {templates.map( ( template, index ) => {
                        if (template.category !== 'default') return false;
                        return (
                            <a
                                key={ index }
                                href="#"
                                onClick={() => {
                                    this.updateLayout( template.id )
                                }}
                            >
                                <div className={ cx( styles.boxRightSidebar, {
                                    [ styles.boxRightSidebarSelected ]: template.selected
                                }) } />
                            </a>
                        );
                    })}
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
        let options = [];
        let layout;

        this.props.templateWizard.templates.map(template => {
            if ( template.selected == 1 ) {
                options = template.options;
                layout = template.type
            }
        });

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
                                layout={ layout }
                                options={ options }
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
        const { templates } = this.props.templateWizard;

        const selectedActiveTemplateStyle = {
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
        };
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
                                onClick={() => { this.setActiveTemplate(template.id) }}
                            >
                                <a href="#" >
                                    <div
                                        style={{
                                            position: 'relative'
                                        }}
                                        className={ styles.boxRightSidebar }
                                    >
                                        <div
                                            style={template.selected ? selectedActiveTemplateStyle : {}}
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
        } = this.props.templateWizard;

        return (
            <div className={ styles.templateWizard } onKeyPress={ this.handleKeyPress }>
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
)( keydown(TemplateWizard) );
