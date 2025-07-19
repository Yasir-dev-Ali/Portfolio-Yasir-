import { title } from "framer-motion/client";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "IGELP - E-learning Platform",
        description:
            "A full-stack MERN-based e-learning web app with Spring Boot backend for user and course management.",
        techStack: ["React", "Node.js", "Express.js", "MongoDB", "Spring Boot", "MySQL"],
        github: "https://github.com/Yasir-dev-Ali/IGELP-FYP",
        live: "https://igelp.vercel.app",
    },
    {
        title: "Social Media Platform",
        description:
            "A MERN-based real-time social app with likes, comments, profiles, and authentication.",
        techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
        github: "https://github.com/Yasir-dev-Ali/MERN-Social-Media-App",
        live: "https://socialapp.vercel.app",
    },
    {
        title: "React Redux web app",
        description:
            "A React-based app tracking boycottable Israeli products with clean UI and database integration.",
        techStack: ["React", "Redux", "Tailwind CSS" ,"API Integration", "Axios"],
        github: "https://github.com/Yasir-dev-Ali/Reactjs-redux",
        live: "https://reactjs-redux-omega.vercel.app/",
    },
    {
        title: "MakeMyHashtag - Hashtag Generator App",
        description:
            "A hashtag generator app that suggests hashtags based on user input. using Nextjs and Tailwind CSS.", 
        techStack: ["Next.js", "Tailwind CSS", "API Integration", "Axios"],
        github: "https://github.com/Yasir-dev-Ali/MakeMyHashtag",
        live: "https://makemyhashtag-frontend.vercel.app/",
    },
    {
        title: "Portfolio Website",
        description:
            "A personal portfolio website showcasing my skills, projects, and contact information.",
        techStack: ["React", "Tailwind CSS", "FontAwesome"],
        github: "https://github.com/Yasir-dev-Ali/Portfolio",
        live: "https://yasir-portfolio.vercel.app/",
    },
    

];

const ProjectSection = () => {
    return (
        <section className="bg-white py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                    Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition"
                        >
                            <h3 className="text-xl font-semibold text-blue-600 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex space-x-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-600 hover:text-black"
                                >
                                    <FaGithub size={18} />
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-600 hover:text-blue-600"
                                >
                                    <FaExternalLinkAlt size={18} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
