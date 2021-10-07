import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import TodoForm from '../../components/TodoForm/TodoForm';
import Context from '../../context/context';
import TodoList from '../../components/TodoList/TodoList';
import styles from './TodosPage.module.scss';

const TodosPage = () => {
  const [todos, setTodos] = useState([
    { title: 'push the commit', id: Date.now(), completed: false },
  ]);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className={styles.wrapper}>
        <TodoForm createTodo={createTodo} />
        <Layout>
          {todos.length ? (
            <TodoList todos={todos} onToggle={toggleTodo} />
          ) : (
            <p>No todos!</p>
          )}
        </Layout>
      </div>
    </Context.Provider>
  );
};

export default TodosPage;
