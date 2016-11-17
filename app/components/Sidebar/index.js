import React from 'react';
import cx from 'classnames';
import styles from './styles.css';
import TitleHeader from '../TitleHeader';

/**
* renderTitleBar
*/
function renderTitleBar( title ) {
    return ( title !== '' ) ? <div className={ styles.title }>
        <TitleHeader
            type="h4"
            style={ {
                margin: '0',
                color: '#FAFAFA'
            } }
        >
            { title }
        </TitleHeader>
    </div> : '';
}

/**
* Sidebar
*/
function Sidebar( props ) {
    const className = cx( styles.sidebar, {
        [ styles.sidebarRight ]: props.position === 'right'
    });

    return (
        <div className={ className }>
            { renderTitleBar( props.title ) }
            <div className={ styles.content }>
                { props.children }
            </div>
        </div>
    );
}

Sidebar.propTypes = {
    title: React.PropTypes.string,
    position: React.PropTypes.string,
    children: React.PropTypes.node
};

Sidebar.defaultProps = {
    position: 'left',
    title: '',
    children: ''
};

export default Sidebar;
