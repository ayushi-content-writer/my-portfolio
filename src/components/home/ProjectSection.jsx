import React from "react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      "type": "Vox Pop",
      "description": "Real voices for real impact 🎤✨",
      "image": "https://via.placeholder.com/400x300",
      "items": [
        {
          "title": "Reel 1 (Awareness for a healthcare app)",
          "url": "https://www.instagram.com/reel/C6Gu023P4iJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          "title": "Reel 2 (Awareness for a healthcare app)",
          "url": "https://www.instagram.com/reel/C58PF8-PkhA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          "title": "Reel 3 (Awareness for a healthcare app)",
          "url": "https://www.instagram.com/reel/C5qo24koNkN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        }
      ]
    },
    {
      "type": "Podcast Marketing",
      "description": "Conversations that connect, stories that stick!",
      "image": "https://via.placeholder.com/400x300",
      "items": [
        {
          "title": "Podcast Example",
          "url": "https://youtu.be/E7WKWiA99EU?si=18SnfQWtJObWeSBd"
        }
      ]
    },
    {
      "type": "Influencer Marketing",
      "description": "Local voices for a global reach",
      "image": "https://via.placeholder.com/400x300",
      "items": [
        {
          "title": "Reel 1",
          "url": "https://www.instagram.com/reel/C68zpfqvfhx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          "title": "Reel 2",
          "url": "https://www.instagram.com/reel/C-Nf5FOyTb6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        }
      ]
    },
    {
      "type": "Marketing Scripts",
      "description": "Scripts that sell without sounding 'salesy.'",
      "image": "https://via.placeholder.com/400x300",
      "items": [
        {
          "title": "Pet Vaccination Awareness Reel 1",
          "url": "https://www.instagram.com/reel/C97ZiaGyVEp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          "title": "Pet Vaccination Awareness Reel 2",
          "url": "https://www.instagram.com/reel/C9UzW4-yNFM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          "title": "Pet Vaccination Awareness Reel 3",
          "url": "https://www.instagram.com/reel/C7grMnMS4W3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        }
      ]
    },
    {
      "type": "Blogs",
      "description": "Blogs that inform and entertain!",
      "image": "https://via.placeholder.com/400x300",
      "items": [
        {
          "title": "Blog for Hazoorilal Jewellers",
          "url": "https://docs.google.com/document/d/1L71UXjs-OVM6LitJU6oBSzIm3hVlMl1M/edit?usp=drive_link&ouid=102239822023440584575&rtpof=true&sd=true"
        },
        {
          "title": "Travel Blog",
          "url": "https://docs.google.com/document/d/1zY48U9XElJcfph1BCF_B1_cKpy8C5efo/edit?usp=drive_link&ouid=102239822023440584575&rtpof=true&sd=true"
        },
        {
          "title": "Jaipur Literature Festival Blog",
          "url": "https://docs.google.com/document/d/1bFLctgweqhdKLqdAJPtmgvcYUbwyfHDA/edit?usp=drive_link&ouid=102239822023440584575&rtpof=true&sd=true"
        }
      ]
    },
    {
      "type": "Academic Writing",
      "description": "Insightful and well-researched academic content.",
      "image": "https://via.placeholder.com/400x300",
      "items": [
        {
          "title": "Academic Writing Folder",
          "url": "https://drive.google.com/drive/folders/1Mmqr8NFlf69d_ZGScU1_RArj-XSdfkXC?usp=drive_link"
        }
      ]
    },
    {
      "type": "Website Content Curation",
      "description": "Turning clicks into connections with every word.",
      "image": "https://via.placeholder.com/400x300",
      "items": [
        {
          "title": "Calligraphy Classes Website",
          "url": "https://siddhicalligraphy.com/"
        },
        {
          "title": "Tours and Travel Website",
          "url": "https://bhumiretreatshimla.com/"
        },
        {
          "title": "Yoga and Retreat Website",
          "url": "https://www.ananthagram.com/"
        }
      ]
    },
    {
      "type": "Social Media Content",
      "description": "Content that stops the scroll!",
      "image": "https://via.placeholder.com/400x300",
      "items": [
        {
          "title": "Who’s who of the gang",
          "url": "https://www.instagram.com/reel/C8zWK4-yqNr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          "title": "Most likely co-worker edition",
          "url": "https://www.instagram.com/reel/C74D_OVSjWn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          "title": "Monday after World Cup",
          "url": "https://www.instagram.com/reel/C84a95Py8SE/?igsh=djY5aGV2OXI1M3Iz"
        }
      ]
    },
    {
      "type": "Voice-over Expert",
      "description": "To deliver that pitch with clarity and character!",
      "image": "https://via.placeholder.com/400x300",
      "items": [
        {
          "title": "Yoga Day Special Reel",
          "url": "https://www.instagram.com/reel/DDO_5JwSAHP/?igsh=MTlveHRyZ3M5M3Npcw=="
        }
      ]
    }
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
              style={{
                maxWidth: "350px",
                minHeight: "400px", // Ensure uniform height
                margin: "auto",
              }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.type}
                  className="w-full h-[250px] object-cover rounded-t-lg"
                />
                <div className="absolute top-0 rounded-t-lg inset-0 bg-gradient-to-br from-wave1 to-wave2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-center font-bold text-[30px]">
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
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2), 0px -2px 10px rgba(255, 255, 255, 0.15)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
    pointerEvents: "none", // Disable pointer events when hidden
  }}
  onMouseEnter={(e) => e.currentTarget.style.pointerEvents = "auto"} // Enable pointer events on hover
  onMouseLeave={(e) => e.currentTarget.style.pointerEvents = "none"} // Disable pointer events when hover ends
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
            boxShadow: "inset 6px 6px 12px rgba(0, 0, 0, 0.4), inset -6px -6px 12px rgba(255, 255, 255, 0.3)",
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
