import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import NoteList from '../../components/NoteList/NoteList';
import NoteForm from '../../components/NoteForm/NoteForm';
import Modal from '../../components/Modal/Modal';
import styles from './NotesPage.module.scss';

const NotesPage = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'First Car', body: 'Renault Megane is the best choice!' },
  ]);
  const [modal, setModal] = useState(false);

  const createNote = (newNote) => {
    setNotes([...notes, newNote]);
    setModal(false);
  };
  const removeNote = (note) => {
    setNotes(notes.filter((n) => n.id !== note.id));
  };

  return (
    <div>
      <Layout>
        <Button buttonHandler={() => setModal(true)}>&#43;</Button>
        <Modal visible={modal} setVisible={setModal}>
          <NoteForm createNote={createNote} />
        </Modal>
        <NoteList notes={notes} remove={removeNote} />
      </Layout>
    </div>
  );
};

export default NotesPage;
