import { call, put, takeLatest } from 'redux-saga/effects';
import {
  PostsType,
  postsRequest,
  postsSuccess,
  postSuccess,
  postsFromCategoryRequest,
  postsFromCategorySuccess,
  newPostSuccess,
  postsFailure
} from '../actions/PostsActions';
import { fetchPosts, fetchPost, fetchPostsByCategory, addPost, deletePost } from '../api';

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

function * addNewPost({ post }) {
  try {
    const result = yield call(addPost, post);
    if(result) {
      const results = yield call(fetchPosts);
      yield put(newPostSuccess(results));
    }
  } catch (error) {
    yield put(postsFailure(error))
  }
}

function * removePost({ postId }) {
  try {
    const result = yield call(deletePost, postId);
    if(result) {
      yield put(postsRequest());
    }
  } catch (error) {
    yield put(postsFailure(error))
  }
}

function * removePostFromCategory({ postId, category }) {
  try {
    const result = yield call(deletePost, postId);
    if(result) {
      yield put(postsFromCategoryRequest(category));
    }
  } catch (error) {
    yield put(postsFailure(error))
  }
}

export function * postsSaga() {
  yield takeLatest(PostsType.POSTS_REQUEST, getPosts);
  yield takeLatest(PostsType.POST_REQUEST, getPost);
  yield takeLatest(PostsType.POST_FROM_CATEGORY_REQUEST, getPostsFromCategory);
  yield takeLatest(PostsType.NEW_POST_REQUEST, addNewPost);
  yield takeLatest(PostsType.DELETE_POST_REQUEST, removePost);
  yield takeLatest(PostsType.DELETE_POST_CATEGORY_REQUEST, removePostFromCategory);
};
