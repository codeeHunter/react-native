import { createContext } from "react";

export const AuthContext = createContext({
  isAuth: true,
  setIsAuth: (auth) => {},
});
