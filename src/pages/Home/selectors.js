import { createSelector, createStructuredSelector } from "reselect";
import { initialState } from "./reducer";

const homeRootSelector = (state) => state.home ?? initialState;

export const selectHomeIsloading = () =>
  createSelector(homeRootSelector, (substate) => substate.homeIsLoading);

export const selectHomeData = () =>
  createSelector(homeRootSelector, (substate) => substate.homeData);

export const selectHomeDataSlice = () =>
  createSelector(homeRootSelector, (substate) => substate.selectedHomeData);

export const selectHomeErrorMessage = () =>
  createSelector(homeRootSelector, (substate) => substate.homeErrorMessage);

export const selectPopupModal = () =>
  createSelector(homeRootSelector, (substate) => substate.popup);

const homeSelectors = createStructuredSelector({
  homeIsLoading: selectHomeIsloading(),
  homeData: selectHomeData(),
  selectedData: selectHomeDataSlice(),
  homeErrorMessage: selectHomeErrorMessage(),
  popupVisiblity: selectPopupModal(),
});

export default homeSelectors;
