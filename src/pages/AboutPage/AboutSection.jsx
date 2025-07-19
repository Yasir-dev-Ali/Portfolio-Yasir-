import React from "react";
import profile from "../../../public/profile.png";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNode,
    FaGitAlt,
    FaGithub,
    FaDatabase,
    FaBootstrap,
    FaFire,
    FaLock,
    FaCogs,
    FaAccessibleIcon,
    FaTools,
    FaUsers,
    FaLightbulb,
    FaRocket,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiPostman, SiAxios, SiFirebase } from "react-icons/si";

const skills = [
    { icon: <FaHtml5 size={32} className="text-orange-600" />, name: "HTML5" },
    { icon: <FaCss3Alt size={32} className="text-blue-600" />, name: "CSS3" },
    { icon: <FaJs size={32} className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact size={32} className="text-cyan-500" />, name: "React.js" },
    { icon: <FaReact size={32} className="text-purple-600" />, name: "Redux" },
    { icon: <FaNode size={32} className="text-green-700" />, name: "Node.js" },
    { icon: <FaGitAlt size={32} className="text-red-500" />, name: "Git" },
    { icon: <FaGithub size={32} className="text-gray-800" />, name: "GitHub" },
    { icon: <SiMongodb size={32} className="text-green-600" />, name: "MongoDB" },
    { icon: <FaDatabase size={32} className="text-purple-600" />, name: "Express.js" },
    { icon: <SiTailwindcss size={32} className="text-sky-500" />, name: "Tailwind CSS" },
    { icon: <FaBootstrap size={32} className="text-indigo-600" />, name: "Bootstrap" },
    { icon: <SiPostman size={32} className="text-orange-500" />, name: "Postman" },
    { icon: <SiAxios size={32} className="text-indigo-500" />, name: "Axios" },
    { icon: <SiFirebase size={32} className="text-yellow-500" />, name: "Firebase" },
    { icon: <FaLock size={32} className="text-red-600" />, name: "JWT Authentication" },
    { icon: <FaCogs size={32} className="text-gray-600" />, name: "RESTful APIs" },
    { icon: <FaReact size={32} className="text-cyan-400" />, name: "Responsive Design" },
    { icon: <FaAccessibleIcon size={32} className="text-pink-600" />, name: "Web Accessibility (a11y)" },
    { icon: <FaTools size={32} className="text-yellow-600" />, name: "Performance Optimization" },
    { icon: <FaUsers size={32} className="text-blue-800" />, name: "Code Review & Collaboration" },
    { icon: <FaRocket size={32} className="text-purple-500" />, name: "Agile Methodologies" },
    { icon: <FaLightbulb size={32} className="text-yellow-400" />, name: "Problem Solving" },
    { icon: <FaFire size={32} className="text-red-500" />, name: "Continuous Learning" },
];

const AboutSection = () => {
    return (
        <section className="bg-white py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Text Section */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        I'm <span className="font-semibold">Yasir Ali</span>, a passionate MERN Stack Developer with strong skills in
                        building responsive, scalable, and user-friendly web applications. I
                        recently completed an internship at Maze Digital and currently
                        continue to work there as a MERN Stack Developer. My expertise lies
                        in full-stack development, API integration, and performance optimization.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">My Skills</h3>
                    <div className="flex flex-wrap gap-4">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="relative group w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform"
                            >
                                {skill.icon}
                                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Profile Image */}
                <div className="flex justify-center md:justify-end">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
                        <img
                            src={profile}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
