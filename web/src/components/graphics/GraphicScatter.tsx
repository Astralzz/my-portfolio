import React from "react";
import { ScatterChart, Scatter, ResponsiveContainer } from "recharts";
import {
  getColorGraphic,
  GraphicAppProps,
  renderChartComponents,
  renderChartTitle,
} from "./hooks";

const GraphicScatter: React.FC<GraphicAppProps> = ({
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
            <ScatterChart>
              {renderChartComponents(isThemeDark)}
              <Scatter name="Languages" data={list} fill={getColorGraphic()} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default GraphicScatter;
