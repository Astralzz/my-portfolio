import React, { useCallback } from "react";
import INFO_APP from "../../hooks/info-data";
import SectionWrapperDefault from "../../components/sections/SectionWrapperDefault";
import TitleSectionDefault from "../../components/titles/TitleSectionDefault";
import GitHubRepo from "../../models/GitHubRepoModel";
import { fetchGitHubRepoIndex } from "../../api/gitHubRepoApis";
import RepositoryCard from "./RepositoryCard";
import { AiOutlineLoading } from "react-icons/ai";
import { motion } from "framer-motion";
import { getAnimateFadeItemsRandom } from "../../components/graphics/hooks";

const { title, description } = INFO_APP?.repositories || {};

// Cargando
const LoadingComponent: React.FC = (): JSX.Element => (
  <div className="flex flex-col justify-center items-center h-96">
    <AiOutlineLoading className="w-6 h-6 text-red-500 dark:text-red-600 animate-spin" />
    {/* <span className="text-red-500 dark:text-red-600 text-sm">Cargando</span> */}
  </div>
);

/**
 * Introducción
 *
 * @component
 * @return {JSX.Element}
 */
const RepositoriesView: React.FC = (): JSX.Element => {
  // Lista de repositorios
  const [loading, setLoading] = React.useState<boolean>(false);
  const [list, setList] = React.useState<Array<GitHubRepo>>([]);
  const [visibleCount, setVisibleCount] = React.useState<number>(6);

  // Buscar la lista de repositorios
  const fetchIndex = useCallback(async () => {
    try {
      setLoading(true);

      // Simulando la llamada a la API
      const res = await fetchGitHubRepoIndex();

      // ? No existe res
      if (!res) throw new Error("Los datos no llegaron correctamente");

      // Asignamos
      setList(res);

      // Error
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  // Cargar más elementos
  const handleLoadMore = useCallback(() => {
    setVisibleCount((prevCount) => prevCount + 6);
  }, []);

  // Al iniciar
  React.useEffect(() => {
    fetchIndex();
  }, [fetchIndex]);

  return (
    <SectionWrapperDefault>
      {/* Titulo */}
      <TitleSectionDefault
        title={title}
        classNames={{
          base: "mt-5",
        }}
      />

      {/* Cargando */}
      {loading ? (
        <LoadingComponent />
      ) : (
        /* List */
        <div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {list &&
              list
                .slice(0, visibleCount)
                .map((card, i) => <RepositoryCard key={i} card={card} />)}
          </div>
          {/* Botón para mostrar más */}
          {visibleCount < list.length && (
            <div className="flex justify-end mt-4">
              <motion.p
                whileHover={{
                  scale: 1.2,
                  rotate: Math.random() >= 0.5 ? 2 : -2,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="px-2 py-1 text-xs rounded-md shadow-md hover:cursor-pointer hover:opacity-70 dark:bg-gray-800 bg-red-300 text-gray-900 dark:text-gray-200 font-semibold"
                onClick={handleLoadMore}
              >
                Mostrar más
              </motion.p>
            </div>
          )}
        </div>
      )}
    </SectionWrapperDefault>
  );
};

export default RepositoriesView;
