import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";

// TODO - STORE REDUX
export const store = configureStore({
  // Proveedores redux
  reducer: {
    // Estado del tema
    stateTheme: themeSlice,
  },
});

// Tipos
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
