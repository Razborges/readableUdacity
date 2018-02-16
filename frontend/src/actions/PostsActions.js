export const PostsType = {
  POSTS_REQUEST: 'POSTS_REQUEST',
  POSTS_SUCCESS: 'POSTS_SUCCESS',
  POST_REQUEST: 'POST_REQUEST',
  POST_SUCCESS: 'POST_SUCCESS',
  POST_FROM_CATEGORY_REQUEST: 'POST_FROM_CATEGORY_REQUEST',
  POST_FROM_CATEGORY_SUCCESS: 'POST_FROM_CATEGORY_SUCCESS',
  POSTS_FAILURE: 'POSTS_FAILURE'
};

export const postsRequest = () => ({ type: PostsType.POSTS_REQUEST });

export const postsSuccess = (posts) => ({ type: PostsType.POSTS_SUCCESS, posts });

export const postRequest = (postId) => ({ type: PostsType.POST_REQUEST , postId});

export const postSuccess = (post) => ({ type: PostsType.POST_SUCCESS, post });

export const postsFromCategoryRequest = (category) => ({ type: PostsType.POST_FROM_CATEGORY_REQUEST , category });

export const postsFromCategorySuccess = (postsCategory) => ({ type: PostsType.POST_FROM_CATEGORY_SUCCESS, postsCategory });

export const postsFailure = (error) => ({ type: PostsType.POSTS_FAILURE, error });
