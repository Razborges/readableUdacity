import { call, put, takeLatest } from 'redux-saga/effects';
import { CommentsType, commentPostIdSuccess, commentFailure } from '../actions/CommentsActions';
import { fetchComments } from '../api';

function * getCommentPostId({ postId }) {
  try {
    const result = yield call(fetchComments, postId);
    yield put(commentPostIdSuccess(result));
  } catch (error) {
    yield put(commentFailure(error))
  }
};

export function * commentsSaga() {
  yield takeLatest(CommentsType.COMMENTS_POST_ID_REQUEST, getCommentPostId);
};