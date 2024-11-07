import React from "react";
import {
  FaCode,
  FaHtml5,
  FaJava,
  FaLongArrowAltRight,
  FaPhp,
  FaPython,
  FaVuejs,
} from "react-icons/fa";
import { SiJupyter } from "react-icons/si";
import { limitarCadena } from "../../hooks/funs";
import { motion } from "framer-motion";
import GitHubRepo from "../../models/GitHubRepoModel";
import { getAnimateFadeItemsRandom } from "../../components/graphics/hooks";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { IconType } from "react-icons";

// Icono de tipo
const renderTypeElement = (tipo: string) => {
  // Logo
  const iconMap: { [key: string]: IconType } = {
    python: FaPython,
    java: FaJava,
    typescript: BiLogoTypescript,
    php: FaPhp,
    javascript: IoLogoJavascript,
    vue: FaVuejs,
    html: FaHtml5,
    jupyter: SiJupyter,
    jupyter_notebook: SiJupyter,
  };

  // Comparamos
  const Icon = iconMap[tipo] || FaCode;

  return <Icon className="text-white w-6 h-6" />;
};

// Props
interface RepositoryProps {
  card: GitHubRepo;
}

/**
 * Carta de logro
 *
 * @component
 * @return {JSX.Element}
 */
const RepositoryCard: React.FC<RepositoryProps> = ({ card }) => {
  // Desglosamos
  const { name, description, language, html_url } = card;

  return (
    <div
      className="pt-4 max-w-sm"
      data-aos={getAnimateFadeItemsRandom()}
      data-aos-duration="1500"
    >
      <div className="flex rounded-lg h-full dark:bg-gray-800 bg-red-200 shadow-lg px-5 pt-8 pb-4 flex-col">
        {/* Encabezado */}
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-red-700 bg-red-500 flex-shrink-0">
            {/* Lenguaje */}
            {language &&
              renderTypeElement(language.toLowerCase().replace(" ", "_"))}
          </div>
          {/* Titulo */}
          {name && (
            <h2 className="text-gray-900 dark:text-gray-200 text-start text-xl font-bold">
              {limitarCadena(
                name
                  .replace(/[_.\-&]/g, " ") // Car especiales por espacios
                  .replace(/([a-z])([A-Z])/g, "$1 $2"), // Separa palabras en camel case, insertando un espacio antes de cada letra mayúscula.
                23
              )}
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
            {/* Abrir url */}
            {html_url && (
              <motion.a
                href={html_url}
                target="_blank"
                whileHover={{
                  scale: 1.2,
                  rotate: -10,
                  backgroundColor: "#a22e2e",
                }}
                className="mt-3 rounded-full p-1 text-black dark:text-gray-200 hover:opacity-60 hover:cursor-pointer inline-flex items-center"
              >
                <FaLongArrowAltRight className="w-6 h-6" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositoryCard;
