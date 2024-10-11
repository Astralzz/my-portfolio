import React from "react";
import HomeView from "./views/HomeView";
import { useReduxDispatch, useReduxSelector } from "./redux/hook";
import FloatingGlobalButton from "./components/FloatingGlobalButton";
import { css } from "@emotion/css";
import { updateTheme } from "./redux/slices/themeSlice";
import IntroductionView from "./views/IntroductionView";
import SkillsView from "./views/SkillsView";

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
        `} bg-gradient-to-br from-red-100 via-red-50 to-red-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-950`}
      >
        <div className="md:max-w-max">
          {/* Inicio */}
          <HomeView />

          {/* Introducción */}
          <IntroductionView />

          {/* Gráficas */}
          <SkillsView />
        </div>

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

// {/* Divider */}
// <div className="flex flex-col items-center justify-center">
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 1, delay: 0.5 }}
//     className="w-3/6 min-h-0.5 bg-gradient-to-r from-red-300 via-red-600 to-red-300 my-3"
//   />
// </div>
