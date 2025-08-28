import React from "react";
import { Star, Award, Trophy } from "lucide-react";
import Image from "next/image";

const Sponsors = () => {
  const sponsors = [
    {
      id: 1,
      name: "GoldenBike Mar del Plata",
      logo: "/images/goldenbike.png",
      category: "Tienda Principal",
      description:
        "Tu tienda de confianza para todo lo que necesitas está en Alberti 1266.",
      href: "https://www.goldenbikemdq.com.ar/",
    },
    {
      id: 2,
      name: "Ziroox",
      logo: "/images/ziroox.png",
      category: "Vestimenta Especializada",
      description:
        "Vestimenta especializada para ciclistas. Mirá todo lo que tiene para ofrecerte en nuestra página web https://www.ziroox.com .",
      href: "https://www.ziroox.com",
    },
    {
      id: 3,
      name: "Seguros Lourdes Vivas",
      logo: "/images/lourdes_vivas.png",
      category: "Seguros",
      description:
        "Protección integral para deportistas de alto rendimiento y seguros generales. Contactos al 223-579-8474 o por mail a lourdesvivasseguros@gmail.com.",
      href: "https://wa.me/5492235798474",
    },
    {
      id: 4,
      name: "El Chakal",
      logo: "/images/el_chakal_andres.png",
      category: "DJ y entretenimiento",
      description:
        "DJ y entretenimiento para la fiesta de cierre del evento. Contactos al 223-512-1234 o por mail a elchakal@gmail.com.",
      href: "https://wa.me/5492235121234",
    },
  ];

  return (
    <section id="sponsors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 pt-4">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Nuestros Sponsors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a las empresas que hacen posible MTB Series MDQ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor.id}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up group hover:cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <a href={sponsor.href} target="_blank">
                <div className="text-center">
                  <div className="w-full h-20 mx-auto mb-4 overflow-hidden bg-white group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={100}
                      height={20}
                      className="w-full h-full object-scale-down"
                    />
                  </div>
                  <span className="inline-block bg-gradient-to-r from-pink-500 to-cyan-400 text-white text-xs px-3 py-1 rounded-full font-semibold mb-3">
                    {sponsor.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-pink-500 transition-colors duration-300">
                    {sponsor.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {sponsor.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Sponsor Benefits */}
        <div className="bg-gradient-to-br from-pink-50 to-cyan-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
            ¿Quieres ser nuestro sponsor?
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 text-pink-500 mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-slate-700">
                Visibilidad
              </h4>
              <p className="text-gray-600">
                Exposición de marca ante más de 400 participantes y sus familias
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 text-cyan-500 mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-slate-700">
                Reconocimiento
              </h4>
              <p className="text-gray-600">
                Presencia en todos los materiales promocionales y redes sociales
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Trophy className="w-12 h-12 text-pink-500 mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-slate-700">
                Networking
              </h4>
              <p className="text-gray-600">
                Conecta con la comunidad deportiva más activa de la región
              </p>
            </div>
          </div>

          <a href="https://wa.me/5492235192080">
            <button className="bg-gradient-to-r from-pink-500 to-cyan-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Información de Sponsorship
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
