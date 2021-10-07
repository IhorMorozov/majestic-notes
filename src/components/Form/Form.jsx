import React from 'react';
import Input from '../Input/Input';
import styles from './Form.module.scss';

const Form = (props) => {
  const { inputOptions, buttonHandler } = props;
  return (
    <form className={styles.form} onSubmit={buttonHandler}>
      {inputOptions.map((inputOption) => (
        <Input inputOption={inputOption} />
      ))}
    </form>
  );
};

export default Form;
