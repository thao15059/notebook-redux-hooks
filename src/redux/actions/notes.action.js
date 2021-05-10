import { ADD_NOTE, GET_NOTES, SET_LOADER, DELETE_NOTE } from "../type";
import { firestore } from "../../firebase";

export const addNewNote = (note) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADER });
    await firestore.collection("notes").doc(note.id.toString()).set(note);
    dispatch({ type: ADD_NOTE, payload: note });
  } catch (error) {
    console.error(error);
  }
};

export const toogleNote = (id) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADER });

    const snapshot = firestore.collection("notes").doc(id.toString());
    const note = (await snapshot.get()).data();
    await snapshot.update({
      isImportant: !note.isImportant,
    });

    dispatch(getNotes());
  } catch (error) {
    console.error(error);
  }
};

export const getNotes = () => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADER });

    const snapshot = await firestore.collection("notes").get();
    const allNotes = snapshot.docs.map((doc) => doc.data());

    dispatch({
      type: GET_NOTES,
      payload: allNotes,
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADER });

    await firestore.collection("notes").doc(id.toString()).delete();

    dispatch({
      type: DELETE_NOTE,
      payload: id,
    });
  } catch (error) {
    console.error(error);
  }
};
