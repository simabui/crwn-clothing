import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTIONS_TYPE } from "./user.types";

export const setCurrentUser = (user) => createAction(USER_ACTIONS_TYPE.SET_CURRENT_USER, user);
