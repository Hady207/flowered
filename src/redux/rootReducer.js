import { combineReducers } from "redux";

import { authReducer as auth } from "../pages/Authentication/reducer";
import { homeReducer as home } from "../pages/Home/reducer";

const rootReducer = combineReducers({ auth, home });

export default rootReducer;
