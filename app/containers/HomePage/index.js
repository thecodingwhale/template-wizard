/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

/**
 * Class for home page.
 *
 * @class      HomePage (name)
 */
export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

    /**
     * { renders display to the view }
     *
     * @return     {<type>}  { components to render in homepage }
     */
    render() {
        return (
            <div>TEST</div>
        );
    }
}
