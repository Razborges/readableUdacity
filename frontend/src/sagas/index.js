import { all, fork } from 'redux-saga/effects';
import { commentsSaga } from './CommentSaga';
import { postsSaga } from './PostSaga';
import { categoriesSaga } from './CategorySaga';

export default function * rootSaga() {
  yield all([
    fork(categoriesSaga),
    fork(postsSaga),
    fork(commentsSaga),
  ]);
};
