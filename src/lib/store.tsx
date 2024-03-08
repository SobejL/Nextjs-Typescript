import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../../src/lib/state/themeSilce'; // Corrected import path

export const makeStore = () => {
  return configureStore({
  reducer: {
    theme: themeReducer, // Updated key to 'theme'
  },
  })
}


// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

// const store = configureStore({
//   reducer: {
//     theme: themeReducer, // Updated key to 'theme'
//   },
//   // middleware: getDefaultMiddleware =>
//   //   getDefaultMiddleware().concat(),
// });



// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;
