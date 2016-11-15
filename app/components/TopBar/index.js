import React from 'react';
import styles from './styles.css';

/**
* TopBar
*/
function TopBar( props ) {
    return (
        <div className={ styles.topBar }>
            <h1 className={ styles.title }>
                { props.title }
            </h1>
            <div className={ styles.rightContent }>
                { props.children }
            </div>
        </div>
    );
}

TopBar.propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.node
};

TopBar.defaultProps = {
    title: 'Default TopBar Title'
};

export default TopBar;
