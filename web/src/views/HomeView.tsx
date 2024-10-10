import React from "react";
import logo from "../logo.svg";
import INFO_APP from "../hooks/info-data";

// Desglosamos info app
const { home } = INFO_APP;

/**
 * Componente de inicio
 *
 * @component
 * @return {JSX.Element}
 */
const HomeView: React.FC = (): JSX.Element => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {home?.description && <p>{home.description}</p>}
      {home?.name && (
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {home.name}
        </a>
      )}
    </header>
  );
};

export default HomeView;
