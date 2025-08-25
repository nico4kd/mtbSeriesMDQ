import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Récord de inscripciones para MTB Series MDQ 2025",
      excerpt: "Ya superamos las 300 inscripciones y seguimos sumando participantes de toda la región.",
      date: "2025-01-10",
      author: "Equipo MTB",
      image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Inscripciones"
    },
    {
      id: 2,
      title: "Nuevas categorías y premios especiales",
      excerpt: "Incorporamos categorías juveniles y premios exclusivos para fomentar la participación familiar.",
      date: "2025-01-08",
      author: "Organización",
      image: "https://images.pexels.com/photos/1571558/pexels-photo-1571558.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Competencia"
    },
    {
      id: 3,
      title: "Mejoras en el circuito 2025",
      excerpt: "Renovamos sectores técnicos y agregamos nuevos desafíos para todos los niveles.",
      date: "2025-01-05",
      author: "Comité Técnico",
      image: "https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Circuito"
    }
  ];

  return (
    <section id="noticias" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
                    <span>{new Date(news.date).toLocaleDateString('es-AR')}</span>
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
                
                <button className="flex items-center space-x-2 text-pink-500 font-semibold hover:text-cyan-500 transition-colors duration-300">
                  <span>Leer más</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;