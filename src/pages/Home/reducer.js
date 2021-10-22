import { createActions } from "reduxsauce";

export const { Types: HomeTypes, Creators: HomeActions } = createActions({
  requestHomeData: null,
  homeDataSuccess: ["data"],
  selectHomeData: ["alpha2Code"],
  homeDataFail: ["errorMessage"],
  popupClick: null,
});

export const initialState = {
  homeIsLoading: false,
  homeData: null,
  selectedHomeData: null,
  homeErrorMessage: null,
  popup: false,
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HomeTypes.REQUEST_HOME_DATA:
      return {
        ...state,
        homeIsLoading: true,
        selectedHomeData: null,
        homeErrorMessage: null,
      };
    case HomeTypes.HOME_DATA_SUCCESS:
      return {
        ...state,
        homeIsLoading: false,
        selectedHomeData: null,
        homeErrorMessage: null,
        homeData: action.data,
      };
    case HomeTypes.POPUP_CLICK:
      return { ...state, popup: !state?.popup };
    case HomeTypes.SELECT_HOME_DATA:
      return {
        ...state,
        selectedHomeData: [
          state.homeData.find((item) => item?.cca2 === action.alpha2Code),
        ],
      };
    case HomeTypes.HOME_DATA_FAIL:
      return {
        ...state,
        homeIsLoading: false,
        selectedHomeData: null,
        homeErrorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
