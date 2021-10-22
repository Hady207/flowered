import { createActions } from "reduxsauce";

export const { Types: LoginTypes, Creators: LoginActions } = createActions({
  requestLogin: ["loginField", "password", "saved"],
  logout: null,
  loginSuccess: null,
  userSignIn: ["userProfile"],
  loginFail: ["errorMessage"],
});

export const initialState = {
  loginIsLoading: false,
  userProfile: null,
  loginErrorMessage: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginTypes.REQUEST_LOGIN:
      return { ...state, loginIsLoading: true, provider: "server" };
    case LoginTypes.USER_SIGN_IN:
      return { ...state, userProfile: action.userProfile };
    case LoginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loginIsLoading: false,
        loginErrorMessage: null,
      };
    case LoginTypes.LOGOUT:
      return {
        ...state,
        loginIsLoading: false,
        userProfile: null,
        loginErrorMessage: null,
      };
    case LoginTypes.LOGIN_FAIL:
      return {
        ...state,
        loginIsLoading: false,
        loginErrorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
