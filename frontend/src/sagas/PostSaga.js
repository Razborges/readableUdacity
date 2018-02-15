import { call, put, takeLatest } from 'redux-saga/effects';
import { PostsType, postsSuccess, postsFailure } from '../actions/PostsActions';
import { fetchPosts } from '../api';

function * getPosts() {
  try {
    const result = yield call(fetchPosts);
    yield put(postsSuccess(result));
  } catch (error) {
    yield put(postsFailure(error))
  }
};

export function * postsSaga() {
  yield takeLatest(PostsType.POSTS_REQUEST, getPosts);
};
