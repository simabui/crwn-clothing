import { call } from "typed-redux-saga/macro";
import { testSaga, expectSaga } from "redux-saga-test-plan";

import { fetchCategoriesAsync, onFetchCategories, categoriesSaga } from "../categories.saga";
import { CATEGORIES_ACTION_TYPES } from "../category.types";
import { fetchCategoriesSuccess } from "../category.action";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase";

describe("category saga", () => {
  test("categoriesSaga", () => {
    testSaga(categoriesSaga)
      .next()
      .all([call(onFetchCategories)])
      .next()
      .isDone();
  });

  test("onFetchCategories", () => {
    testSaga(onFetchCategories).next().takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync).next().isDone();
  });

  test("fetchCategoriesAsync success", async () => {
    const mockCategoriesArray = [
      { id: 1, name: "Category 1" },
      { id: 2, name: "Category 2" },
    ];

    await expectSaga(fetchCategoriesAsync)
      .provide([[call(getCategoriesAndDocuments), mockCategoriesArray]])
      .put(fetchCategoriesSuccess(mockCategoriesArray))
      .run();
  });
});
