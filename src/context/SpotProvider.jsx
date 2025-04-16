import React from "react";
import { createContext, useContext, useEffect } from "react";
const SpotContext = createContext();
export const useSpotContex = () => useContext(SpotContext);

export function SpotProvider({ children }) {
  return (
    <>
      <SpotContext.Provider>{children}</SpotContext.Provider>
    </>
  );
}
