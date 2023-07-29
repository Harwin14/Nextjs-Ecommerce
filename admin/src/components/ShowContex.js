import { createContext, useContext, useState } from "react";

const ShowContext = createContext();

export function ShowProvider({ children }) {
  const [show, setShow] = useState(true);

  return (
    <ShowContext.Provider value={{ show, setShow }}>
      {children}
    </ShowContext.Provider>
  );
}

export function useShow() {
  const context = useContext(ShowContext);
  if (!context) {
    throw new Error("useShow must be used within a ShowProvider");
  }
  return context;
}