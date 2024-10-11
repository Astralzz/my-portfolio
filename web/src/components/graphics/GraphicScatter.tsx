import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
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

const GraphicScatter: React.FC<GraphicAppProps> = ({
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
            <ScatterChart>
              <XAxis
                dataKey="name"
                tick={{ fill: getColorFontGraphic(isThemeDark), fontSize: 10 }}
              />
              <YAxis
                tickFormatter={(value) => `${value}%`}
                tick={{ fill: getColorFontGraphic(isThemeDark), fontSize: 8 }}
              />
              {/* Etiqueta flotante */}
              <Tooltip
                contentStyle={getTooltipStyle(isThemeDark)}
                content={(props) => getRenderTooltipContent(isThemeDark, props)}
              />
              <Scatter name="Languages" data={list} fill={getColorGraphic()} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default GraphicScatter;
