import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer();

  // const setCurrentUser = (user) => {
  //   dispatch(createAction(USER_ACTIONS_TYPE.SET_CURRENT_USER, user));
  // };

  const value = { currentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
