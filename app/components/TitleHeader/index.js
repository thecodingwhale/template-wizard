import React from 'react';
import cx from 'classnames';
import styles from './styles.css';

/**
* TitleHeader
*/
function TitleHeader( props ) {
    const className = cx( styles.base, {
        [ styles.h1 ]: props.type === 'h1'
    });

    if ( props.type === 'h1' ) {
        return (
            <h1 className={ className }>
                { props.children }
            </h1>
        );
    }

    if ( props.type === 'h2' ) {
        return (
            <h2 className={ className }>
                { props.children }
            </h2>
        );
    }

    if ( props.type === 'h3' ) {
        return (
            <h3 className={ className }>
                { props.children }
            </h3>
        );
    }

    if ( props.type === 'h4' ) {
        return (
            <h4 className={ className }>
                { props.children }
            </h4>
        );
    }

    if ( props.type === 'h5' ) {
        return (
            <h5 className={ className }>
                { props.children }
            </h5>
        );
    }

    if ( props.type === 'h6' ) {
        return (
            <h6 className={ className }>
                { props.children }
            </h6>
        );
    }
}

TitleHeader.propTypes = {
    type: React.PropTypes.string,
    children: React.PropTypes.node
};

TitleHeader.defaultProps = {
    type: 'h1',
    children: 'Header 1'
};

export default TitleHeader;
