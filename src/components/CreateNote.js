import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewNote } from "../redux/actions/notes.action";

const CreateNote = () => {
  const [note, setNote] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      note,
      id: Math.floor(Math.random() * 1000),
      date: new Date().toJSON().slice(0, 10),
      isImportant: false,
    };
    dispatch(addNewNote(newNote));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <textarea
            cols="3"
            className="form-control"
            placeholder="Write your note :)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
          <button className="btn btn-primary mt-3 mb-3" type="submit">
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNote;
