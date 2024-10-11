import React from "react";
import {
  LineChart,
  Line,
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

const GraphicLine: React.FC<GraphicAppProps> = ({
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
            <LineChart
              data={list}
              margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis
                dataKey="name"
                tick={{ fill: getColorFontGraphic(isThemeDark), fontSize: 10 }}
              />
              <YAxis
                tickFormatter={(value) => `${value}%`}
                tick={{ fill: getColorFontGraphic(isThemeDark), fontSize: 8 }}
              />
              <Tooltip
                contentStyle={getTooltipStyle(isThemeDark)}
                content={(props) => getRenderTooltipContent(isThemeDark, props)}
              />
              <Line
                type="monotone"
                dataKey="level"
                stroke={getColorGraphic()}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default GraphicLine;
