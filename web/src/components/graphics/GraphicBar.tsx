import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  getColorFontGraphic,
  getColorGraphic,
  getRenderTooltipContent,
  getTooltipStyle,
  GraphicAppProps,
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
      {title && (
        <p
          className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2"
          data-aos="fade-up"
        >
          {title}
        </p>
      )}
      {/* Gráfica */}
      {list && (
        <div data-aos="fade-up">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={list}
              margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
            >
              {/* Leyendas de abajo de cada celda */}
              <XAxis
                dataKey="name"
                tick={{
                  fill: getColorFontGraphic(isThemeDark),
                  fontSize: 10,
                }}
              />
              {/* Leyenda de la izquierda (Puntos) */}
              <YAxis
                tickFormatter={(value) => `${value}%`}
                tick={{
                  fill: getColorFontGraphic(isThemeDark),
                  fontSize: 8,
                }}
              />
              {/* Etiqueta flotante */}
              <Tooltip
                contentStyle={getTooltipStyle(isThemeDark)}
                content={(props) => getRenderTooltipContent(isThemeDark, props)}
                itemStyle={{
                  color: getColorFontGraphic(isThemeDark),
                  fontSize: 8,
                }}
              />
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
                  <Cell key={`cell-${index}`} fill={getColorGraphic()} />
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
