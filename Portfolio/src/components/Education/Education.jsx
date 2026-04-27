import React from "react";
import { education } from "../../constants"; // Ensure this uses the updated constants file

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[6vw] md:px-[7vw] lg:px-[16vw] font-sans relative overflow-hidden"
    >
      {/* Background (Consistent with other sections) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#050414] -z-20"></div>

      {/* Section Title */}
      <div className="mb-20 text-center">
        <h2 className="text-4xl font-bold tracking-wide text-white sm:text-5xl">
          MY <span className="text-[#8245ec]">EDUCATION</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#8245ec] to-transparent mx-auto mt-4"></div>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-400">
          My academic journey of learning and development, from school to engineering.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical Center Line (Left on mobile, Center on desktop) */}
        <div className="absolute w-1 h-full transform bg-gray-800 left-8 sm:left-1/2 sm:-translate-x-1/2"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* 1. Timeline Dot */}
            <div className="absolute left-8 sm:left-1/2 transform -translate-x-1/2 bg-[#050414] border-4 border-[#8245ec] w-12 h-12 rounded-full flex justify-center items-center z-20 shadow-[0_0_15px_rgba(130,69,236,0.5)]">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>

            {/* 2. Content Card */}
            <div
              className={`w-[calc(100%-80px)] sm:w-[45%] ml-20 sm:ml-0 p-6 sm:p-8 rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur-xl hover:border-[#8245ec]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(130,69,236,0.2)] hover:-translate-y-2 ${
                index % 2 === 0 ? "sm:mr-auto sm:pr-12" : "sm:ml-auto sm:pl-12"
              }`}
            >
              {/* Header: Logo + Info */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 min-w-[3.5rem] bg-white rounded-xl p-1 flex items-center justify-center overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="object-contain w-full h-full"
                    onError={(e) => {
                         e.target.src = "https://cdn-icons-png.flaticon.com/512/167/167707.png";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-tight text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-[#8245ec] font-semibold mt-1 text-sm sm:text-base">
                    {edu.school}
                  </h4>
                  <span className="block mt-1 text-xs tracking-wider text-gray-500 uppercase">
                    {edu.date}
                  </span>
                </div>
              </div>

              {/* Grade Badge */}
              <div className="mb-4">
                <span className="inline-block bg-[#8245ec]/20 text-[#c4a6fb] text-xs font-bold px-3 py-1 rounded-full border border-[#8245ec]/30">
                  Grade: {edu.grade}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-[#8245ec] pl-4">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;