import React from 'react';
import Input from '../Input/Input';
import styles from './Form.module.scss';

const Form = (props) => {
  const { inputOptions, buttonHandler, children } = props;
  return (
    <form onSubmit={buttonHandler}>
      {inputOptions.map((inputOption) => (
        <Input inputOption={inputOption} />
      ))}
      {children}
    </form>
  );
};

export default Form;
