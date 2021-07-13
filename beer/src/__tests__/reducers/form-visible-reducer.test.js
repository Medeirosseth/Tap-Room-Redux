import formVisibleReducer from "../../reducers/form-visible-reducer";

describe('formVisibleReducer', () => {

  test('should return default stat if no action type is recognized', () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  })
});
