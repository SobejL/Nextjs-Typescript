import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StateType = {
  theme: string;
  fontSize: number;
};

const initialState: StateType = {
  theme: 'red',
  fontSize: 16,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'red' ? 'blue' : 'red';
    },
    changeFontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
    },
  },
});

export const { toggleTheme, changeFontSize } = themeSlice.actions;

export default themeSlice.reducer;
