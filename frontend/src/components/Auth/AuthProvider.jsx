import { createContext } from "react";
import { useAuth } from "../../hooks/useAuth";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user] = useAuth();

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
