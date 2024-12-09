import React from "react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      type: "Vox Pop",
      description: "Real voices for real impact 🎤✨",
      image: "https://via.placeholder.com/400x300", // Placeholder image
      items: [
        { title: "Reel 1", url: "https://www.instagram.com/reel/C6Gu023P4iJ/" },
        { title: "Reel 2", url: "https://www.instagram.com/reel/C58PF8-PkhA/" },
        { title: "Reel 3", url: "https://www.instagram.com/reel/C5qo24koNkN/" },
      ],
    },
    {
      type: "Podcast Marketing",
      description: "Conversations that connect, stories that stick!",
      image: "https://via.placeholder.com/400x300", // Placeholder image
      items: [
        { title: "Podcast Example", url: "https://youtu.be/E7WKWiA99EU" },
      ],
    },
    {
      type: "Influencer Marketing",
      description: "Local voices for a global reach",
      image: "https://via.placeholder.com/400x300", // Placeholder image
      items: [
        { title: "Reel 1", url: "https://www.instagram.com/reel/C68zpfqvfhx/" },
        { title: "Reel 2", url: "https://www.instagram.com/reel/C-Nf5FOyTb6/" },
      ],
    },
    {
      type: "Social Media Marketing",
      description: "Content that stops the scroll!",
      image: "https://via.placeholder.com/400x300", // Placeholder image
      items: [
        { title: "Reel 1", url: "https://www.instagram.com/reel/C74D_OVSjWn/" },
        { title: "Reel 2", url: "https://www.instagram.com/reel/C8zWK4-yqNr/" },
      ],
    },
  ];

  return (
    <section className="projects-section bg-backgroundBlue py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-secondary mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group bg-white border border-primary rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              style={{ width: "300px", margin: "auto" }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.type}
                  className="w-full h-[300px] object-cover rounded-t-lg"
                />
                <div className="absolute top-0 rounded-t-lg inset-0 bg-gradient-to-br from-wave1 to-wave2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-center font-bold text-[50px]">
                    {project.type}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {project.type}
                </h3>
                <p className="text-tertiary">{project.description}</p>
              </div>

              <div
                className="absolute left-1/2 transform -translate-x-1/2 top-52 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 bg-secondary shadow-xl rounded-lg p-6 border border-primary backdrop-blur-md"
                style={{
                  width: "90%",
                  background: "rgba(173, 216, 230, 0.6)",
                  boxShadow:
                    "0px 4px 15px rgba(0, 0, 0, 0.2), 0px -2px 10px rgba(255, 255, 255, 0.15)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                  right: "0",
                }}
              >
                <h4 className="text-2xl font-semibold text-secondary mb-6">
                  {project.type} Projects
                </h4>
                <ul className="space-y-3">
                  {project.items.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-left text-white px-4 py-2 rounded-md transition-all duration-300"
                        style={{
                          background: "linear-gradient(135deg, #00509e, #003f7f)",
                          boxShadow:
                            "inset 6px 6px 12px rgba(0, 0, 0, 0.4), inset -6px -6px 12px rgba(255, 255, 255, 0.3)",
                        }}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
