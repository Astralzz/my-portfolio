import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  getColorFontGraphic,
  getColorGraphic,
  getRenderTooltipContent,
  getTooltipStyle,
  GraphicAppProps,
} from "./hooks";

const GraphicRadar: React.FC<GraphicAppProps> = ({
  isThemeDark = false,
  data: { list, title },
}): JSX.Element => {
  return (
    <div className="mb-4">
      {title && (
        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
          {title}
        </p>
      )}
      {list && (
        <div>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={list}>
              <PolarGrid />
              <PolarAngleAxis
                dataKey="name"
                tick={{ fill: getColorFontGraphic(isThemeDark), fontSize: 10 }}
              />
              <Tooltip
                contentStyle={getTooltipStyle(isThemeDark)}
                content={(props) => getRenderTooltipContent(isThemeDark, props)}
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
