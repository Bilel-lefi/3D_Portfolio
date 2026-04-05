import { motion } from "framer-motion";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="mt-14 flex flex-row flex-wrap justify-center gap-6">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.08, 0.5)}
            className="group"
          >
            <div className="glass-card w-[100px] h-[100px] rounded-2xl flex flex-col items-center justify-center gap-2 p-3 cursor-default">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-secondary text-[10px] text-center font-medium opacity-70 group-hover:opacity-100 group-hover:text-white transition-all duration-300">
                {technology.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
