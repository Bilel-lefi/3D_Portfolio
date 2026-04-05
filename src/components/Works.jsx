import React from "react";
import { motion } from "framer-motion";
import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.12, 0.75)}
      className="w-full sm:w-[360px]"
    >
      <div className="glass-card rounded-2xl overflow-hidden group">
        {/* Image */}
        <div className="relative w-full h-[220px] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-60" />

          {/* Action buttons on hover */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex justify-center items-center gap-4">
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex justify-center items-center cursor-pointer hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              <img
                src={github}
                alt="github"
                className="w-5 h-5 object-contain"
              />
            </a>
            {live_demo_link && (
              <a
                href={live_demo_link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex justify-center items-center cursor-pointer hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            )}
          </div>

          {/* Live badge */}
          {live_demo_link && (
            <div className="absolute top-4 right-4">
              <a
                href={live_demo_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-accent/90 backdrop-blur-sm text-white text-[11px] font-semibold py-1.5 px-3 rounded-full hover:bg-accent transition-colors tracking-wide uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Live
              </a>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-white text-[18px] font-bold tracking-tight">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[13px] leading-[21px] line-clamp-3">
            {description}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-[11px] font-medium ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[15px] max-w-3xl leading-[26px]"
        >
          These projects showcase my skills through real-world applications,
          from e-commerce platforms to cloud infrastructure. Each includes links
          to code repositories and live demos.
        </motion.p>
      </div>

      <div className="mt-14 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
