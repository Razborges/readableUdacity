export const CategoriesType = {
  CATEGORIES_REQUEST: 'CATEGORIES_REQUEST',
  CATEGORIES_SUCCESS: 'CATEGORIES_SUCCESS',
  CATEGORIES_FAILURE: 'CATEGORIES_FAILURE'
};

export const categoriesRequest = () => ({ type: CategoriesType.CATEGORIES_REQUEST });

export const categoriesSuccess = (categories) => (
  { type: CategoriesType.CATEGORIES_SUCCESS, categories }
);

export const categoriesFailure = (error) => (
  { type: CategoriesType.CATEGORIES_FAILURE, error }
);
