import React, { useState, useCallback, useMemo, useEffect } from "react";
import { AchievementCardType } from "../../hooks/info-data";
import { IoLogoAndroid } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { limitarCadena } from "../../hooks/funs";

// Icono de tipo
const renderTypeElement = (tipo: "app" | "web" | "server") => {
  // Logo
  let Icon = null;

  // ? Es una app
  if (tipo === "app") Icon = IoLogoAndroid;

  // ? Es nulo
  if (!Icon) return <></>;

  return <IoLogoAndroid className="text-white w-7 h-7" />;
};

// Props
interface AchievementCardProps {
  card: AchievementCardType;
}

/**
 * Carta de logro
 *
 * @component
 * @return {JSX.Element}
 */
const AchievementCard: React.FC<AchievementCardProps> = ({
  card: { title, description, links, subtitle, technologies, tipo },
}) => {
  return (
    <div className="p-x pt-4 max-w-sm" data-aos="fade-up">
      <div className="flex rounded-lg h-full dark:bg-gray-800 bg-red-300 shadow-lg px-8 pt-8 pb-4 flex-col">
        {/* Encabezado */}
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-red-700 bg-red-500 flex-shrink-0">
            {/* Tipo */}
            {tipo && renderTypeElement(tipo)}
          </div>
          {/* Titulo */}
          {title && (
            <h2 className="text-gray-900 dark:text-gray-200 text-2xl font-bold">
              {title}
            </h2>
          )}
        </div>

        {/* Descripción */}
        <div className="flex flex-col justify-between flex-grow text-start">
          {/* texto */}
          {description && (
            <p className="leading-relaxed text-base text-gray-900 dark:text-gray-300">
              {limitarCadena(description, 140)}
            </p>
          )}

          {/* Enlaces */}
          <div className="justify-end items-end text-end p-0 pr-3">
            {/* Abrir modal */}
            <strong className="mt-3 text-black dark:text-gray-200 hover:opacity-60 hover:cursor-pointer inline-flex items-center">
              <FaLongArrowAltRight className="w-6 h-6" />
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
