import { createSelector, createStructuredSelector } from "reselect";
import { initialState } from "./reducer";

const loginRootSelector = (state) => state.auth ?? initialState;

export const selectLoginIsloading = () =>
  createSelector(loginRootSelector, (substate) => substate.loginIsLoading);

export const selectUserProfile = () =>
  createSelector(loginRootSelector, (substate) => substate.userProfile);

export const selectLoginErrorMessage = () =>
  createSelector(loginRootSelector, (substate) => substate.loginErrorMessage);

const authSelectors = createStructuredSelector({
  loginIsLoading: selectLoginIsloading(),
  userProfile: selectUserProfile(),
  errorMessage: selectLoginErrorMessage(),
});

export default authSelectors;
