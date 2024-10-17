import React from "react";
import { motion } from "framer-motion";
import INFO_APP from "../hooks/info-data";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IconType } from "react-icons";
import SectionWrapperDefault from "../components/sections/SectionWrapperDefault";

const { avatar, name, description, enlaces } = INFO_APP?.home || {};

// Animaciones mejoradas para los enlaces de redes sociales
const motionEnlace = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay: 0.5 },
  whileHover: { scale: 1.5, rotate: 10 }, // Rotación añadida
  whileTap: { scale: 0.9 }, // Animación al hacer clic
  target: "_blank",
  rel: "noopener noreferrer",
};

// Componente reutilizable para los iconos de redes sociales
const SocialIcon: React.FC<{
  href: string;
  Icon: IconType;
  size?: number;
}> = ({ href, Icon, size = 30 }) => (
  <motion.a
    {...motionEnlace}
    href={href}
    className="hover:text-primary transition-colors duration-300"
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{
        scale: 1.2,
        rotate: 10,
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Icon
        className={
          "text-gray-900 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-500"
        }
        size={size}
      />
    </motion.div>
  </motion.a>
);

/**
 * Componente inicial
 *
 * @component
 * @return {JSX.Element}
 */
const HomeView: React.FC = (): JSX.Element => {
  return (
    <SectionWrapperDefault className="md:min-h-screen">
      {/* Imagen con sombra y animación de entrada */}
      {avatar?.src && (
        <motion.img
          src={avatar.src}
          className="w-32 h-32 sm:w-48 sm:h-48 rounded-full shadow-xl mb-6 transform transition-transform duration-700 hover:scale-110 hover:shadow-2xl"
          alt={avatar?.alt ?? "img-presentación"}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        />
      )}

      {/* Nombre con animación de degradado */}
      {name && (
        <motion.h1
          className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800 text-3xl sm:text-5xl font-extrabold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {name}
        </motion.h1>
      )}

      {/* Descripción con animación */}
      {description && (
        <motion.p
          className="text-lg sm:text-xl max-w-xl mt-3 font-medium text-gray-900 dark:text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {description}
        </motion.p>
      )}

      {/* Redes Sociales (enlaces con iconos) */}
      {enlaces && (
        <div className="mt-4 flex space-x-6">
          {enlaces?.github && (
            <SocialIcon href={enlaces.github} Icon={FaGithub} />
          )}
          {enlaces?.linkedin && (
            <SocialIcon href={enlaces.linkedin} Icon={FaLinkedin} />
          )}
          {enlaces?.facebook && (
            <SocialIcon href={enlaces.facebook} Icon={FaFacebook} />
          )}
          {enlaces?.email && (
            <SocialIcon href={enlaces.email} Icon={IoMdMail} />
          )}
        </div>
      )}
    </SectionWrapperDefault>
  );
};

export default HomeView;
