import React from "react";
import { useReduxDispatch, useReduxSelector } from "./redux/hook";
import { css } from "@emotion/css";
import { updateTheme } from "./redux/slices/themeSlice";
import FloatingMenu from "./components/menus/FloatingMenu";

// Responsive modal
import "react-responsive-modal/styles.css";
import { Outlet } from "react-router-dom";

/**
 * App componente
 *
 * @component
 * @return {JSX.Element}
 */
const App: React.FC = (): JSX.Element => {
  // Variables redux
  const theme = useReduxSelector((state) => state.stateTheme.theme);

  // Eventos
  const reduxDispatch = useReduxDispatch();

  return (
    <main className={`${theme} `}>
      <div
        className={`main ${css`
          text-align: center;
          padding-bottom: 2em;
        `} bg-gradient-to-br from-red-100 via-red-50 to-red-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-950`}
      >
        {/* Principal */}
        <Outlet />

        {/* Boton flotante */}
        <FloatingMenu
          theme={{
            action: () =>
              reduxDispatch(updateTheme(theme === "dark" ? "light" : "dark")),
            color: theme,
          }}
        />
      </div>
    </main>
  );
};

export default App;