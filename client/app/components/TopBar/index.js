import React from 'react';
import styles from './styles.css';
import TitleHeader from '../TitleHeader';

/**
* TopBar
*/
function TopBar( props ) {
    return (
        <div className={ styles.topBar }>
            <div className={ styles.title }>
                <TitleHeader
                    type="h4"
                    style={ {
                        margin: '0'
                    } }
                >
                    { props.title }
                </TitleHeader>
            </div>
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
