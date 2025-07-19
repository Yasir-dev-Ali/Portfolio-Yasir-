import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: "Home", path: "/", id: "home" },
        { name: "About", path: "/about", id: "about" },
        { name: "Projects", path: "/projects", id: "projects" },
        { name: "Articles", path: "/articles", id: "articles" },
        { name: "Contact", path: "/contact", id: "contact" },
    ];

    // Find the active ID based on current path
    const activePath = location.pathname;

    return (
        <header className="w-full py-6 flex justify-center z-50 sticky top-0 bg-transparent">
            <div className="relative w-full max-w-5xl flex justify-center items-center">
                {/* Hamburger icon */}
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex bg-white shadow-md px-8 py-3 rounded-full space-x-8 text-gray-700 text-base font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            className={`relative px-2 py-1 transition-colors duration-300 ${activePath === item.path
                                ? "text-black font-semibold"
                                : "hover:text-black"
                                }`}
                        >
                            {activePath === item.path && (
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1 rounded-full bg-blue-500"></span>
                            )}
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="absolute top-14 w-full px-6 md:hidden">
                        <div className="bg-white shadow-md px-6 py-4 rounded-xl flex flex-col items-center space-y-4 text-gray-700 text-base font-medium">
                            {navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`relative transition-colors duration-300 ${activePath === item.path
                                        ? "text-black font-semibold"
                                        : "hover:text-black"
                                        }`}
                                >
                                    {activePath === item.path && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1 rounded-full bg-blue-500"></span>
                                    )}
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default NavBar;
