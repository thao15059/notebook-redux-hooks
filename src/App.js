import React, { useEffect } from "react";
import { useSelector, useStore, useDispatch } from "react-redux";
import AllNotes from "./components/AllNotes";
import CreateNote from "./components/CreateNote";
import ImportantNotes from "./components/ImportantNotes";
import { getNotes } from "./redux/actions/notes.action";

const App = () => {
  const loading = useSelector((state) => state.noteReducer.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  const store = useStore();
  console.log("Store: ", store.getState());

  return (
    <div className="container mt-3 p-3">
      <CreateNote />
      <hr />
      {loading ? (
        <div className="spinner-border m-3"></div>
      ) : (
        <div>
          <ImportantNotes />
          <hr />
          <AllNotes />
        </div>
      )}
    </div>
  );
};

export default App;
