import { combineReducers } from 'redux';

import comments from './CommentReducer';
import posts from './PostReducer';
import categories from './CategoriesReducer';

export default combineReducers({
  comments,
  posts,
  categories
});
