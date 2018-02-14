export const CategoriesType = {
  CATEGORIES_REQUEST: 'CATEGORIES_REQUEST',
  CATEGORIES_SUCCESS: 'CATEGORIES_SUCCESS',
  CATEGORIES_FAILURE: 'CATEGORIES_FAILURE'
}

export const categoriesRequest = () => {
  return { type: CategoriesType.CATEGORIES_REQUEST }};

export const categoriesSuccess = (categories) => {
  return {
    type: CategoriesType.CATEGORIES_SUCCESS,
    categories
  }
};
