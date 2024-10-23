import React from "react";
import { IoClose } from "react-icons/io5";
import Modal from "react-responsive-modal";
import { useReduxSelector } from "../../redux/hook";
import { ThemeAppType } from "../../redux/slices/themeSlice";
import { motion } from "framer-motion";

// Estilos basados en el tema
const getBgColor = (theme: ThemeAppType) =>
  theme === "light" ? "#fecaca" : "#1f2937";
const getBgColorOpacity = (theme: ThemeAppType) =>
  theme === "light" ? "rgba(252, 165, 165, 0.25)" : "rgba(31, 41, 55, 0.25)";
const getTextColor = (theme: ThemeAppType) =>
  theme === "light" ? "#000000" : "#ffffff";
const getBorderColor = (theme: ThemeAppType) =>
  theme === "light" ? "#000000" : "#ffffff";

// props
interface ModalDefaultProps {
  children: React.ReactNode;
  className?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  actionOnClose?: () => void;
  title?: string;
}

/**
 * Componente de envoltura para el diseño de la sección
 *
 * @component
 * @param {ModalDefaultProps} props
 *
 * @return {JSX.Element}
 */
const ModalDefault: React.FC<ModalDefaultProps> = ({
  children,
  open,
  setOpen,
  actionOnClose,
  title,
}): JSX.Element => {
  // Variables redux
  const theme = useReduxSelector((state) => state.stateTheme.theme);

  // Icono de cierre personalizado
  const closeIcon = React.useMemo(
    () => (
      <motion.strong
        whileHover={{
          scale: 1.2,
          rotate: -180,
        }}
        className="hover:cursor-pointer hover:animate-pulse rounded-full"
      >
        <IoClose className="w-8 h-8" style={{ color: getTextColor(theme) }} />
      </motion.strong>
    ),
    [theme]
  );

  // Estilos comunes
  const sectionStyles = React.useMemo(() => {
    return {
      backgroundColor: getBgColor(theme),
      color: getTextColor(theme),
    };
  }, [theme]);

  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
        actionOnClose && actionOnClose();
      }}
      styles={{
        modalContainer: {
          backgroundColor: getBgColorOpacity(theme),
        },
        modal: {
          backgroundColor: "transparent",
          padding: 0,
          borderRadius: 12,
        },
      }}
      classNames={{ modalContainer: "bg-opacity-65" }}
      closeIcon={closeIcon}
      center
    >
      <div className="flex flex-col max-w-lg">
        {/* Barra superior */}
        <div
          className="flex justify-between items-center p-4 h-14"
          style={sectionStyles}
        >
          {title && <h3 className="text-xl font-bold">{title}</h3>}
        </div>

        {/* Division */}
        <div className="px-2" style={sectionStyles}>
          <hr
            style={{
              backgroundColor: getBorderColor(theme),
              height: 1,
              borderRadius: 1,
            }}
          />
        </div>

        {/* Cuerpo */}
        <div className="flex p-4" style={sectionStyles}>
          {children}
        </div>
      </div>
    </Modal>
  );
};

export default ModalDefault;
