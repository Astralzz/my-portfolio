import React from "react";
import HomeView from "./views/HomeView";
import { useReduxDispatch, useReduxSelector } from "./redux/hook";
import FloatingGlobalButton from "./components/FloatingGlobalButton";
import { css } from "@emotion/css";
import { updateTheme } from "./redux/slices/themeSlice";

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
        `} bg-gray-300 dark:bg-gray-900`}
      >
        <HomeView />

        {/* Boton flotante */}
        <FloatingGlobalButton
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
