import { call, put, takeLatest } from 'redux-saga/effects';
import { CategoriesType, categoriesSuccess } from '../actions/CategoriesActions';
import { fetchCategories } from '../api';

function * getCategories() {
  try {
    const result = yield call(fetchCategories);
    yield put(categoriesSuccess(result.categories));
  } catch (error) {
    yield put({ type: CategoriesType.CATEGORIES_FAILURE, error })
  }
}

export function * categoriesSaga() {
  yield takeLatest(CategoriesType.CATEGORIES_REQUEST, getCategories);
}
