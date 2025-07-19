import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faGithub,
    faStackOverflow,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../Navbar/Navbar";
import INFO from "../../pages/Info/info";
import SEO from "../../pages/SEO/seo";
import profile from "../../../public/profile.png";
import logo from "../../../public/logo.png";
import Footer from "../../pages/Footer/Footer";
import WorkSection from "../../pages/WorkExperience/WorkExperience";

const Homepage = () => {
    const currentSEO = SEO.find((item) => item.page === "home");

    return (
        <>
            <Helmet>
                <title>{INFO.main.title}</title>
                <meta name="description" content={currentSEO.description} />
                <meta name="keywords" content={currentSEO.keywords.join(", ")} />
            </Helmet>

            <div className="bg-white text-gray-900 min-h-screen">
              

                <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* LEFT SECTION */}
                        <div>
                            <img
                                src={logo}
                                alt="Icon"
                                className="w-14 h-14 rounded-full mb-6 shadow-lg transform rotate-12 transition-transform duration-300 hover:rotate-0 hover:scale-105"
                            />

                            <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
                                MERN Stack Developer, <br /> passionate coder, and <br />
                                tech enthusiast.
                            </h1>


                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                                I am a MERN Stack Developer with hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I specialize in creating dynamic, responsive user interfaces and robust backend APIs. I'm passionate about clean code, modern development practices, and continuously improving my skills to deliver high-quality software solutions. I'm always eager to take on new challenges and contribute to impactful projects.
                            </p>


                            <a
                                href={INFO.main.resume}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-4"
                            >
                                View Resume
                            </a>

                            {/* Social Icons */}
                            <div className="flex flex-wrap items-center gap-4 text-xl mt-4">
                                <a href={INFO.socials.twitter} target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} className="hover:text-blue-500" />
                                </a>
                                <a href={INFO.socials.github} target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithub} className="hover:text-gray-800" />
                                </a>
                                <a href={INFO.socials.stackoverflow} target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faStackOverflow} className="hover:text-orange-500" />
                                </a>
                                <a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className="hover:text-pink-500" />
                                </a>
                                <a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faEnvelope} className="hover:text-red-500" />
                                </a>
                                <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} className="hover:text-blue-700" />
                                </a>
                            </div>
                        </div>

                        {/* RIGHT SECTION: PROFILE IMAGE */}
                        <div className="flex justify-center">
                            <div className="w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-[25px] transform rotate-3">
                                <img
                                    src={profile}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </main>

                <WorkSection />
                
            </div>
        </>
    );
};

export default Homepage;
