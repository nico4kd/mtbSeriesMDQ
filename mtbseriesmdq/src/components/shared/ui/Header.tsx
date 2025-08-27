"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  Newspaper as News,
  Trophy,
  MessageCircle,
  MapPin,
  Stars,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // .header {
  //         background: linear-gradient(
  //           135deg,
  //           var(--primary-pink),
  //           var(--secondary-cyan)
  //         );
  //         color: white;
  //         padding: 1rem 0;
  //         position: fixed;
  //         width: 100%;
  //         top: 0;
  //         z-index: 1000;
  //         box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  //       }

  return (
    <header className="bg-gradient-to-r from-pink-500 to-cyan-400 text-white shadow-lg sticky top-0 z-50">
      {/* <header className="bg-white shadow-lg sticky top-0 z-50"> */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="MTB SERIES MDQ"
              className="h-12 w-12 object-contain rounded-lg"
              width={48}
              height={48}
            />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-white">
                MTB SERIES MDQ
              </h1>
              <p className="text-sm text-gray-600">Mountain Bike Racing</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#inicio"
              className="flex items-center space-x-2 text-white-700 hover:text-pink-500 transition-colors duration-300"
            >
              <Trophy size={18} />
              <span>Inicio</span>
            </a>
            <a
              href="#puntos_inscripcion"
              className="flex items-center space-x-2 text-white-700 hover:text-cyan-500 transition-colors duration-300"
            >
              <MapPin size={18} />
              <span>Puntos de Inscripción</span>
            </a>
            <a
              href="#noticias"
              className="flex items-center space-x-2 text-white-700 hover:text-cyan-500 transition-colors duration-300"
            >
              <News size={18} />
              <span>Noticias</span>
            </a>
            <a
              href="#sponsors"
              className="flex items-center space-x-2 text-white-700 hover:text-cyan-500 transition-colors duration-300"
            >
              <Stars size={18} />
              <span>Sponsors</span>
            </a>
            {/* <a
              href="#comentarios"
              className="flex items-center space-x-2 text-white-700 hover:text-cyan-500 transition-colors duration-300"
            >
              <MessageCircle size={18} />
              <span>Comentarios</span>
            </a> */}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-pink-500 text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              <a
                href="#inicio"
                className="flex items-center space-x-2 text-white-700 hover:text-pink-500 transition-colors"
              >
                <Trophy size={18} />
                <span>Inicio</span>
              </a>
              <a
                href="#puntos_inscripcion"
                className="flex items-center space-x-2 text-white-700 hover:text-cyan-500 transition-colors"
              >
                <MapPin size={18} />
                <span>Puntos de Inscripción</span>
              </a>
              <a
                href="#noticias"
                className="flex items-center space-x-2 text-white-700 hover:text-cyan-500 transition-colors"
              >
                <News size={18} />
                <span>Noticias</span>
              </a>
              <a
                href="#sponsors"
                className="flex items-center space-x-2 text-white-700 hover:text-cyan-500 transition-colors"
              >
                <Stars size={18} />
                <span>Sponsors</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
