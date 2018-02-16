import { call, put, takeLatest } from 'redux-saga/effects';
import { PostsType, postsSuccess, postSuccess, postsFromCategorySuccess, postsFailure } from '../actions/PostsActions';
import { fetchPosts, fetchPost, fetchPostsByCategory } from '../api';

function * getPosts() {
  try {
    const result = yield call(fetchPosts);
    yield put(postsSuccess(result));
  } catch (error) {
    yield put(postsFailure(error))
  }
};

function * getPost({ postId }) {
  try {
    const result = yield call(fetchPost, postId);
    yield put(postSuccess(result));
  } catch (error) {
    yield put(postsFailure(error))
  }
};

function * getPostsFromCategory({ category }) {
  try {
    const result = yield call(fetchPostsByCategory, category);
    yield put(postsFromCategorySuccess(result));
  } catch (error) {
    yield put(postsFailure(error))
  }
};

export function * postsSaga() {
  yield takeLatest(PostsType.POSTS_REQUEST, getPosts);
  yield takeLatest(PostsType.POST_REQUEST, getPost);
  yield takeLatest(PostsType.POST_FROM_CATEGORY_REQUEST, getPostsFromCategory);
};
