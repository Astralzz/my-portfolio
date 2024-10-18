import React from "react";
import INFO_APP from "../hooks/info-data";
import SectionWrapperDefault from "../components/sections/SectionWrapperDefault";
import TitleSectionDefault from "../components/titles/TitleSectionDefault";
import { getAnimateFadeItemsRandom } from "../components/graphics/hooks";

const { list, title } = INFO_APP?.experience || {};

/**
 * Introducción
 *
 * @component
 * @return {JSX.Element}
 */
const ExperienceView: React.FC = (): JSX.Element => {
  return (
    <SectionWrapperDefault>
      {/* Titulo */}
      <TitleSectionDefault
        title={title}
        classNames={{
          base: "mt-5",
        }}
      />

      {/* Listado de experiencias */}
      {list && (
        <div className="w-full mx-auto">
          <div className="pl-2">
            {list.map(({ company, description, duration, role }, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row mt-8 text-sm text-gray-900 dark:text-gray-200 text-start"
              >
                {/* Encabezado */}
                <div
                  className="flex flex-col mb:w-4/12 w-full mb-4 md:mb-0 md:mx-4 mx-0 justify-center border-r-0 md:border-r-2 border-red-500 dark:border-red-600"
                  data-aos={getAnimateFadeItemsRandom()}
                  data-aos-duration="1500"
                >
                  {/* Compañía */}
                  {company && (
                    <div className="md:flex gap-0 md:gap-6 mb-2 pb-1 md:px-4 border-b-2 md:border-b-2 border-red-500 dark:border-red-600 items-center">
                      {/* Abreviatura */}
                      {company?.abbreviations && (
                        <p className="font-bold text-lg text-red-500 dark:text-red-600">
                          {company.abbreviations}
                        </p>
                      )}
                      {/* Nombre */}
                      {company?.name && (
                        <p className="font-semibold text-sm">{company.name}</p>
                      )}
                    </div>
                  )}

                  {/* Duración y rol */}
                  {(duration || role) && (
                    <div className="flex md:flex-row flex-row md:gap-2 gap-3 md:px-4 text-xs items-center">
                      {/* Rol */}
                      {role && <p className="">{role}</p>}
                      {/* Separador */}
                      <div className="-hidden -md:block bg-red-500 dark:bg-red-600 w-2 h-0.5"></div>
                      {/* Duración */}
                      {duration && <p>{duration}</p>}
                    </div>
                  )}
                </div>

                {/* Descripción */}
                {description && (
                  <div
                    className="mb:w-8/12 w-full text-justify text-sm"
                    data-aos={getAnimateFadeItemsRandom()}
                    data-aos-duration="1500"
                  >
                    <p className="">{description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </SectionWrapperDefault>
  );
};

export default ExperienceView;
