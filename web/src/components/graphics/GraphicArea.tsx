import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import {
  getColorGraphic,
  GraphicAppProps,
  renderChartComponents,
  renderChartTitle,
} from "./hooks";

const GraphicArea: React.FC<GraphicAppProps> = ({
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
            <AreaChart
              data={list}
              margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
            >
              {renderChartComponents(isThemeDark)}
              <Area
                type="monotone"
                dataKey="level"
                stroke={getColorGraphic(isThemeDark)}
                fill={getColorGraphic(isThemeDark)}
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default GraphicArea;
