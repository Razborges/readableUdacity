import { call, put, takeLatest } from 'redux-saga/effects';
import {
  PostsType,
  postsSuccess,
  postSuccess,
  postsFromCategorySuccess,
  newPostSuccess,
  deletePostSuccess,
  votePostSuccess,
  editPostSuccess,
  postsFailure
} from '../actions/PostsActions';
import { fetchPosts, fetchPost, fetchPostsByCategory, addPost, deletePost, votePost, editPost } from '../api';

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
    yield put(deletePostSuccess(result.id, result.category))
  } catch (error) {
    yield put(postsFailure(error))
  }
}

function * votePostCategory({ postId, vote }) {
  try {
    const result = yield call(votePost, postId, vote);
    yield put(votePostSuccess(result.id, result.category))
  } catch (error) {
    yield put(postsFailure(error))
  }
}

function * editPostFromId({ post, postId }) {
  try {
    const result = yield call(editPost, post, postId);
    yield put(editPostSuccess(result.id, result.category))
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
  yield takeLatest(PostsType.DELETE_POST_SUCCESS, getPosts);
  yield takeLatest(PostsType.DELETE_POST_SUCCESS, getPostsFromCategory);
  yield takeLatest(PostsType.DELETE_POST_SUCCESS, getPost);
  yield takeLatest(PostsType.VOTE_POST_REQUEST, votePostCategory);
  yield takeLatest(PostsType.VOTE_POST_SUCCESS, getPosts);
  yield takeLatest(PostsType.VOTE_POST_SUCCESS, getPostsFromCategory);
  yield takeLatest(PostsType.VOTE_POST_SUCCESS, getPost);
  yield takeLatest(PostsType.EDIT_POST_REQUEST, editPostFromId);
  yield takeLatest(PostsType.EDIT_POST_SUCCESS, getPosts);
  yield takeLatest(PostsType.EDIT_POST_SUCCESS, getPostsFromCategory);
  yield takeLatest(PostsType.EDIT_POST_SUCCESS, getPost);
};
