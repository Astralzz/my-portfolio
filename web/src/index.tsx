import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// React redux
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";

// Router
import { RouterProvider } from "react-router-dom";
import router from "./route";

// Styles
import "./style/index.scss";
import "./style/app.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>
);

// Si desea comenzar a medir el rendimiento en su aplicación, pase una función
// Para registrar los resultados (for example: reportWebVitals(console.log))
// o enviar a un punto final de análisis. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
reportWebVitals(console.log);