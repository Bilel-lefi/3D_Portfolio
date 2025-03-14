import React from "react";
import { services } from "../constants";
const ServiceCard = ({ title, icon }) => {
  return (
    <div className="w-full sm:w-[250px] bg-gradient-to-r from-green-400 to-pink-500 p-[1px] rounded-[20px] shadow-xl transform hover:scale-105 transition duration-300">
      <div className="bg-gray-800 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 px-10">
      <div className="text-center">
        <p className="text-lg text-gray-400">Introduction</p>
        <h2 className="text-4xl font-bold">Overview</h2>
      </div>

      <p className="mt-4 text-white text-[17px] max-w-3xl mx-auto leading-[30px]">
        I'm a skilled software developer with experience in JavaScript and
        TypeScript, specializing in frameworks like React, Angular, and Spring
        Boot. I'm a quick learner who collaborates closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {" "}
        {/* Center the cards for better layout */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default About;
