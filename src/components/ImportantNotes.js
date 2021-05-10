import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";

const ImportantNotes = () => {
  const notes = useSelector((state) => state.noteReducer.notes);

  return (
    <div className="importantNotes m-3">
      <h3>All Important Notes</h3>
      <div className="row">
        {notes
          .filter((note) => note.isImportant === true)
          .map((note) => (
            <Note note={note} key={note.id} />
          ))}
      </div>
    </div>
  );
};

export default ImportantNotes;
