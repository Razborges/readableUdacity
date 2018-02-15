export const PostsType = {
  POSTS_REQUEST: 'POSTS_REQUEST',
  POSTS_SUCCESS: 'POSTS_SUCCESS',
  POSTS_FAILURE: 'POSTS_FAILURE'
};

export const postsRequest = () => ({ type: PostsType.POSTS_REQUEST });

export const postsSuccess = (posts) => (
  { type: PostsType.POSTS_SUCCESS, posts }
);

export const postsFailure = (error) => (
  { type: PostsType.POSTS_FAILURE, error }
);
