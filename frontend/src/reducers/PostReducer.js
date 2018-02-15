import { PostsType } from '../actions/PostsActions';

export default function posts (state = {}, action) {
  switch (action.type) {
    case PostsType.POSTS_SUCCESS:
      return { ...state, allposts: action.posts }
    
    case PostsType.POSTS_FAILURE:
      return { ...state, error: action.error }
    
    default:
      return state
  }
};
