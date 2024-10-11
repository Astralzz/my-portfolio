import React from "react";
import INFO_APP, { GraphicSkillType } from "../hooks/info-data";
import GraphicBar from "../components/graphics/GraphicBar";
import { useReduxSelector } from "../redux/hook";
import GraphicLine from "../components/graphics/GraphicLine";
import GraphicRadar from "../components/graphics/GraphicRadar";
import GraphicArea from "../components/graphics/GraphicArea";
import { ThemeAppType } from "../redux/slices/themeSlice";

const { languages, frameworks, databases, tools } = INFO_APP?.skills || {};

// Component
const GraphicComponent: React.FC<{
  data: GraphicSkillType;
  type?: "bar" | "line" | "area" | "radar";
  theme: ThemeAppType;
}> = ({ data, type = "bar", theme }): JSX.Element => {
  // Componente
  const GraphicComponent =
    type === "bar"
      ? GraphicBar
      : type === "line"
      ? GraphicLine
      : type === "area"
      ? GraphicArea
      : type === "radar"
      ? GraphicRadar
      : GraphicBar;

  return (
    <div className=" h-96">
      <GraphicComponent data={data} isThemeDark={theme === "dark"} />
    </div>
  );
};

/**
 * Skills y gráficas
 *
 * @component
 * @return {JSX.Element}
 */
const SkillsView: React.FC = (): JSX.Element => {
  // Variables redux
  const theme = useReduxSelector((state) => state.stateTheme.theme);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen text-secondary text-center px-4">
      {/* Gráfica 1 */}
      {languages && <GraphicComponent data={languages} theme={theme} />}
      {/* Gráfica 2 */}
      {frameworks && <GraphicComponent data={frameworks} theme={theme} type="radar" />}
      {/* Gráfica 3 */}
      {databases && <GraphicComponent data={databases} theme={theme} type="area" />}
      {/* Gráfica 4 */}
      {tools && <GraphicComponent data={tools} theme={theme} type="line" />}
    </section>
  );
};

export default SkillsView;
