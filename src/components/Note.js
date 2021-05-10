import React from "react";
import { useDispatch } from "react-redux";
import { toogleNote } from "../redux/actions/notes.action";

const Note = ({ note }) => {
  const dispatch = useDispatch();

  return (
    <div className="card m-3">
      <div className="card-header">{note.date}</div>
      <div className="card-body">{note.note}</div>
      <button className="btn" onClick={() => dispatch(toogleNote(note.id))}>
        {note.isImportant ? "Remove from Important" : "Add to important"}
      </button>
    </div>
  );
};

export default Note;
