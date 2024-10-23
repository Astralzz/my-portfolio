// routes.tsx
import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { IoHomeSharp } from "react-icons/io5";
import { IconType } from "react-icons";
import MainComponent from "./MainComponent";

// Ids de las secciones de home
export const hashRoutesApp = [
  "home", // 0
  "introduction", // 1
  "skills", // 2
  "achievements", // 3
  "experience", // 4
  "references", // 5
  "repositories", // 6
];

// Tipo route
export type RouteObjectApp = {
  route: RouteObject;
  label: string;
  labelNarval?: string;
  Icon?: IconType;
  isHiddenMenu?: boolean;
  subListRoute?: {
    title: string;
    routePage: string;
    Icon?: IconType;
  }[];
};

// Lista de rutas
export const routesApp: RouteObjectApp[] = [
  // Inicio
  {
    label: "Inicio",
    isHiddenMenu: true,
    Icon: () => <IoHomeSharp />,
    route: {
      path: "/",
      element: <MainComponent />,
    },
  },
];

//TODO - Controlador de rutas
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <App />,
      children: [
        ...routesApp.flatMap((r) => r.route),
        // Todas las URL
        {
          path: "*",
          element: <MainComponent />,
        },
      ],
    },
  ],
  {
    basename: "/",
  }
);

export default router;
