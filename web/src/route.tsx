// routes.tsx
import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { IoHomeSharp } from "react-icons/io5";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { css } from "@emotion/css";

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
      element: (
        <motion.div
          className={css`
          padding: 12px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: white};
          }
        `}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360, 0],
            backgroundColor: ["red", "blue", "green"],
            transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] },
          }}
        >
          <h1>Hola </h1>
        </motion.div>
      ),
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
      children: [...routesApp.flatMap((r) => r.route)],
    },
  ],
  {
    basename: "/",
  }
);

export default router;
