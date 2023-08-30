import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

function Box() {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme.primary.main,
        color: theme.primary.text,
      }}
    >
      Box
    </div>
  );
}

export default Box;
