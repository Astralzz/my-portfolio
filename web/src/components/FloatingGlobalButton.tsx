import React from "react";
import { FaInfo, FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

/**
 * Props para el componente FloatingGlobalButton
 *
 * @typedef {object} FloatingGlobalButtonProps
 */
interface FloatingGlobalButtonProps {
  theme?: {
    action: () => void;
    color: "dark" | "light";
  };
}

/**
 * Botón flotante de crear invitaciones
 *
 * @component
 * @return {JSX.Element}
 */
const FloatingGlobalButton: React.FC<FloatingGlobalButtonProps> = ({
  theme,
}): JSX.Element => {
  return (
    <div className="fixed bottom-1 right-1 p-1 flex flex-col items-end justify-end group">
      {/* Botón principal */}
      <div className="text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-red-700 to-red-500 z-50 hover:cursor-pointer">
        <FaInfo className="w-6 h-6 group-hover:rotate-90 transition duration-[0.6s]" />
      </div>
      {/* Botón de Descargar CV */}
      <div className="absolute bottom-3 right-16 rounded-full origin-bottom transition-all duration-[0.3s] ease-out scale-y-0 group-hover:scale-y-100 flex p-2 bg-blue-500 dark:bg-purple-950 text-white hover:cursor-pointer">
        <BsFillFileEarmarkPdfFill className="w-5 h-5" />
      </div>
      {/* Cambiar tema */}
      {theme && (
        <div
          className="absolute bottom-16 left-3 rounded-full origin-bottom transition-all duration-[0.3s] ease-out scale-y-0 group-hover:scale-y-100 flex p-2 bg-blue-500 dark:bg-purple-950 text-white hover:cursor-pointer"
          onClick={theme.action}
        >
          {/* ? Oscuro */}
          {theme.color === "dark" ? (
            <FaMoon className="w-5 h-5" />
          ) : (
            <IoSunny className="w-5 h-5" />
          )}
        </div>
      )}
    </div>
  );
};

export default FloatingGlobalButton;
