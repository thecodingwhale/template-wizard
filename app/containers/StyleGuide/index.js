import React from 'react';
import Helmet from 'react-helmet';
import styles from './styles.css';
import Button from  '../../components/Button'; // eslint-disable-line no-multi-spaces
import TopBar from  '../../components/TopBar'; // eslint-disable-line no-multi-spaces

/**
* StyleGuide
*/
export default class StyleGuide extends React.Component {
    /**
    * renderTopBar()
    */
    renderTopBar() {
        return (
            <div>
                <div className={ styles.content }>
                    <h1 className={ styles.pageTitle }>
                        Top Bar
                    </h1>
                    <div className={ styles.section }>
                        <TopBar title="Template Wizard">
                            <Button type="primary" outline size="large">
                                PDF PREVIEW
                            </Button>
                            <Button type="primary" size="large">
                                SAVE
                            </Button>
                        </TopBar>
                    </div>
                </div>
            </div>
        );
    }
    /**
    * renderButtons()
    */
    renderButtons() {
        return (
            <div className={ styles.content }>
                <h1 className={ styles.pageTitle }>Buttons</h1>
                <div className={ styles.section }>
                    <p>
                        <Button />
                        <Button type="primary">Primary Button</Button>
                        <Button type="primary" outline>Outline Primary Button</Button>
                    </p>
                    <p>
                        <Button size="small" outline>Small Button</Button>
                        <Button type="primary">Default Button</Button>
                        <Button type="primary" size="large" outline />
                    </p>
                </div>
            </div>
        );
    }
    /**
    * renderButtonLists()
    */
    renderButtonLists() {
        return (
            <div className={ styles.content }>
                <h1 className={ styles.pageTitle }>Payslip Button Option Lists</h1>
                <div className={ styles.section }>
                    <div className={ styles.blockContent }>
                        <div className={ styles.optionTitle }>
                            Employee Details
                        </div>
                        <div className={ styles.buttonGroup }>
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
                        </div>
                    </div>
                    <div className={ styles.blockContent }>
                        <div className={ styles.optionTitle }>
                            Employee Details
                        </div>
                        <div className={ styles.buttonGroup }>
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    /**
    * render()
    */
    render() {
        return (
            <div className={ styles.styleGuide }>
                <Helmet
                    title="StyleGuide"
                    meta={ [
                    { name: 'description', content: 'Description of StyleGuide' }
                    ] }
                />
                { this.renderTopBar() }
                { this.renderButtons() }
                { this.renderButtonLists() }
            </div>
        );
    }
}
