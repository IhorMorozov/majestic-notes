import React, { useContext } from 'react';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import classNames from 'classnames';
import Context from '../../context/context';
import styles from './TodoItem.module.scss';

const TodoItem = ({ todo, onToggle }) => {
  const { removeTodo } = useContext(Context);
  const onChange = () => {
    onToggle(todo.id);
  };
  const isCompleted = classNames(
    todo.completed ? classNames(styles.done) : classNames(styles.none),
    classNames(styles.center)
  );
  return (
    <div>
      <li className={styles.todoItem}>
        <div className={isCompleted}>
          <Checkbox onChange={onChange} isCompleted={todo.completed} />
          {todo.title}
        </div>
        <Button buttonHandler={() => removeTodo(todo.id)}>&times;</Button>
      </li>
      <hr />
    </div>
  );
};

export default TodoItem;
