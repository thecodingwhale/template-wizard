import React from 'react';
import styles from './styles.css';

/**
* ButtonGroup
*/
function ButtonGroup( props ) {
    return (
        <div className={ styles.base }>
            { props.children }
        </div>
    );
}

ButtonGroup.propTypes = {
    children: React.PropTypes.node
};

ButtonGroup.defaultProps = {
    children: ''
};

export default ButtonGroup;
