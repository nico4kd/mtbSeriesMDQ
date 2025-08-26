import React, { useState } from "react";
import { User, Star, ThumbsUp, MessageCircle } from "lucide-react";

const Comments = () => {
  const [newComment, setNewComment] = useState("");
  const [selectedRating, setSelectedRating] = useState(5);
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "María González",
      comment:
        "¡Increíble evento el año pasado! Ya estoy inscrita para 2025. El circuito es desafiante pero muy divertido.",
      rating: 5,
      date: "2025-01-12",
      likes: 12,
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      comment:
        "Excelente organización y un ambiente súper profesional. Los premios estuvieron geniales y la atención médica fue impecable.",
      rating: 5,
      date: "2025-01-11",
      likes: 8,
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      id: 3,
      name: "Ana Martín",
      comment:
        "Fue mi primera carrera de MTB y me encantó. La organización fue perfecta y todos muy amables. ¡Volveré seguro!",
      rating: 4,
      date: "2025-01-10",
      likes: 15,
      avatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
  ]);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        name: "Usuario Nuevo",
        comment: newComment,
        rating: selectedRating,
        date: new Date().toISOString().split("T")[0],
        likes: 0,
        avatar:
          "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=100",
      };
      setComments([comment, ...comments]);
      setNewComment("");
      setSelectedRating(5);
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <section id="comentarios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Comentarios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lo que dicen nuestros participantes sobre MTB Series MDQ
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Comment Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Deja tu comentario
            </h3>
            <form onSubmit={handleSubmitComment} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Calificación
                </label>
                <div className="flex space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setSelectedRating(star)}
                      className="focus:outline-none transition-all duration-200 hover:scale-110"
                    >
                      <Star
                        size={32}
                        className={
                          star <= selectedRating
                            ? "text-yellow-400 fill-current hover:text-yellow-500"
                            : "text-gray-300 hover:text-yellow-300"
                        }
                      />
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Has seleccionado {selectedRating} estrella
                  {selectedRating !== 1 ? "s" : ""}
                </p>
              </div>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Comparte tu experiencia con MTB Series MDQ..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-none"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-cyan-400 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="inline w-5 h-5 mr-2" />
                Publicar Comentario
              </button>
            </form>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment, index) => (
              <div
                key={comment.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={comment.avatar}
                    alt={comment.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">
                        {comment.name}
                      </h4>
                      <span className="text-sm text-gray-500">
                        {new Date(comment.date).toLocaleDateString("es-AR")}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex space-x-1">
                        {renderStars(comment.rating)}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({comment.rating}/5)
                      </span>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {comment.comment}
                    </p>

                    <button className="flex items-center space-x-2 text-pink-500 hover:text-cyan-500 transition-colors duration-300">
                      <ThumbsUp size={16} />
                      <span className="text-sm font-semibold">
                        {comment.likes} Me gusta
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-br from-pink-500 to-cyan-400 rounded-2xl p-8 mt-12 text-white text-center">
            <h3 className="text-2xl font-bold mb-6">
              Estadísticas de Satisfacción
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <p className="text-lg opacity-90">Satisfacción General</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.8/5</div>
                <p className="text-lg opacity-90">Calificación Promedio</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">400+</div>
                <p className="text-lg opacity-90">Participantes Felices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
