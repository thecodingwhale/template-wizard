import React from 'react';
import cx from 'classnames';
import styles from './styles.css';

/**
* Button
*
  let button =
  <button
    className={className}
    href={props.href}
    onClick={props.onClick}
  >
    {props.children}
  </button>;

  if (props.handleRoute) {
    button =
      <button
      className={className}
      onClick={props.handleRoute}
    >
      {props.children}
    </button>;
  }
*/

function Button(props) {
  const className = cx(styles.base, {
    [styles.sizeSmall]: (props.size === 'small'),
    [styles.sizeLarge]: (props.size === 'large'),
    [styles.primary]: (props.type === 'primary'),
    [styles.primaryOutline]: (props.type === 'primary') && props.outline,
  });

  return (
    <button
      className={className}
      href
      handleRoute
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  size: React.PropTypes.string,
  outline: React.PropTypes.bool,
  type: React.PropTypes.string,
  onClick: React.PropTypes.func,
  children: React.PropTypes.node,
};

Button.defaultProps = {
  size: 'default',
  outline: false,
  type: 'default',
  children: 'Default Button',
};

export default Button;
