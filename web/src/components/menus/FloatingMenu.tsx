import { css } from "@emotion/css";
import React, { useState, useCallback, useMemo, useEffect } from "react";
import { IconType } from "react-icons";
import { IoSunny } from "react-icons/io5";
import { Link } from "react-router-dom";

// Menu item
const renderMenuItem = (item: FloatingMenuItemType, toggleMenu: () => void) => {
  // ? Existe to
  if (item?.to) {
    return (
      <Link to={item.to} className="link-a" onClick={toggleMenu}>
        <span
          className={css`
            color: #ffffff;
            font-size: 0.5em;
          `}
        >
          {item?.Icon && <item.Icon className="w-5 h-5" />}
          {item?.label && <p>{item.label}</p>}
        </span>
      </Link>
    );
  }

  // Existe action
  if (item?.action) {
    return (
      <div
        className="link-a hover:cursor-pointer"
        onClick={() => {
          item?.action && item.action();
          toggleMenu();
        }}
      >
        <span
          className={css`
            color: #ffffff;
            font-size: 0.5em;
          `}
        >
          {item?.Icon && <item.Icon className="w-5 h-5" />}
          {item?.label && <p>{item.label}</p>}
        </span>
      </div>
    );
  }

  return <></>;
};

type FloatingMenuItemType = {
  to?: string;
  Icon?: IconType;
  action?: () => void;
  label?: string;
};

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

  // Función para togglear el menu
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  // Items del menu
  const itemsMenu = useMemo(() => {
    const menuItems: Array<FloatingMenuItemType> = [];

    menuItems.push({ to: "/", Icon: IoSunny, label: "➡️" });

    // ? Tema
    if (theme?.action)
      menuItems.push({
        label: theme?.color === "dark" ? "🌙" : "☀️",
        action: theme.action,
      });

    menuItems.push(
      { to: "/", Icon: IoSunny, label: "📄" },
      { to: "/", Icon: IoSunny, label: "📱" },
      { to: "/", Icon: IoSunny, label: "➡️" }
    );

    return menuItems;
  }, [theme]);

  // Mostrar menú después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setMenuVisible(true);
    }, 5 * 1000);

    return () => clearTimeout(timer);
  }, []);

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
