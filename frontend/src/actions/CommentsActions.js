export const CommentsType = {
  COMMENTS_POST_ID_REQUEST: 'COMMENTS_POST_ID_REQUEST',
  COMMENTS_POST_ID_SUCCESS: 'COMMENTS_POST_ID_SUCCESS',
  NEW_COMMENT_REQUEST: 'NEW_COMMENT_REQUEST',
  NEW_COMMENT_SUCCESS: 'NEW_COMMENT_SUCCESS',
  DELETE_COMMENT_REQUEST: 'DELETE_COMMENT_REQUEST',
  DELETE_COMMENT_SUCCESS: 'DELETE_COMMENT_SUCCESS',
  VOTE_COMMENT_REQUEST: 'VOTE_COMMENT_REQUEST',
  VOTE_COMMENT_SUCCESS: 'VOTE_COMMENT_SUCCESS',
  EDIT_COMMENT_REQUEST: 'EDIT_COMMENT_REQUEST',
  EDIT_COMMENT_SUCCESS: 'EDIT_COMMENT_SUCCESS',
  COMMENTS_FAILURE: 'COMMENTS_FAILURE'
};

export const commentsPostIdRequest = (postId) => ({ type: CommentsType.COMMENTS_POST_ID_REQUEST, postId });

export const commentPostIdSuccess = (comments) => ({ type: CommentsType.COMMENTS_POST_ID_SUCCESS, comments });

export const newCommentRequest = (comment) => ({ type: CommentsType.NEW_COMMENT_REQUEST, comment });

export const newCommentSuccess = (postId) => ({ type: CommentsType.NEW_COMMENT_SUCCESS, postId });

export const deleteCommentRequest = (commentId) => ({ type: CommentsType.DELETE_COMMENT_REQUEST, commentId });

export const deleteCommentSuccess = (postId) => ({ type: CommentsType.DELETE_COMMENT_SUCCESS, postId });

export const voteCommentRequest = (commentId, vote) => ({ type: CommentsType.VOTE_COMMENT_REQUEST, commentId, vote });

export const voteCommentSuccess = (postId) => ({ type: CommentsType.VOTE_COMMENT_SUCCESS, postId });

export const editCommentRequest = (comment, commentId) => ({ type: CommentsType.EDIT_COMMENT_REQUEST, comment, commentId });

export const editCommentSuccess = (postId) => ({ type: CommentsType.EDIT_COMMENT_SUCCESS, postId });

export const commentFailure = (error) => ({ type: CommentsType.COMMENTS_FAILURE, error });
