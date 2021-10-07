import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './NoteForm.module.scss';
import Form from '../Form/Form';
import Layout from '../Layout/Layout';

const NoteForm = ({ createNote }) => {
  const [note, setNote] = useState({
    title: '',
    body: '',
  });

  const addNewNote = (e) => {
    e.preventDefault();
    createNote({ ...note, id: Date.now() });
    setNote({
      title: '',
      body: '',
    });
  };

  const onChangeNoteInput = (e, option) => {
    setNote({
      ...note,
      [`${option}`]: e.target.value,
    });
  };
  const inputOptions = [
    {
      type: 'text',
      placeholder: 'Title...',
      value: note.title,
      key: 'title',
      handler: onChangeNoteInput,
    },
    {
      type: 'text',
      placeholder: 'Note...',
      value: note.body,
      key: 'body',
      handler: onChangeNoteInput,
    },
  ];

  return (
    <Layout>
      <Form buttonHandler={addNewNote} inputOptions={inputOptions}>
        <Button buttonHandler={addNewNote}>&#43;</Button>
      </Form>
    </Layout>
  );
};

export default NoteForm;
