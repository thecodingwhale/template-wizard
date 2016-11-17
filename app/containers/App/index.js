/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import styles from './styles.css';

/**
 * Class for application.
 *
 * @class      App
 * Main application to run the salarium application
 */
export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

    static propTypes = {
        children: React.PropTypes.node
    };

    /**
     * { renders components into view }
     *
     * @return     {<type>}  { components to display }
     */
    render() {
        return (
            <div className={ styles.layout }>
                <div className={ styles.mainMenu }>

                </div>
                <div className={ styles.container }>
                    <div className={ styles.subMenu }>

                    </div>
                    <div className={ styles.content }>
                        {React.Children.toArray( this.props.children )}
                    </div>
                </div>
            </div>
        );
    }
}
