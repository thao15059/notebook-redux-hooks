import React from "react";
import Note from "./Note";

import { useSelector } from "react-redux";

const AllNotes = () => {
  const notes = useSelector((state) => state.noteReducer.notes);

  return (
    <div className="m-3">
      <h3>All Notes</h3>
      <div className="row">
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default AllNotes;
