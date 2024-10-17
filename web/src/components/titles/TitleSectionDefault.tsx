import React from "react";

// Props
interface TitleSectionDefaultProps {
  title?: string;
  classNames?: {
    base?: string;
    text?: string;
  };
}

/**
 * Carta de logro
 *
 * @component
 * @return {JSX.Element}
 */
const TitleSectionDefault: React.FC<TitleSectionDefaultProps> = ({
  title = "N/A",
  classNames,
}): JSX.Element => {
  return (
    <div className={classNames?.base}>
      <h1
        className={`text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4 ${
          classNames?.text ?? ""
        }`}
        data-aos="fade-up"
      >
        {title}
      </h1>
    </div>
  );
};

export default TitleSectionDefault;

// {/* <div class="flex items-center mt-28">
//   <div class="border-t border-4 border-gray-400 flex-grow"></div>
//   <div class="px-3 text-gray-800 font-bold text-2xl">OR</div>
//   <div class="border-t border-4 border-gray-400 flex-grow"></div>
// </div>; */}
