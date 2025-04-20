import React from "react";
import { createContext, useContext, useState } from "react";
const SpotContext = createContext();
export const useSpotContex = () => useContext(SpotContext);

export function SpotProvider({ children }) {
  const [hidden, setHidden] = useState(false);
  const [modal, setModal] = useState(false);
  const [save, setSave] = useState(false);

  const EditHandler = () => setModal(true);
  const SaveHandler = () => setSave(true);

  const values = {
    hidden,
    setHidden,
    modal,
    setModal,
    save,
    setSave,
    EditHandler,
    SaveHandler,
  };
  return <SpotContext.Provider value={values}>{children}</SpotContext.Provider>;
}
