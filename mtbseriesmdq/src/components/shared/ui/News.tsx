import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Apertura de Inscripciones 2025",
      excerpt:
        "¡Ya están abiertas las inscripciones para el Desafío MTB 2025! No te pierdas la oportunidad de participar en la carrera más desafiante del año.",
      date: "2025/10/23",
      author: "MTB Series MDQ",
      image: `/images/flyer.jpg`,
      category: "Inscripciones",
      linkText: "Inscribite ya!",
      linkUrl:
        "https://www.kmitodoapulmon.com.ar/p/mtb-series-mdq-sierra-de-los-difuntos-3.html",
    },
    {
      id: 2,
      title: "Nuevas categorías y premios especiales",
      excerpt:
        "Incorporamos categorías femeninas y sorpresas exclusivas para fomentar la participación familiar.",
      date: "2025-08-26",
      author: "Organización",
      image: `/images/Categorias1.jpeg`,
      category: "Competencia",
      linkText: "Más información",
      linkUrl:
        "https://www.kmitodoapulmon.com.ar/p/mtb-series-mdq-sierra-de-los-difuntos-3.html",
    },
    {
      id: 3,
      title: "Nuevo Circuito Revelado",
      excerpt:
        "Descubre el increíble nuevo circuito que desafiará a ciclistas de todos los niveles con paisajes únicos y obstáculos emocionantes.",
      date: "2025-08-05",
      author: "Comité Técnico",
      image: `/images/Mapas.jpg`,
      category: "Circuito",
      linkText: "Más información",
      linkUrl:
        "https://www.kmitodoapulmon.com.ar/p/mtb-series-mdq-sierra-de-los-difuntos-3.html",
    },
  ];

  return (
    <section id="noticias" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 pt-4">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Últimas Noticias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente al día con todas las novedades de MTB Series MDQ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <article
              key={news.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-pink-500 to-cyan-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {news.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>
                      {new Date(news.date).toLocaleDateString("es-AR")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User size={16} />
                    <span>{news.author}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-pink-500 transition-colors duration-300">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {news.excerpt}
                </p>

                <a
                  href={news.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center space-x-2 text-pink-500 font-semibold hover:text-cyan-500 transition-colors duration-300">
                    <span>{news.linkText}</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
