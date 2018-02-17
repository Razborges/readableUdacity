export const PostsType = {
  POSTS_REQUEST: 'POSTS_REQUEST',
  POSTS_SUCCESS: 'POSTS_SUCCESS',
  POST_REQUEST: 'POST_REQUEST',
  POST_SUCCESS: 'POST_SUCCESS',
  POST_FROM_CATEGORY_REQUEST: 'POST_FROM_CATEGORY_REQUEST',
  POST_FROM_CATEGORY_SUCCESS: 'POST_FROM_CATEGORY_SUCCESS',
  NEW_POST_REQUEST: 'NEW_POST_REQUEST',
  NEW_POST_SUCCESS: 'NEW_POST_SUCCESS',
  DELETE_POST_REQUEST: 'DELETE_POST_REQUEST',
  DELETE_POST_SUCCESS: 'DELETE_POST_SUCCESS',
  VOTE_POST_REQUEST: 'VOTE_POST_REQUEST',
  VOTE_POST_SUCCESS: 'VOTE_POST_SUCCESS',
  EDIT_POST_REQUEST: 'EDIT_POST_REQUEST',
  EDIT_POST_SUCCESS: 'EDIT_POST_SUCCESS',
  POSTS_FAILURE: 'POSTS_FAILURE'
};

export const postsRequest = () => ({ type: PostsType.POSTS_REQUEST });

export const postsSuccess = (posts) => ({ type: PostsType.POSTS_SUCCESS, posts });

export const postRequest = (postId) => ({ type: PostsType.POST_REQUEST , postId});

export const postSuccess = (post) => ({ type: PostsType.POST_SUCCESS, post });

export const postsFromCategoryRequest = (category) => ({ type: PostsType.POST_FROM_CATEGORY_REQUEST , category });

export const postsFromCategorySuccess = (postsCategory) => ({ type: PostsType.POST_FROM_CATEGORY_SUCCESS, postsCategory });

export const newPostRequest = (post) => ({ type: PostsType.NEW_POST_REQUEST, post });

export const newPostSuccess = (posts) => ({ type: PostsType.NEW_POST_SUCCESS, posts });

export const deletePostRequest = (postId) => ({ type: PostsType.DELETE_POST_REQUEST, postId });

export const deletePostSuccess = (postId, category) => ({ type: PostsType.DELETE_POST_SUCCESS, postId, category });

export const votePostRequest = (postId, vote) => ({ type: PostsType.VOTE_POST_REQUEST, postId, vote });

export const votePostSuccess = (postId, category) => ({ type: PostsType.VOTE_POST_SUCCESS, postId, category });

export const editPostRequest = (post, postId) => ({ type: PostsType.EDIT_POST_REQUEST, post, postId });

export const editPostSuccess = (postId, category) => ({ type: PostsType.EDIT_POST_SUCCESS, postId, category });

export const postsFailure = (error) => ({ type: PostsType.POSTS_FAILURE, error });
