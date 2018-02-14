import { all, fork } from 'redux-saga/effects';
// import {  } from './CommentSaga';
// import {  } from './PostSaga';
import { categoriesSaga } from './CategorySaga';

export default function * rootSaga() {
  yield all([
    fork(categoriesSaga),
  ]);
}
