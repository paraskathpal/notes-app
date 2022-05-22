import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE, LOGIN, LOGOUT } from '../types';

const initialState = {
  notes: []
};

export default (state = initialState, action) => {
  console.log(state['notes'], "notes")
  switch (action.type) { // to be changed
    case ADD_NOTE: {
      return  {
        ...state,
        notes : [ ...action.payload ]
      }
    }
    case EDIT_NOTE: {
      let notes = JSON.parse(JSON.stringify(state['notes']))
      let index = action.payload.index
      notes.splice(index, 1, action.payload.note)
      return  {
        ...state,
        notes
      }
    }
    case DELETE_NOTE:{
      let notes = JSON.parse(JSON.stringify(state['notes']))
      let index = notes.findIndex(note => note.id === action.id)
      notes.splice(index, 1)
      return  {
        ...state,
        notes
      }
    }
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      }
    default:
        return state;
  }
}