import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers";

const initialAuthValue = {
  foundUser: "",
  encodedToken: "",
};

const AuthContext = createContext(initialAuthValue);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthValue);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
