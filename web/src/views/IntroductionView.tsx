import React from "react";
import INFO_APP from "../hooks/info-data";

const { paragraph } = INFO_APP?.introduction || {};

/**
 * Introducción
 *
 * @component
 * @return {JSX.Element}
 */
const IntroductionView: React.FC = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-secondary text-center px-4">
      {/* Párrafo de la introducción */}
      {paragraph && (
        <p
          data-aos="fade-up"
          className="text-lg text-gray-900 dark:text-gray-200 text-justify sm:text-xl max-w-2xl mx-auto mb-6"
        >
          {paragraph}
        </p>
      )}
    </section>
  );
};

export default IntroductionView;
