import { setCookie } from "./cookie";

export const initialState = {
  user: null,
  cookie: null
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
        cookie: setCookie("googleToken", action.user,{
          path: "/"
        })
      };
    default:
      return state;
  }
};

export default reducer;
