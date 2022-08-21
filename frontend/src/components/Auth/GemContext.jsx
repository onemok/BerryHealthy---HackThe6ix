import React from "react";
import { useContext } from "react";

// int context that stores game data, gems, and user data
export const GemsContext = React.createContext({
  gems: 10,
  user: {},
  setUser: () => {},
  setGems: () => {},
});

export default function GemProvider({ children }) {
  return <GemsContext.Provider>{children}</GemsContext.Provider>;
}
