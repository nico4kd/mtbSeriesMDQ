import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full animate-bounce delay-100"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-bounce delay-200"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Left content */}
          <div className="lg:w-1/2 text-white mb-12 lg:mb-0">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                MTB SERIES
                <span className="block text-yellow-300">MDQ</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90">
                La carrera de mountain bike más emocionante de Mar del Plata
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-yellow-300" size={24} />
                  <span className="text-lg">15 de Abril 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-yellow-300" size={24} />
                  <span className="text-lg">Mar del Plata, Argentina</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-yellow-300" size={24} />
                  <span className="text-lg">500+ Participantes</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#comentarios" 
                  className="bg-white text-pink-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 hover:text-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  ¡Únete a la Comunidad!
                </a>
                <a 
                  href="#noticias" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-pink-500 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Ver Noticias
                </a>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="lg:w-1/2 animate-fade-in-right">
            <div className="relative">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3AFdmhRWf5DZQjghvqgghzhcRLlOzTPxrav_g3H-ATZJJj5dazdt0nT8GhGOmVUK9xA&usqp=CAU" 
                alt="MTB Racing" 
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-300 text-purple-700 px-6 py-3 rounded-2xl font-bold text-lg shadow-lg">
                ¡Únete a la aventura!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;