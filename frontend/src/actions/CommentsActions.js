export const CommentsType = {
  COMMENTS_POST_ID_REQUEST: 'COMMENTS_POST_ID_REQUEST',
  COMMENTS_POST_ID_SUCCESS: 'COMMENTS_POST_ID_SUCCESS',
  COMMENTS_FAILURE: 'COMMENTS_FAILURE'
};

export const commentsPostIdRequest = (postId) => ({ type: CommentsType.COMMENTS_POST_ID_REQUEST, postId });

export const commentPostIdSuccess = (comments) => (
  { type: CommentsType.COMMENTS_POST_ID_SUCCESS, comments }
);

export const commentFailure = (error) => (
  { type: CommentsType.COMMENTS_FAILURE, error }
);
