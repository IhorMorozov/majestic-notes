import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.scss';

const TodoList = (props) => {
  return (
    <div>
      <ul className={styles.todoList}>
        {props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.id} onToggle={props.onToggle} />
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;
