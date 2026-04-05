import React from "react";
import { motion } from "framer-motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const ServiceCard = ({ title, icon, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="w-full sm:w-[240px]"
    >
      <div className="glass-card rounded-2xl py-8 px-6 min-h-[240px] flex flex-col justify-center items-center gap-5 group cursor-default">
        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
          <img
            src={icon}
            alt={title}
            className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h3 className="text-white text-[17px] font-semibold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[28px]"
      >
        Motivated Full-Stack Developer specializing in Next.js, React.js, and
        .NET, with hands-on experience building performant and interactive web
        applications. Complementary knowledge in Cloud deployment and
        optimization with Docker, Kubernetes, and CI/CD pipelines. I'm
        passionate about creating efficient, scalable solutions that solve
        real-world problems.
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-6 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
