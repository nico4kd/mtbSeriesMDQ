import React, { useState } from 'react';
import { Menu, X, Newspaper as News, Trophy, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZeUljHpFtXhOn9qNUQLLfNL0-iHz25WhumdyniEzBXekR8hK0j1OPSFUwOcGMpF-F9Sc&usqp=CAU" 
              alt="MTB SERIES MDQ" 
              className="h-12 w-12 object-contain rounded-lg"
            />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                MTB SERIES MDQ
              </h1>
              <p className="text-sm text-gray-600">Mountain Bike Racing</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="flex items-center space-x-2 text-gray-700 hover:text-pink-500 transition-colors duration-300">
              <Trophy size={18} />
              <span>Inicio</span>
            </a>
            <a href="#noticias" className="flex items-center space-x-2 text-gray-700 hover:text-cyan-500 transition-colors duration-300">
              <News size={18} />
              <span>Noticias</span>
            </a>
            <a href="#comentarios" className="flex items-center space-x-2 text-gray-700 hover:text-cyan-500 transition-colors duration-300">
              <MessageCircle size={18} />
              <span>Comentarios</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-gradient-to-r from-pink-500 to-cyan-400 text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="flex items-center space-x-2 text-gray-700 hover:text-pink-500 transition-colors">
                <Trophy size={18} />
                <span>Inicio</span>
              </a>
              <a href="#noticias" className="flex items-center space-x-2 text-gray-700 hover:text-cyan-500 transition-colors">
                <News size={18} />
                <span>Noticias</span>
              </a>
              <a href="#comentarios" className="flex items-center space-x-2 text-gray-700 hover:text-cyan-500 transition-colors">
                <MessageCircle size={18} />
                <span>Comentarios</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;