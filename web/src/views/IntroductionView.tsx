import React from "react";
import INFO_APP from "../hooks/info-data";
import SectionWrapperDefault from "../components/sections/SectionWrapperDefault";

const { paragraph } = INFO_APP?.introduction || {};

/**
 * Introducción
 *
 * @component
 * @return {JSX.Element}
 */
const IntroductionView: React.FC = (): JSX.Element => {
  // Variables
  // const ref = React.useRef<HTMLParagraphElement>(null);
  // const isInView = useInView(ref, { once: true });

  return (
    <SectionWrapperDefault>
      {/* Párrafo de la introducción */}
      {paragraph && (
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-lg text-gray-900 dark:text-gray-200 text-justify sm:text-xl max-w-2xl mb-6"
        >
          {paragraph}
        </p>
      )}
    </SectionWrapperDefault>
  );
};

export default IntroductionView;
