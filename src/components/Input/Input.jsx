import React from 'react';
import styles from './Input.module.scss';

const Input = ({ inputOption }, ...props) => {
  return (
    <input
      className={styles.input}
      key={inputOption.key}
      type={inputOption.type}
      placeholder={inputOption.placeholder}
      value={inputOption.value}
      onChange={(e) => inputOption.handler(e, inputOption.key)}
      {...props}
    />
  );
};

export default Input;
