import { call, put, takeLatest } from 'redux-saga/effects';
import { CategoriesType, categoriesSuccess, categoriesFailure } from '../actions/CategoriesActions';
import { fetchCategories } from '../api';

function * getCategories() {
  try {
    const result = yield call(fetchCategories);
    yield put(categoriesSuccess(result.categories));
  } catch (error) {
    yield put(categoriesFailure(error))
  }
};

export function * categoriesSaga() {
  yield takeLatest(CategoriesType.CATEGORIES_REQUEST, getCategories);
};
