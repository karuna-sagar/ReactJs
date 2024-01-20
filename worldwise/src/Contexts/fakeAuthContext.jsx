import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
function reducer(state, action) {}
function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialItems
  );
  function login(email, password) {}
  function logout() {}
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
}
