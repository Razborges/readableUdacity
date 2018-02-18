import { CommentsType } from '../actions/CommentsActions';

export default function comments (state = {}, action) {
  switch (action.type) {
    case CommentsType.COMMENTS_POST_ID_SUCCESS:
      return {...state, commentsPost: action.comments}

    case CommentsType.CLEAR_COMMENT_REQUEST:
      return { ...state, commentsPost: [] }

    case CommentsType.COMMENTS_FAILURE:
      return { ...state, error: action.error }
    
    default:
      return state
  }
};