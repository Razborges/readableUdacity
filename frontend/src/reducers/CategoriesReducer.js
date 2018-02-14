import { CategoriesType } from '../actions/CategoriesActions';

export default function categories (state = {}, action) {
  switch (action.type) {
    case CategoriesType.CATEGORIES_SUCCESS:
      return { ...state, items: action.categories }
    
    case CategoriesType.CATEGORIES_FAILURE:
      return { ...state, error: action.error }
    
    default:
      return state
  }
};
