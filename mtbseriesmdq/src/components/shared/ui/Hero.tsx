import React from "react";
import { Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 overflow-hidden"
    >
      {/* <div className="container mx-auto w-full"> */}
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen w-full gap-12 py-12 lg:py-0">
        {/* Left content */}
        <div className="flex flex-col items-center justify-center w-full h-full mx-auto px-8  text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              MTB SERIES
              <span className="block text-gray-700">MDQ</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              La carrera de mountain bike más emocionante de Mar del Plata
            </p>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Sierra de los Difuntos - 3ª Edición
            </p>
            <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-6 mb-12 w-full">
              <div className="flex items-center space-x-3 w-full">
                <Calendar className="text-yellow-300" size={24} />
                <span className="text-lg">5 de Octubre de 2025</span>
              </div>
              <div className="flex items-center space-x-3 w-full">
                <MapPin className="text-yellow-300" size={24} />
                <span className="text-lg hidden 2xl:block">
                  <p>Sierra de los Difuntos, </p>
                  <p>Ruta 226 km28.5, </p>
                  <p>Colinas Verdes</p>
                </span>
                <span className="text-lg flex 2xl:hidden">
                  <p>Sierra de los Difuntos, Ruta 226 km28.5, Colinas Verdes</p>
                </span>
              </div>
              <div className="flex items-center space-x-3 w-full">
                <Users className="text-yellow-300" size={24} />
                <span className="text-lg">400+ Participantes</span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <a
                href="https://www.kmitodoapulmon.com.ar/p/mtb-series-mdq-sierra-de-los-difuntos-3.html"
                target="_blank"
                className="bg-white text-pink-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 hover:text-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                ¡Inscribite!
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
        <div className="flex justify-center items-center w-full h-full mx-auto px-8 animate-fade-in-right pb-12 lg:pb-0">
          <div className="relative">
            <a href="#puntos_inscripcion">
              <Image
                src="/images/PuntosInscripcion01.jpg"
                alt="MTB Racing"
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500"
                width={500}
                height={500}
              />
            </a>
            <div className="absolute -bottom-6 -right-6 bg-yellow-300 text-purple-700 px-6 py-3 rounded-2xl font-bold text-lg shadow-lg hover:cursor-pointer transition-all duration-300 transform hover:scale-105 text-center">
              <a
                href="https://www.kmitodoapulmon.com.ar/p/mtb-series-mdq-sierra-de-los-difuntos-3.html"
                target="_blank"
              >
                ¡Únete a la aventura!
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Hero;
