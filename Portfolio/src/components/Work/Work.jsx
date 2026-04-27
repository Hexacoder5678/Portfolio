import React, { useState } from "react";
import { projects } from "../../constants"; 

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="work"
      className="py-24 px-[6vw] md:px-[7vw] lg:px-[15vw] font-sans relative"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#050414] -z-20"></div>

      {/* Section Title */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold tracking-wide text-white sm:text-5xl">
          MY <span className="text-[#8245ec]">PROJECTS</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#8245ec] to-transparent mx-auto mt-4"></div>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-400">
          A showcase of my technical projects, featuring Full Stack Architectures, 
          Backend Systems, and Real-time Applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group relative bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(130,69,236,0.3)] hover:border-[#8245ec]/50"
          >
            <div className="relative h-48 overflow-hidden bg-gray-800">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x200?text=Image+Not+Found'; }}
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100">
                <span className="px-4 py-2 font-semibold tracking-wider text-white border rounded-full border-white/50 backdrop-blur-sm">
                  View Details
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#8245ec] transition-colors">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-400 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium text-[#c4a6fb] bg-[#8245ec]/10 px-3 py-1 rounded-full border border-[#8245ec]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-[#0b0b1e] border border-white/10 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-[#8245ec] transition-colors text-2xl"
            >
              &times;
            </button>

            <div className="flex flex-col md:flex-row min-h-[400px]">
              {/* Modal Image - Increased visibility logic */}
              <div className="relative flex items-center justify-center w-full bg-gray-900 h-72 md:w-1/2 md:h-auto">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="object-contain max-w-full max-h-full p-2"
                />
              </div>

              <div className="flex flex-col w-full p-6 md:p-8 md:w-1/2">
                <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                  {selectedProject.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-300 md:text-base">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <h4 className="mb-3 font-semibold text-white">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span key={index} className="text-xs md:text-sm font-medium text-[#c4a6fb] bg-[#8245ec]/10 px-3 py-1 rounded-full border border-[#8245ec]/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-auto">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 font-semibold text-center text-white transition-colors bg-gray-800 hover:bg-gray-700 rounded-xl">
                      GitHub
                    </a>
                  )}
                  {selectedProject.webapp && (
                    <a href={selectedProject.webapp} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#8245ec] hover:bg-[#6b38c2] text-white py-3 rounded-xl font-semibold text-center transition-colors">
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;