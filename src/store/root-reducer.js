import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";

export const rootRecuder = combineReducers({
  user: userReducer,
});
