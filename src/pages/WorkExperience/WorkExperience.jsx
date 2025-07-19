import React from "react";

const WorkSection = () => {
    return (
        <section className="bg-white py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Work Experience</h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    I've worked with different sorts of companies, leveling up my skills and teaming up with smart people. Here's the rundown:
                </p>

                <div className="relative border-l-4 border-blue-600 mx-auto w-fit">
                    {/* Current Job */}
                    <div className="mb-12 ml-6 text-left">
                        <div className="absolute -left-5 top-1.5 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                            M
                        </div>
                        <div className="mb-2 text-gray-500 text-sm">March 2025 - Present</div>
                        <h3 className="text-xl font-semibold text-gray-900">MERN Stack Developer</h3>
                        <p className="text-gray-600 mb-2">Maze Digital</p>
                        <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                            <li>Developing scalable full-stack web apps with the MERN stack.</li>
                            <li>Collaborating with designers and product managers.</li>
                            <li>Building responsive user interfaces using Tailwind CSS and React.js.</li>
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">MongoDB</span>
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">Express.js</span>
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">React.js</span>
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">Node.js</span>
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">Next.js</span>

                        </div>
                        <button className="mt-4 text-blue-600 text-sm hover:underline">See more</button>
                    </div>

                    {/* Previous Job */}
                    <div className="ml-6 text-left">
                        <div className="absolute -left-5 top-[300px] bg-blue-400 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                            M
                        </div>
                        <div className="mb-2 text-gray-500 text-sm">Dec 2024 - Feb 2025</div>
                        <h3 className="text-xl font-semibold text-gray-900">MERN Stack Intern</h3>
                        <p className="text-gray-600 mb-2">Maze Digital</p>
                        <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                            <li>Assisted in building web app features using React and Node.js.</li>
                            <li>Worked with MongoDB and RESTful APIs.</li>
                            <li>Participated in code reviews and stand-up meetings.</li>
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">React.js</span>
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">Node.js</span>
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">MongoDB</span>
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">Postman</span>
                        </div>
                        <button className="mt-4 text-blue-600 text-sm hover:underline">See more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
