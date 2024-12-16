import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import {
  getColorFontGraphic,
  getColorGraphic,
  renderChartTooltip,
  GraphicAppProps,
  renderChartTitle,
} from "./hooks";

const GraphicRadar: React.FC<GraphicAppProps> = ({
  isThemeDark = false,
  data: { list, title },
}): JSX.Element => {
  return (
    <div className="mb-4">
      {/* Titulo */}
      {renderChartTitle(title)}
      {list && (
        <div>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={list}>
              {renderChartTooltip(isThemeDark)}
              <PolarGrid />
              <PolarAngleAxis
                dataKey="name"
                tick={{ fill: getColorFontGraphic(isThemeDark), fontSize: 10 }}
              />
              <Radar
                name="Level"
                dataKey="level"
                stroke={getColorGraphic(isThemeDark)}
                fill={getColorGraphic(isThemeDark)}
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default GraphicRadar;
