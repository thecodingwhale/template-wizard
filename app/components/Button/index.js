import React from 'react';
import styles from './styles.css';

/**
* Button
*/
function Button(props) {
  let buttonClass = 'button';
  if (props.type === 'primary') {
    buttonClass = 'buttonPrimary';
  }

  return (
    <button className={styles[buttonClass]} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: React.PropTypes.string,
  onClick: React.PropTypes.func,
  children: React.PropTypes.node,
};

Button.defaultProps = {
  type: 'default',
};

export default Button;
