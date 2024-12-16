import { Tooltip, XAxis, YAxis } from "recharts";

// Obtener color de letra
export const getColorFontGraphic = (
  isThemeDark: boolean,
  isFont: boolean = true
): string => {
  // ? Es letra
  if (isFont) return isThemeDark ? "#f9fafb" : "#000000";

  // Es fondo
  return isThemeDark ? "#1a1a1a" : "#f9fafb";
};

// Estilo para el tooltip
export const getTooltipStyle = (isThemeDark: boolean) => {
  return {
    backgroundColor: getColorFontGraphic(isThemeDark, false),
    borderRadius: "5px",
    padding: "3px",
    size: 1,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    color: getColorFontGraphic(isThemeDark),
    fontSize: 13,
  };
};

// Contenido personalizado para el Tooltip
export const getRenderTooltipContent = (isThemeDark: boolean, props: any) => {
  const { active, payload } = props;
  if (active && payload && payload.length) {
    const { name, level } = payload[0].payload;
    return (
      <div style={getTooltipStyle(isThemeDark)}>
        <p style={{ margin: 0 }}>{`${name}: ${level}/10`}</p>
      </div>
    );
  }
  return null;
};

// Color de la gráfica
export const getColorGraphic = (
  isThemeDark: boolean = false,
  color: string = "#e88181"
) => (isThemeDark ? "#a22e2e" : color);

// Props
export type GraphicAppProps = {
  isThemeDark?: boolean;
  data: {
    title?: string;
    list?: Array<{
      name?: string;
      level?: number;
      color?: string;
    }>;
  };
};

// Animaciones de los items random
export const getAnimateFadeItemsRandom = (): string => {
  const animates = ["up", "down", "right", "down-right", "up-right"];

  return `fade-${animates[Math.floor(Math.random() * animates.length)]}`;
};

// COMPONENTES ---------------------

export const renderChartTitle = (title?: string) => (
  <>
    {title && (
      <p
        className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2"
        data-aos="fade-up"
      >
        {title}
      </p>
    )}
  </>
);

export const renderChartComponents = (isThemeDark: boolean) => (
  <>
    {renderChartAxis(isThemeDark)}
    {renderChartYAxis(isThemeDark)}
    {renderChartTooltip(isThemeDark)}
  </>
);

export const renderChartAxis = (isThemeDark: boolean = false) => (
  <XAxis
    dataKey="name"
    tick={{ fill: getColorFontGraphic(isThemeDark), fontSize: 10 }}
  />
);

export const renderChartYAxis = (isThemeDark: boolean = false) => (
  <YAxis
    tickFormatter={(value) => `${value}`}
    tick={{ fill: getColorFontGraphic(isThemeDark), fontSize: 8 }}
    domain={[0, 10]} // Limita el rango del eje Y entre 0 y 10
  />
);

export const renderChartTooltip = (isThemeDark: boolean = false) => (
  <Tooltip
    contentStyle={getTooltipStyle(isThemeDark)}
    content={(props) => getRenderTooltipContent(isThemeDark, props)}
    itemStyle={{
      color: getColorFontGraphic(isThemeDark),
      fontSize: 8,
    }}
  />
);
