import React from "react";
import INFO_APP from "../hooks/info-data";
import SectionWrapperDefault from "../components/sections/SectionWrapperDefault";
import TitleSectionDefault from "../components/titles/TitleSectionDefault";
import { getAnimateFadeItemsRandom } from "../components/graphics/hooks";
import { BsFillTelephoneFill } from "react-icons/bs";
import SocialIcon from "../components/icons/SocialIcon";
import { IoMdMail } from "react-icons/io";

const { list, title } = INFO_APP?.references || {};

/**
 * Vista de las referencias y contactos
 *
 * @component
 * @return {JSX.Element}
 */
const ReferencesView: React.FC = (): JSX.Element => {
  return (
    <SectionWrapperDefault idElement="references">
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
            {list.map(({ testimonial, name, role, links }, i) => (
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
                  {(name || links) && (
                    <div className="flex gap-6 mb-2 pb-1 px-4 border-b-2 md:border-b-2 border-red-500 dark:border-red-600 items-center">
                      {/* Nombre */}
                      {name && (
                        <p className="text-red-500 dark:text-red-600 font-bold text-lg">
                          {name}
                        </p>
                      )}

                      {/* Enlaces */}
                      {links && (
                        <div className="flex flex-grow p-1 gap-4">
                          {/* Teléfono */}
                          {links?.tel && (
                            <SocialIcon
                              href={`tel:${links.tel}`}
                              classNames={{
                                icon: "text-red-500 dark:text-red-600",
                              }}
                              Icon={BsFillTelephoneFill}
                              size={16}
                            />
                          )}

                          {/* Email */}
                          {links?.email && (
                            <SocialIcon
                              href={`mailto:${links.email}`}
                              classNames={{
                                icon: "text-red-500 dark:text-red-600",
                              }}
                              Icon={IoMdMail}
                              size={16}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* rol */}
                  {role && (
                    <div className="flex px-0 md:px-4 text-xs">
                      {/* Rol */}
                      {role && <p>{role}</p>}
                    </div>
                  )}
                </div>

                {/* Descripción */}
                {testimonial && (
                  <div
                    className="mb:w-8/12 w-full text-justify text-sm"
                    data-aos={getAnimateFadeItemsRandom()}
                    data-aos-duration="1500"
                  >
                    <p className="">{testimonial}</p>
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

export default ReferencesView;
