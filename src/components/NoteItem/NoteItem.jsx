import React from 'react';
import Button from '../Button/Button';
import styles from './NoteItem.module.scss';

const NoteItem = ({ note, remove }) => {
  return (
    <div className={styles.noteItem}>
      <div>
        <h2>{note.title}</h2>
        <p>{note.body}</p>
      </div>
      <div className={styles.noteButtons}>
        <Button>&#9998;</Button>
        <Button buttonHandler={() => remove(note)}>&times;</Button>
      </div>
    </div>
  );
};

export default NoteItem;
