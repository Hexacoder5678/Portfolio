import React from "react";
import { SkillsInfo } from "../../constants"; // Ensure this path is correct
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[6vw] md:px-[7vw] lg:px-[15vw] font-sans relative overflow-hidden"
  >
    {/* Background Elements if needed */}
    <div className="absolute top-0 left-0 w-full h-full bg-[#050414] -z-20"></div>

    {/* Section Title */}
    <div className="mb-16 text-center">
      <h2 className="text-3xl font-bold tracking-wide text-white sm:text-5xl">
        TECHNICAL <span className="text-[#8245ec]">SKILLS</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#8245ec] to-transparent mx-auto mt-4"></div>
      <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-400">
        A showcase of my technical expertise in MERN stack, Data Science, and core computer science fundamentals.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap justify-center gap-8">
      {SkillsInfo.map((category, index) => (
        <Tilt
          key={index}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.02}
          transitionSpeed={1000}
          className="w-full md:w-[48%] lg:w-[45%]"
        >
          <div
            className="h-full bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 
            hover:border-[#8245ec]/50 transition-colors duration-300 shadow-lg hover:shadow-[#8245ec]/20"
          >
            <h3 className="pb-2 mb-6 text-xl font-semibold text-gray-200 border-b border-gray-700 sm:text-2xl">
              {category.title}
            </h3>

            {/* Grid for Skills */}
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex items-center px-4 py-2 space-x-2 transition-colors border border-gray-700 rounded-lg cursor-default bg-gray-800/80 hover:bg-gray-700"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="object-contain w-6 h-6"
                    loading="lazy"
                  />
                  <span className="text-sm font-medium text-gray-300 whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;