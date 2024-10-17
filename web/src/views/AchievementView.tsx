import React from "react";
import INFO_APP, {
  AchievementCardType,
  LENGUAJE_BROWSER,
} from "../hooks/info-data";
import AchievementCard from "../components/cards/AchievementCard";
import TitleSectionDefault from "../components/titles/TitleSectionDefault";
import SectionWrapperDefault from "../components/sections/SectionWrapperDefault";
import ModalDefault from "../components/modals/ModalDefault";
import { motion } from "framer-motion";

const { title, list } = INFO_APP?.achievements || {};

// Carta
const BodyModalAchievementCard: React.FC<{ card: AchievementCardType }> = ({
  card: { description, links, subtitle, technologies, tipo },
}) => (
  <div className="max-w-lg mx-auto pb-8 px-1">
    {/* Subtitulo */}
    {subtitle && (
      <motion.p
        className="text-lg font-bold mb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {subtitle}
      </motion.p>
    )}

    {/* Descripción */}
    {description && (
      <motion.p
        className="mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
    )}

    {/* Enlaces */}
    {links && (
      <div className="my-2">
        {/* Titulo */}
        <motion.p
          className="font-semibold mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {LENGUAJE_BROWSER === "en" ? "Links" : "Enlaces"}
        </motion.p>

        {/* Lista */}
        <ol className="max-w-md space-y-1 list-decimal list-inside">
          {links.map((link, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <motion.a
                href={link?.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-600 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05, textDecoration: "underline" }}
              >
                {link?.text ?? "N/A"}
              </motion.a>
            </motion.li>
          ))}
        </ol>
      </div>
    )}

    {/* Tecnologías */}
    {technologies && (
      <div>
        {/* Titulo */}
        <motion.p
          className="font-semibold mb-2 text-gray-800"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {LENGUAJE_BROWSER === "en"
            ? "Technologies Used"
            : "Tecnologías usadas"}
        </motion.p>

        {/* Recorremos */}
        <div className="flex flex-wrap gap-2">
          {[
            ...technologies,
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Redux",
            "Tailwind",
            "Firebase",
            "Node.js",
            "Express.js",
          ].map((category) => (
            <motion.span
              key={category}
              className="cursor-pointer bg-red-600 text-white text-sm font-medium px-3 py-1 rounded-full transition-all duration-100 transform hover:scale-105 hover:bg-red-700"
              whileHover={{
                scale: 1.2,
                rotate: Math.random() >= 0.5 ? 12 : -12,
              }}
            >
              {category}
            </motion.span>
          ))}
        </div>
      </div>
    )}
  </div>
);

/**
 * Introducción
 *
 * @component
 * @return {JSX.Element}
 */
const AchievementView: React.FC = (): JSX.Element => {
  // Estado del modal
  const [showModal, setShowModal] = React.useState<boolean>(false);

  // Card seleccionada
  const [selectedCard, setSelectedCard] =
    React.useState<AchievementCardType | null>(null);

  // Abrir Modal y seleccionar
  const handleClickCard = React.useCallback((card: AchievementCardType) => {
    setShowModal(true);
    setSelectedCard(card);
  }, []);

  return (
    <SectionWrapperDefault>
      {/* Title */}
      <TitleSectionDefault title={title} />

      {/* List */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {list &&
          list.map((card, i) => (
            <AchievementCard
              key={i}
              card={card}
              setModalCardView={handleClickCard}
            />
          ))}
      </div>

      {/* Modal */}
      <ModalDefault
        open={showModal}
        setOpen={setShowModal}
        title={selectedCard ? selectedCard.title : "Información de Achievement"}
      >
        {/* Cuerpo */}
        {selectedCard && <BodyModalAchievementCard card={selectedCard} />}
      </ModalDefault>
    </SectionWrapperDefault>
  );
};

export default AchievementView;
