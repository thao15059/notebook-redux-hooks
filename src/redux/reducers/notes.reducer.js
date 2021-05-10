import { ADD_NOTE, GET_NOTES, SET_LOADER, DELETE_NOTE } from "../type";

const initialState = {
  notes: [],
  loading: false,
};

const reducer = (previousState = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...previousState,
        loading: true,
      };
    case ADD_NOTE:
      return {
        ...previousState,
        loading: false,
        notes: [...previousState.notes, action.payload],
      };
    case GET_NOTES:
      return {
        ...previousState,
        loading: false,
        notes: action.payload,
      };
    case DELETE_NOTE:
      const notes = previousState.notes.filter(
        (note) => note.id !== action.payload
      );
      return {
        ...previousState,
        loading: false,
        notes: notes,
      };
    default:
      return previousState;
  }
};

export default reducer;
