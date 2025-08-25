import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZeUljHpFtXhOn9qNUQLLfNL0-iHz25WhumdyniEzBXekR8hK0j1OPSFUwOcGMpF-F9Sc&usqp=CAU" 
                alt="MTB SERIES MDQ" 
                className="h-12 w-12 object-contain rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-cyan-300 bg-clip-text text-transparent">
                  MTB SERIES MDQ
                </h3>
                <p className="text-gray-400">Mountain Bike Racing</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              La carrera de mountain bike más emocionante de Mar del Plata. Únete a nuestra 
              comunidad de ciclistas apasionados y vive la aventura sobre dos ruedas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-pink-500 p-3 rounded-full hover:bg-pink-600 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-cyan-500 p-3 rounded-full hover:bg-cyan-600 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-pink-500 p-3 rounded-full hover:bg-pink-600 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#noticias" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  Noticias
                </a>
              </li>
              <li>
                <a href="#comentarios" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  Comentarios
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-pink-400" size={18} />
                <span className="text-gray-300">info@mtbseriesmdq.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-cyan-400" size={18} />
                <span className="text-gray-300">+54 223 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-pink-400" size={18} />
                <span className="text-gray-300">Mar del Plata, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 MTB SERIES MDQ. Todos los derechos reservados. 
            <span className="mx-2">|</span>
            Desarrollado con ❤️ para la comunidad del mountain bike
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;