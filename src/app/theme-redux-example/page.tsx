'use client'
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { toggleTheme, changeFontSize } from '@/lib/state/themeSilce';

const ThemeExample = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);
  const fontSize = useAppSelector((state) => state.theme.fontSize);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleFontSizeChange = () => {
    dispatch(changeFontSize(fontSize + 2));
  };

  return (
    <div>
      <h1 style={{ color: theme, fontSize: `${fontSize}px` }}>
        Themed Text
      </h1>
      <button onClick={handleThemeToggle}>Toggle Theme</button> <br />
      <button onClick={handleFontSizeChange}>Increase Font Size</button>
    </div>
  );
};

export default ThemeExample;
