import { useDispatch } from 'react-redux';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { ADD_NOTE, DELETE_NOTE } from '../types';

export function* addNewNote(action) {
}

export function* deleteNote(action) {
  
}

export function* watchAddNote() {
  yield takeEvery(ADD_NOTE, addNewNote);
  yield takeEvery(DELETE_NOTE, deleteNote);
}