"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Play, X } from "lucide-react"

interface Video {
  id: string
  title: string
  thumbnail: string
  duration: string
  description: string
  videoUrl: string
}

const videos: Video[] = [
  {
    id: "1",
    title: "MTB SERIES MDQ 2024 - Resumen Oficial",
    thumbnail: "/video-thumbnail-1.png",
    duration: "3:45",
    description: "Los mejores momentos de la carrera más emocionante del año",
    videoUrl: "/mtb-official-highlights.mp4",
  },
  {
    id: "2",
    title: "Preparación y Entrenamiento",
    thumbnail: "/video-thumbnail-2.png",
    duration: "5:20",
    description: "Consejos de los profesionales para prepararte para la carrera",
    videoUrl: "/mtb-training-tips.mp4",
  },
  {
    id: "3",
    title: "Recorrido Completo - Vista Aérea",
    thumbnail: "/video-thumbnail-3.png",
    duration: "8:15",
    description: "Conoce cada metro del recorrido desde las alturas",
    videoUrl: "/mtb-aerial-course.mp4",
  },
  {
    id: "4",
    title: "Testimonios de Participantes",
    thumbnail: "/video-thumbnail-4.png",
    duration: "4:30",
    description: "Escucha las experiencias de quienes ya vivieron la aventura",
    videoUrl: "/mtb-testimonials.mp4",
  },
]

export function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-geist font-bold text-3xl md:text-4xl mb-4 text-foreground">
            Videos <span className="text-primary">Promocionales</span>
          </h2>
          <p className="font-manrope text-lg text-muted-foreground max-w-2xl mx-auto">
            Sumérgete en la experiencia MTB SERIES MDQ a través de nuestros videos exclusivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>

                  {/* Play button */}
                  <button
                    onClick={() => setSelectedVideo(video)}
                    className="absolute inset-0 flex items-center justify-center"
                    aria-label={`Reproducir ${video.title}`}
                  >
                    <div className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 ml-1" />
                    </div>
                  </button>

                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm font-manrope">
                    {video.duration}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-geist font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="font-manrope text-muted-foreground text-sm">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl mx-4">
              {/* Close button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
                aria-label="Cerrar video"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Video container */}
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <video className="w-full h-full object-cover" controls autoPlay poster={selectedVideo.thumbnail}>
                  <source src={selectedVideo.videoUrl} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>

              {/* Video info */}
              <div className="mt-4 text-center text-white">
                <h3 className="font-geist font-bold text-xl mb-2">{selectedVideo.title}</h3>
                <p className="font-manrope text-gray-300">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
