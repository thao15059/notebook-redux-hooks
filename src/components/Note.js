import React from "react";
import { useDispatch } from "react-redux";
import { toogleNote, deleteNote } from "../redux/actions/notes.action";

const Note = ({ note }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={
        note.isImportant ? "border-info card mt-3 mb-3" : "card mt-3 mb-3"
      }
    >
      <div className="card-header">{note.date}</div>
      <div className="card-body">
        <p className="card-text">{note.note}</p>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(toogleNote(note.id))}
        >
          {note.isImportant ? "Remove from Important" : "Add to important"}
        </button>
        <button
          className="btn btn-danger ml-3"
          onClick={() => dispatch(deleteNote(note.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
