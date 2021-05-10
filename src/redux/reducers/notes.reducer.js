import { ADD_NOTE, GET_NOTES, SET_LOADER } from "../type";

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
    default:
      return previousState;
  }
};

export default reducer;
