import { PostsType } from '../actions/PostsActions';

export default function posts (state = {}, action) {
  switch (action.type) {
    case PostsType.POSTS_SUCCESS:
    case PostsType.NEW_POST_SUCCESS:
    case PostsType.POSTS_SORT_VOTE_SUCCESS:
    case PostsType.POSTS_SORT_DATE_SUCCESS:
      return { ...state, allposts: action.posts }
    
    case PostsType.POST_SUCCESS:
      return { ...state, postDetail: action.post }
    
    case PostsType.POST_FROM_CATEGORY_SUCCESS:
    case PostsType.POSTS_CATEGORY_SORT_VOTE_SUCCESS:
    case PostsType.POSTS_CATEGORY_SORT_DATE_SUCCESS:
      return { ...state, postsCategory: action.postsCategory }
    
    case PostsType.POSTS_FAILURE:
      return { ...state, error: action.error }
    
    default:
      return state
  }
};
