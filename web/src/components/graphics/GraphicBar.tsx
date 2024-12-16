import React from "react";
import { BarChart, Bar, ResponsiveContainer, Cell } from "recharts";
import {
  getColorGraphic,
  GraphicAppProps,
  renderChartComponents,
  renderChartTitle,
} from "./hooks";

/**
 * Gráfica de lenguajes y frameworks
 *
 * @component
 * @return {JSX.Element}
 */
const GraphicBar: React.FC<GraphicAppProps> = ({
  isThemeDark = false,
  data: { list, title },
}): JSX.Element => {
  return (
    <div className="mb-4">
      {/* Titulo */}
      {renderChartTitle(title)}
      {/* Gráfica */}
      {list && (
        <div data-aos="fade-up">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={list}
              margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
            >
              {renderChartComponents(isThemeDark)}
              {/* Barra */}
              <Bar
                dataKey="level"
                animationDuration={800}
                isAnimationActive
                label={false}
                style={{ pointerEvents: "none" }}
              >
                {/* Celdas de barra */}
                {list.map(({ color }, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={getColorGraphic(isThemeDark)}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default GraphicBar;
