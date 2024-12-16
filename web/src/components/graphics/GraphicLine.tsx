import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import {
  getColorGraphic,
  GraphicAppProps,
  renderChartComponents,
  renderChartTitle,
} from "./hooks";

const GraphicLine: React.FC<GraphicAppProps> = ({
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
            <LineChart
              data={list}
              margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
            >
              {renderChartComponents(isThemeDark)}
              <Line
                type="monotone"
                dataKey="level"
                stroke={getColorGraphic(isThemeDark)}
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
