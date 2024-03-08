'use client'

import { ThemeContext } from "@/lib/context/themeContext";
import React, { useContext } from "react";

const UseContextExample = () => {
  const { state, dispatch } = useContext(ThemeContext);

  console.log(state);

  const handleChangeTheme = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  const handleChangeFontSize = () => {
    dispatch({ type: "CHANGE_FONTSIZE", payload: state.fontSize + 2 });
  };

  return (
    <div className="useContextExample">
      <p>Current Theme: {state.theme}</p>
      <p>Font Size: {state.fontSize}</p>

      <button onClick={handleChangeTheme}>Change Theme</button> <br />
      <button onClick={handleChangeFontSize}>Increase Font Size</button>
    </div>
  );
};

export default UseContextExample;
