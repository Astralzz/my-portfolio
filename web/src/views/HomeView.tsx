import React from "react";
import { motion } from "framer-motion";
import INFO_APP from "../hooks/info-data";
import { FaGithub, FaLinkedin, FaFacebook, FaTelegram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import SectionWrapperDefault from "../components/sections/SectionWrapperDefault";
import SocialIcon from "../components/icons/SocialIcon";

const { avatar, name, description, enlaces } = INFO_APP?.home || {};

/**
 * Componente inicial
 *
 * @component
 * @return {JSX.Element}
 */
const HomeView: React.FC = (): JSX.Element => {
  return (
    <SectionWrapperDefault className="md:min-h-screen" idElement="home">
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
          {enlaces?.telegram && (
            <SocialIcon href={enlaces.telegram} Icon={FaTelegram} />
          )}
        </div>
      )}
    </SectionWrapperDefault>
  );
};

export default HomeView;
