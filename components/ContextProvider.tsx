"use client";
import React from "react";

interface IProvider {
  children: React.ReactNode;
}

export interface IContext {
  toggleButton: boolean;
  setToggleButton: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Provider: React.FC<IProvider> = ({ children }) => {
  const [toggleButton, setToggleButton] = React.useState(false);

  return (
    <Context.Provider value={{ toggleButton, setToggleButton }}>
      {children}
    </Context.Provider>
  );
};

export const Context = React.createContext<IContext | null>(null);

export default Context;
