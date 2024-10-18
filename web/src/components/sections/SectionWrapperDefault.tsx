import React from "react";

/**
 * Componente de envoltura para el diseño de la sección
 *
 * @component
 * @param {React.ReactNode} children
 * @param {string} [className]
 * @return {JSX.Element}
 */
const SectionWrapperDefault: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }): JSX.Element => {
  return (
    <section
      className={`flex flex-col items-center justify-center mb-12 min-h-screen md:min-h-max w-full ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapperDefault;
