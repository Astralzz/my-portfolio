import { motion } from "framer-motion";
import { AchievementCardType, LENGUAJE_BROWSER } from "../../hooks/info-data";

/**
 * Cuerpo de el logro en el modal
 *
 * @param {AchievementCardType} card
 *
 * @component
 * @return {JSX.Element}
 */
const BodyModalAchievementCard: React.FC<{
  card: AchievementCardType;
  isThemeDark?: boolean;
}> = ({
  card: { description, links, subtitle, technologies, tipo },
  isThemeDark = false,
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

    {/* Pie de pagina */}
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 my-2 md:p-8">
      {/* Enlaces */}
      {links && (
        <div className="">
          {/* Titulo */}
          <motion.p
            className="font-semibold mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {LENGUAJE_BROWSER === "en" ? "Links" : "Enlaces"}:
          </motion.p>

          {/* Lista */}
          <ol className="max-w-md space-y-1 list-item list-inside">
            {links.map((link, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  scale: 1.2,
                  rotate: Math.random() >= 0.5 ? 4 : -4,
                }}
              >
                <motion.a
                  href={link?.url ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:opacity-80 hover:shadow-sm font-semibold hover:font-bold"
                  style={{
                    color: isThemeDark ? "#dc2626" : "#dc2626",
                  }}
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
            className="font-semibold mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {LENGUAJE_BROWSER === "en"
              ? "Technologies Used"
              : "Tecnologías usadas"}
            :
          </motion.p>

          {/* Recorremos */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((category) => (
              <motion.span
                key={category}
                className="cursor-pointer hover:shadow-lg shadow-md bg-red-600 text-white text-sm font-medium px-3 py-1 rounded-full transition-all duration-100 transform hover:scale-105 hover:bg-red-700"
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
  </div>
);

export default BodyModalAchievementCard;
