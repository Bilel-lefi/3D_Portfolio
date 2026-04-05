import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start gap-6`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-4 h-4 rounded-full bg-accent animate-glow" />
          <div className="w-[2px] sm:h-72 h-32 bg-gradient-to-b from-accent to-transparent" />
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-accent text-[14px] sm:text-[16px] font-medium tracking-[0.2em] uppercase mb-4"
          >
            Full-Stack Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-accent via-accent-light to-purple-400 bg-clip-text text-transparent">
              Bilel
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`${styles.heroSubText} mt-3 max-w-xl`}
          >
            I build modern web applications with{" "}
            <br className="sm:block hidden" />
            <span className="text-white font-semibold">React</span>,{" "}
            <span className="text-white font-semibold">Next.js</span> &{" "}
            <span className="text-white font-semibold">Cloud Technologies</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group relative bg-accent hover:bg-accent-dark text-white py-3 px-8 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              <span className="relative z-10">View Projects</span>
            </a>
            <a
              href="#contact"
              className="border border-white/20 text-white/80 hover:text-white hover:border-accent/50 hover:bg-accent/5 py-3 px-8 rounded-full font-medium transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 flex gap-10"
          >
            <div>
              <p className="text-white text-3xl font-bold">3+</p>
              <p className="text-secondary text-sm mt-1">Years Experience</p>
            </div>
            <div className="w-[1px] bg-white/10" />
            <div>
              <p className="text-white text-3xl font-bold">9+</p>
              <p className="text-secondary text-sm mt-1">Projects Completed</p>
            </div>
            <div className="w-[1px] bg-white/10" />
            <div>
              <p className="text-white text-3xl font-bold">12+</p>
              <p className="text-secondary text-sm mt-1">Technologies</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[54px] rounded-3xl border-2 border-white/20 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2.5 h-2.5 rounded-full bg-accent"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
