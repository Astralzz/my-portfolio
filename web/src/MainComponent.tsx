import React from "react";
import HomeView from "./views/HomeView";
import IntroductionView from "./views/IntroductionView";
import SkillsView from "./views/SkillsView";
import AchievementsView from "./views/achievements/AchievementsView";
import ExperienceView from "./views/ExperienceView";
import ReferencesView from "./views/ReferencesView";
import RepositoriesView from "./views/repositories/RepositoriesView";
import { useLocation } from "react-router-dom";

/**
 * Componente principal
 *
 * @component
 * @return {JSX.Element}
 */
const MainComponent: React.FC = (): JSX.Element => {

  // Variables
  const location = useLocation();
  const lastHash = React.useRef<string>("");

  // Al cambiar url
  React.useEffect(() => {
    // ? Hay un hash (#) en la URL (#home, ..),
    if (location.hash) {
      // Extraemos hash
      lastHash.current = location.hash.slice(1);
    }

    // ? El Hash contiene un valor y existe un elemento con ese ID en el DOM
    if (lastHash.current && document.getElementById(lastHash.current)) {
      // Temporizador de 100 ms antes de hacer desplazamiento
      setTimeout(() => {
        // Desplazamos
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        // Reseteanos hash
        lastHash.current = "";
      }, 100);
    }
  }, [location]);

  return (
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

      {/* Repositorios */}
      <RepositoriesView />
    </div>
  );
};

export default MainComponent;
