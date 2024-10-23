import React from "react";
import INFO_APP, { AchievementCardType } from "../../hooks/info-data";
import AchievementCard from "../../components/cards/AchievementCard";
import TitleSectionDefault from "../../components/titles/TitleSectionDefault";
import SectionWrapperDefault from "../../components/sections/SectionWrapperDefault";
import ModalDefault from "../../components/modals/ModalDefault";
import BodyModalAchievementCard from "./BodyModalAchievementCard";
import { useReduxSelector } from "../../redux/hook";

const { title, list } = INFO_APP?.achievements || {};

/**
 * Vista de los logros destacados
 *
 * @component
 * @return {JSX.Element}
 */
const AchievementsView: React.FC = (): JSX.Element => {
  // Estado del modal
  const [showModal, setShowModal] = React.useState<boolean>(false);

  // Variables redux
  const theme = useReduxSelector((state) => state.stateTheme.theme);

  // Card seleccionada
  const [selectedCard, setSelectedCard] =
    React.useState<AchievementCardType | null>(null);

  // Abrir Modal y seleccionar
  const handleClickCard = React.useCallback((card: AchievementCardType) => {
    setShowModal(true);
    setSelectedCard(card);
  }, []);

  return (
    <SectionWrapperDefault idElement="achievements">
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
        title={
          selectedCard ? selectedCard?.title : "Información de Achievement"
        }
      >
        {/* Cuerpo */}
        {selectedCard && (
          <BodyModalAchievementCard
            isThemeDark={theme === "dark"}
            card={selectedCard}
          />
        )}
      </ModalDefault>
    </SectionWrapperDefault>
  );
};

export default AchievementsView;
