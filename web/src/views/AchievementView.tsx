import React from "react";
import INFO_APP from "../hooks/info-data";
import AchievementCard from "../components/cards/AchievementCard";

const { title, list } = INFO_APP?.achievements || {};

/**
 * Introducción
 *
 * @component
 * @return {JSX.Element}
 */
const AchievementView: React.FC = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-secondary text-center px-4">
      {title && (
        <h1
          className="text-2xl font-bold text-gray-900 dark:text-gray-200"
          data-aos="fade-up"
        >
          {title}
        </h1>
      )}

      {/* Lista */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 px-12">
        {list && list.map((card, i) => <AchievementCard key={i} card={card} />)}
      </div>
    </section>
  );
};

export default AchievementView;
