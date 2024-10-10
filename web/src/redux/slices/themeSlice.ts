import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definimos tipo
export type ThemeAppType = "dark" | "light";

// Definimos el estado
export type ThemeSliceType = {
  theme: ThemeAppType;
};

// Definimos datos iniciales
const initialState: ThemeSliceType = {
  theme: "light",
};

// Creamos un slice
export const themeSlice = createSlice({
  name: "theme", // Nombre del slice
  initialState, // Datos iniciales
  reducers: {
    // SECTION - Iniciar sesión
    updateTheme: (state, action: PayloadAction<ThemeAppType>) => {
      state.theme = action.payload;
    },
  },
});

// Exportamos
export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;
