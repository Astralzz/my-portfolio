import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

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

// Props
interface SocialIconProps {
  href: string;
  Icon: IconType;
  size?: number;
}

/**
 *  Componente para los iconos de redes sociales
 *
 * @param {SocialIconProps}
 *
 * @component
 * @return {JSX.Element}
 */
const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  Icon,
  size = 30,
}: SocialIconProps): JSX.Element => (
  <motion.a
    href={href}
    {...motionEnlace}
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

export default SocialIcon;
