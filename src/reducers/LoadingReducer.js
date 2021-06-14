import * as loadingActionTypes from "../actions/LoadingActionTypes";

const initialState = {
  isLoadingShown: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case loadingActionTypes.SHOW_LOADING:
      return {
        ...state,
        isLoadingShown: true,
      };
    case loadingActionTypes.HIDE_LOADING:
      return {
        ...state,
        isLoadingShown: false,
      };
    default:
      return state;
  }
}

export default reducer;
