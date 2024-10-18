import React from "react";
import HomeView from "./views/HomeView";
import { useReduxDispatch, useReduxSelector } from "./redux/hook";
import { css } from "@emotion/css";
import { updateTheme } from "./redux/slices/themeSlice";
import IntroductionView from "./views/IntroductionView";
import SkillsView from "./views/SkillsView";
import FloatingMenu from "./components/menus/FloatingMenu";

// Responsive modal
import "react-responsive-modal/styles.css";
import AchievementsView from "./views/achievements/AchievementsView";
import ExperienceView from "./views/ExperienceView";
import ReferencesView from "./views/ReferencesView";

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
        <div className="flex flex-col max-w-3xl items-center justify-center text-center px-4">
          {/* Inicio */}
          <HomeView />

          {/* Introducción */}
          <IntroductionView />

          {/* Gráficas */}
          <SkillsView />

          {/* Logros */}
          <AchievementsView />

          {/* Experiencia */}
          <ExperienceView />

          {/* Referencias */}
          <ReferencesView />
        </div>

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

// {/* Divider */}
// <div className="flex flex-col items-center justify-center">
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 1, delay: 0.5 }}
//     className="w-3/6 min-h-0.5 bg-gradient-to-r from-red-300 via-red-600 to-red-300 my-3"
//   />
// </div>
