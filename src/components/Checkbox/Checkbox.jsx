import React from 'react';
import styles from './Checkbox.module.scss';

const Checkbox = ({ onChange, isCompleted }) => {
  return (
    <input
      type="checkbox"
      className={styles.checkbox}
      onChange={onChange}
      checked={isCompleted}
    />
  );
};

export default Checkbox;
