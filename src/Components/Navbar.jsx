import React, { useState } from "react";
import logo from "../assets/logo.png";
import git from "../assets/git.png";
import { ImCross } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 🔹 Handle page navigation with loading
  const handleNavigation = (path) => {
    setLoading(true);
    setIsOpen(false);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 700); // spinner duration
  };

  return (
    <>
      <nav className="bg-white shadow-2xl text-gray-800 relative z-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
              <button onClick={() => handleNavigation("/")} className="font-bold text-lg">
                HERO.IO
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <ul className="flex items-center gap-6">
                <button onClick={() => handleNavigation("/")} className="link link-hover">
                  Home
                </button>
                <button onClick={() => handleNavigation("/apps")} className="link link-hover">
                  Apps
                </button>
                <button onClick={() => handleNavigation("/installation")} className="link link-hover">
                  Installation
                </button>
              </ul>
            </div>

            {/* GitHub Button */}
            <a
              href="https://github.com/saifuldoict"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex ml-4 bg-gradient-to-r from-[#422AD5] to-[#7867e9] text-white px-4 py-2 rounded-lg items-center gap-2"
            >
              <img src={git} alt="GitHub" className="w-5 h-5" /> Contribute
            </a>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 focus:outline-none"
              >
                {isOpen ? <ImCross /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col gap-4 p-4">
              <button onClick={() => handleNavigation("/")} className="link link-hover text-left">
                Home
              </button>
              <button onClick={() => handleNavigation("/apps")} className="link link-hover text-left">
                Apps
              </button>
              <button
                onClick={() => handleNavigation("/installation")}
                className="link link-hover text-left"
              >
                Installation
              </button>
            </ul>
            <a
              href="https://github.com/saifuldoict"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full ml-4 mb-4 bg-gradient-to-r from-[#422AD5] to-[#7867e9] text-white px-4 py-2 rounded-lg items-center gap-2"
            >
              <img src={git} alt="GitHub" className="w-5 h-5" /> Contribute
            </a>
          </div>
        )}
      </nav>

      {/* 🔹 Simple Loading Spinner */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm z-50">
          <div className="w-12 h-12 border-4 border-[#422AD5] border-dashed rounded-full animate-spin"></div>
        </div>
      )}
    </>
  );
};

export default Navbar;
