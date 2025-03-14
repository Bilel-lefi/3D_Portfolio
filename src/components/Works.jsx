import React from "react";
import { github } from "../assets"; // Assurez-vous que vos icônes sont bien importées
import { projects } from "../constants"; // Vérifiez la bonne structure de vos projets

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div className="w-full sm:w-[360px] md:w-[380px] lg:w-[420px] bg-tertiary p-5 rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105">
      <div className="relative w-full h-[230px] mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-xl"
        />
        {/* Icône GitHub */}
        <div className="absolute top-0 right-0 flex justify-end p-3">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-all duration-200 hover:bg-gray-700"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-white text-xl font-semibold">{name}</h3>
        <p className="mt-2 text-secondary text-sm">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.name}
            className={`text-xs ${tag.color} py-1 px-3 rounded-full`}
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <section id="work" className="py-20 px-10">
      <div className="text-center mb-12">
        <p className="text-lg text-secondary">My Work</p>
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
      </div>

      {/* Description générale */}
      <div className="w-full flex justify-center mb-16">
        <p className="text-center text-lg text-gray-300 max-w-3xl leading-8">
          Here are some of the projects I've worked on. Each showcases my skills
          and experience through real-world examples, with links to code
          repositories and live demos.
        </p>
      </div>

      {/* Liste des projets */}
      <div className="mt-20 flex flex-wrap gap-8 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
