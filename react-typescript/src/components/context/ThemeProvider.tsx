import React, { createContext } from "react";
import { theme } from "./theme";

export const ThemeContext = createContext(theme);

type ThemeContextProviderProps = {
  children: JSX.Element;
};

function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
