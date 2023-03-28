import { takeLatest, all, call, put } from "typed-redux-saga";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export function* fetchCategoriesAsync() {
  try {
    const categories = yield* call(getCategoriesAndDocuments, "categories");

    yield put(fetchCategoriesSuccess(categories));
  } catch (e) {
    console.log({ e });
    yield put(fetchCategoriesFailed(e as Error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
