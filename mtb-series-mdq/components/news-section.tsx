"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  readTime: string
  category: string
  featured: boolean
}

const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "MTB SERIES MDQ 2025: Nuevas Categorías y Premios Récord",
    excerpt:
      "La próxima edición incluirá categorías juveniles y femeninas con premios que superan los $500.000 pesos argentinos.",
    content: "La organización de MTB SERIES MDQ anunció importantes novedades para la edición 2025...",
    image: "/news-image-1.jpg",
    author: "Carlos Mendez",
    date: "2024-12-15",
    readTime: "3 min",
    category: "Competencia",
    featured: true,
  },
  {
    id: "2",
    title: "Inscripciones Abiertas: Early Bird hasta Enero",
    excerpt: "Aprovecha el descuento del 30% en inscripciones anticipadas. Cupos limitados disponibles.",
    content: "Las inscripciones para MTB SERIES MDQ 2025 ya están abiertas con precios especiales...",
    image: "/news-image-2.jpg",
    author: "Ana Rodriguez",
    date: "2024-12-10",
    readTime: "2 min",
    category: "Inscripciones",
    featured: false,
  },
  {
    id: "3",
    title: "Nuevo Recorrido: Desafíos Técnicos en Sierra de los Padres",
    excerpt: "El trazado 2025 incluye sectores técnicos inéditos que pondrán a prueba a los mejores riders.",
    content: "Los organizadores han diseñado un recorrido completamente renovado...",
    image: "/news-image-3.jpg",
    author: "Miguel Torres",
    date: "2024-12-08",
    readTime: "4 min",
    category: "Recorrido",
    featured: false,
  },
  {
    id: "4",
    title: "Sponsors Oficiales: Nuevas Marcas se Suman al Evento",
    excerpt: "Reconocidas marcas internacionales de MTB confirman su participación como sponsors oficiales.",
    content: "La lista de sponsors crece con marcas de prestigio internacional...",
    image: "/news-image-4.jpg",
    author: "Laura Fernandez",
    date: "2024-12-05",
    readTime: "3 min",
    category: "Sponsors",
    featured: false,
  },
  {
    id: "5",
    title: "Entrenamiento Gratuito: Clínicas Preparatorias",
    excerpt: "Sesiones de entrenamiento gratuitas con profesionales para prepararte para la carrera.",
    content: "La organización ofrece clínicas de entrenamiento gratuitas...",
    image: "/news-image-5.jpg",
    author: "Roberto Silva",
    date: "2024-12-01",
    readTime: "2 min",
    category: "Entrenamiento",
    featured: false,
  },
  {
    id: "6",
    title: "Resultados MTB SERIES MDQ 2024: Un Año Récord",
    excerpt: "Revive los mejores momentos y resultados de la edición 2024 que batió todos los récords.",
    content: "La edición 2024 de MTB SERIES MDQ fue histórica...",
    image: "/news-image-6.jpg",
    author: "Diego Martinez",
    date: "2024-11-28",
    readTime: "5 min",
    category: "Resultados",
    featured: false,
  },
]

export function NewsSection() {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 3

  const featuredArticle = newsArticles.find((article) => article.featured)
  const regularArticles = newsArticles.filter((article) => !article.featured)

  const totalPages = Math.ceil(regularArticles.length / articlesPerPage)
  const startIndex = (currentPage - 1) * articlesPerPage
  const currentArticles = regularArticles.slice(startIndex, startIndex + articlesPerPage)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Competencia: "bg-primary text-primary-foreground",
      Inscripciones: "bg-secondary text-secondary-foreground",
      Recorrido: "bg-accent text-accent-foreground",
      Sponsors: "bg-muted text-muted-foreground",
      Entrenamiento: "bg-primary/80 text-primary-foreground",
      Resultados: "bg-secondary/80 text-secondary-foreground",
    }
    return colors[category] || "bg-muted text-muted-foreground"
  }

  return (
    <section id="noticias" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-geist font-bold text-3xl md:text-4xl mb-4 text-foreground">
            Últimas <span className="text-primary">Noticias</span>
          </h2>
          <p className="font-manrope text-lg text-muted-foreground max-w-2xl mx-auto">
            Mantente al día con todas las novedades, actualizaciones y eventos de MTB SERIES MDQ
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredArticle.image || "/placeholder.svg?height=400&width=600"}
                    alt={featuredArticle.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={getCategoryColor(featuredArticle.category)}>{featuredArticle.category}</Badge>
                      <Badge variant="outline" className="text-primary border-primary">
                        Destacado
                      </Badge>
                    </div>
                    <h3 className="font-geist font-bold text-2xl mb-3 text-foreground hover:text-primary transition-colors cursor-pointer">
                      {featuredArticle.title}
                    </h3>
                    <p className="font-manrope text-muted-foreground mb-4 leading-relaxed">{featuredArticle.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span className="font-manrope">{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span className="font-manrope">{formatDate(featuredArticle.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span className="font-manrope">{featuredArticle.readTime}</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                      onClick={() => setSelectedArticle(featuredArticle)}
                    >
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative">
                <img
                  src={article.image || "/placeholder.svg?height=200&width=400"}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={getCategoryColor(article.category)}>{article.category}</Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-geist font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors cursor-pointer line-clamp-2">
                  {article.title}
                </h3>
                <p className="font-manrope text-muted-foreground text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span className="font-manrope">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span className="font-manrope">{formatDate(article.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span className="font-manrope">{article.readTime}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent"
                  onClick={() => setSelectedArticle(article)}
                >
                  Leer artículo completo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </Button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className={currentPage === page ? "bg-primary text-primary-foreground" : ""}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Siguiente
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Article Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedArticle.image || "/placeholder.svg?height=300&width=600"}
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                  aria-label="Cerrar artículo"
                >
                  <ArrowRight className="h-5 w-5 rotate-45" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className={getCategoryColor(selectedArticle.category)}>{selectedArticle.category}</Badge>
                </div>
                <h2 className="font-geist font-bold text-2xl mb-4 text-foreground">{selectedArticle.title}</h2>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span className="font-manrope">{selectedArticle.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span className="font-manrope">{formatDate(selectedArticle.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span className="font-manrope">{selectedArticle.readTime}</span>
                  </div>
                </div>
                <div className="font-manrope text-foreground leading-relaxed">
                  <p className="mb-4 text-lg font-medium">{selectedArticle.excerpt}</p>
                  <p>{selectedArticle.content}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
