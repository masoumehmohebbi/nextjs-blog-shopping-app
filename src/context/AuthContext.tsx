import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const initialState = {};
const reducer = (state, action) => {
  switch (action.type) {
  }
};

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={user}>
      <AuthContextDispatcher.Provider value={dispatch}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
