import { css } from "@emotion/css";
import React, { useState, useCallback, useMemo, useEffect } from "react";
import { IconType } from "react-icons";
import { IoCaretBack, IoSunny } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { hashRoutesApp } from "../../route";
import { FaFilePdf, FaLinkedin, FaMoon } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

type FloatingMenuItemType = {
  to?: string;
  Icon?: IconType;
  action?: () => void;
  label?: string;
  rotateIcon?: number;
  isTarget?: boolean;
};

// Menu content
const renderMenuContent = (item: FloatingMenuItemType) => (
  <span
    className={css`
      color: #ffffff;
      font-size: 0.5em;
    `}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {item?.Icon && (
        <item.Icon
          style={{
            width: "1.2em",
            height: "1.2em",
            color: "#FFFF",
            transform: item?.rotateIcon
              ? `rotate(${item.rotateIcon}deg)`
              : undefined,
          }}
        />
      )}
      {item?.label && <p>{item.label}</p>}
    </div>
  </span>
);

// Menu item
const renderMenuItem = (item: FloatingMenuItemType, toggleMenu: () => void) => {
  // ? Existe to
  if (item?.to) {
    return (
      <Link
        to={item.to}
        className="link-a"
        target={item?.isTarget ? "_blank" : undefined}
        onClick={toggleMenu}
      >
        {renderMenuContent(item)}
      </Link>
    );
  }

  // Existe action
  if (item?.action) {
    return (
      <div
        className="link-a hover:cursor-pointer"
        onClick={() => {
          item.action?.();
          toggleMenu();
        }}
      >
        {renderMenuContent(item)}
      </div>
    );
  }

  return <></>;
};

// Props
interface FloatingMenuProps {
  theme?: {
    action: () => void;
    color: "dark" | "light";
  };
}

const FloatingMenu: React.FC<FloatingMenuProps> = ({ theme }) => {
  // Variables
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  // Posición actual del scroll
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const location = useLocation();

  // Función para togglear el menu
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  // Items del menu
  const itemsMenu = useMemo(() => {
    const menuItems: Array<FloatingMenuItemType> = [];

    // Ruta actual
    const currentPath = location.pathname;

    // Acciones
    const toBackward = `${currentPath}#${
      hashRoutesApp[
        (currentIndex - 1 + hashRoutesApp.length) % hashRoutesApp.length
      ]
    }`;
    const toForward = `${currentPath}#${
      hashRoutesApp[(currentIndex + 1) % hashRoutesApp.length]
    }`;

    // Desplazar atrás
    menuItems.push({ to: toBackward, Icon: IoCaretBack, rotateIcon: 180 });

    // ? Tema
    if (theme?.action)
      menuItems.push({
        Icon: theme?.color === "dark" ? FaMoon : IoSunny,
        action: theme.action,
      });

    menuItems.push(
      // Curriculum en PDF
      {
        to: "https://linkedin.com/in/edain-jesus-cortez-ceron-23b26b155",
        Icon: FaLinkedin,
        isTarget: true,
      },
      // Repositorio del proyecto
      {
        to: "https://github.com/Astralzz/my-portfolio",
        isTarget: true,
        Icon: PiGithubLogoFill,
      },
      // Desplazar adelante
      { to: toForward, Icon: IoCaretBack, rotateIcon: 180 }
    );

    return menuItems;
  }, [theme, location, currentIndex]);

  // Mostrar menú después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setMenuVisible(true);
    }, 5 * 1000);

    return () => clearTimeout(timer);
  }, []);

  // Al cambiar hash
  React.useEffect(() => {
    // ? Hay un hash (#) en la URL (#home, ..),
    if (location.hash) {
      // Removemos el #
      const hash = location.hash.substring(1);
      // Buscamos el índice del hash en el array
      const index = hashRoutesApp.indexOf(hash);
      // ? Se encontró
      if (index !== -1) setCurrentIndex(index);
    }
  }, [location]);

  return (
    <div
      className={`floating-menu transition-opacity duration-2500 ${
        menuVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        className={`${css`
          bottom: -2.3em;
          padding-bottom: 2.1em;
          background: none;
          background-color: #111;
          background-color: ${theme?.color === "dark" ? "#ab2424" : "#ef7a7a"};
          color: white;

          &:hover,
          &:active,
          &:focus {
            background-color: ${theme?.color === "dark"
              ? "#d23030"
              : "#f6abab"};
          }
        `} cn-button`}
        id="cn-button"
        onClick={toggleMenu}
      >
        +
      </button>
      <div
        className={`cn-wrapper ${menuOpen ? "opened-nav" : ""}`}
        id="cn-wrapper"
      >
        <ul>
          {itemsMenu.map((item, i) => (
            <li
              key={i}
              className={css`
                &:nth-child(odd) .link-a {
                  background-color: ${theme?.color === "dark"
                    ? "hsla(0, 88%, 23%, 1)"
                    : "hsla(0, 88%, 63%, 1)"};
                }
                &:nth-child(even) .link-a {
                  background-color: ${theme?.color === "dark"
                    ? "hsla(0, 88%, 30%, 1)"
                    : "hsla(0, 88%, 65%, 1)"};
                }
                &.active .link-a,
                &:not(.active) .link-a:hover,
                &:not(.active) .link-a:active,
                &:not(.active) .link-a:focus {
                  background-color: ${theme?.color === "dark"
                    ? "hsla(0, 88%, 10%, 1)"
                    : "hsla(0, 88%, 70%, 1)"};
                }
              `}
            >
              {renderMenuItem(item, toggleMenu)}
            </li>
          ))}
        </ul>
      </div>
      <div
        id="cn-overlay"
        className={`${css`
          background-color: rgba(0, 0, 0, 0.6);
        `} cn-overlay ${menuOpen ? "on-overlay" : ""}`}
        onClick={toggleMenu}
      />
    </div>
  );
};

export default FloatingMenu;
