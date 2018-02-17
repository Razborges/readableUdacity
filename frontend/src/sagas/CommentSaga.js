import { call, put, takeLatest } from 'redux-saga/effects';
import {
  CommentsType,
  commentPostIdSuccess,
  newCommentSuccess,
  deleteCommentSuccess,
  voteCommentSuccess,
  editCommentSuccess,
  commentFailure
} from '../actions/CommentsActions';
import { fetchComments, addComment, voteComment, deleteComment, editComment } from '../api';

function * getCommentPostId({ postId }) {
  try {
    const result = yield call(fetchComments, postId);
    yield put(commentPostIdSuccess(result));
  } catch (error) {
    yield put(commentFailure(error))
  }
};

function * newComment({ comment }) {
  try {
    const result = yield call(addComment, comment);
    yield put(newCommentSuccess(result.parentId));
  } catch (error) {
    yield put(commentFailure(error))
  }
}

function * deleteCommentInPost({ commentId }) {
  try {
    const result = yield call(deleteComment, commentId);
    yield put(deleteCommentSuccess(result.parentId));
  } catch (error) {
    yield put(commentFailure(error))
  }
}

function * voteCommentInPost({ commentId, vote }) {
  try {
    const result = yield call(voteComment, commentId, vote);
    yield put(voteCommentSuccess(result.parentId));
  } catch (error) {
    yield put(commentFailure(error))
  }
}

function * editCommentInPost({ comment, commentId }) {
  try {
    const result = yield call(editComment, comment, commentId);
    yield put(editCommentSuccess(result.parentId));
  } catch (error) {
    yield put(commentFailure(error))
  }
}

export function * commentsSaga() {
  yield takeLatest(CommentsType.COMMENTS_POST_ID_REQUEST, getCommentPostId);
  yield takeLatest(CommentsType.NEW_COMMENT_REQUEST, newComment);
  yield takeLatest(CommentsType.NEW_COMMENT_SUCCESS, getCommentPostId);
  yield takeLatest(CommentsType.DELETE_COMMENT_REQUEST, deleteCommentInPost);
  yield takeLatest(CommentsType.DELETE_COMMENT_SUCCESS, getCommentPostId);
  yield takeLatest(CommentsType.VOTE_COMMENT_REQUEST, voteCommentInPost);
  yield takeLatest(CommentsType.VOTE_COMMENT_SUCCESS, getCommentPostId);
  yield takeLatest(CommentsType.EDIT_COMMENT_REQUEST, editCommentInPost);
  yield takeLatest(CommentsType.EDIT_COMMENT_SUCCESS, getCommentPostId);
};