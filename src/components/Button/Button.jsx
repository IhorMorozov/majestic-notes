import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

const Button = ({ children, style, buttonHandler, ...props }) => {
  const buttonStyle = classNames(
    style ? classNames(style) : classNames(styles.button)
  );
  return (
    <button {...props} className={buttonStyle} onClick={buttonHandler}>
      {children}
    </button>
  );
};

export default Button;
