import React from "react";
import logo from "../assets/logo.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => (
  <footer className="bg-[#0f1a30] py-10 mt-16">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

      <div className="text-center md:text-left">
        <img src={logo} alt="Food & Pixel Logo" className="h-16 mx-auto md:mx-0" />
        <h2 className="text-pink-400 font-pixel text-2xl">Food & Pixel</h2>
        <p className="text-gray-400 text-sm mt-2">
          Cooking made easy, fun & pixel-perfect 🍔
        </p>
      </div>

      <div className="flex gap-6 text-gray-600 text-2xl">

        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition duration-300">
          <FaGithub />
        </a>

        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition duration-300">
          <FaXTwitter />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition duration-300">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition duration-300">
          <FaLinkedin />
        </a>
      </div>

    </div>

    <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
      &copy; {new Date().getFullYear()} Food & Pixel. All rights reserved.
    </div>
  </footer>
);
  
  export default Footer;