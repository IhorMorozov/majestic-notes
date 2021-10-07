import React from 'react';
import NoteItem from '../NoteItem/NoteItem';

const NoteList = ({ notes, remove }) => {
  return (
    <div>
      {notes.map((note) => (
        <NoteItem note={note} key={note.id} remove={remove} />
      ))}
    </div>
  );
};

export default NoteList;
