import React, { Fragment, useState } from 'react';
import Form from '../Form/Form';
import styles from './TodoForm.module.scss';
import Layout from '../Layout/Layout';

const TodoForm = ({ createTodo }) => {
  const [todo, setTodo] = useState({ title: '' });

  const addTodo = (event) => {
    event.preventDefault();
    createTodo({ ...todo, id: Date.now(), completed: false });
    setTodo({ title: '' });
  };

  const onChangeTodoInput = (e) => {
    setTodo({ title: e.target.value });
  };
  const inputOptions = [
    {
      type: 'text',
      placeholder: 'Create todo',
      value: todo.title,
      key: 'todo',
      handler: onChangeTodoInput,
    },
  ];
  return (
    <div className={styles.todoFormLayout}>
      <Form inputOptions={inputOptions} buttonHandler={addTodo}></Form>
    </div>
  );
};

export default TodoForm;
