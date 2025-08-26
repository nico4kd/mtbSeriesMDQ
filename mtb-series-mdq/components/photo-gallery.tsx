"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryItem {
  id: number
  type: "photo" | "video"
  src: string
  thumbnail: string
  title: string
  description: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: "photo",
    src: "/gallery-photo-1.png",
    thumbnail: "/gallery-photo-1.png",
    title: "Sendero Principal",
    description: "Vista panorámica del sendero principal de MTB Series MDQ",
  },
  {
    id: 2,
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/video-thumbnail-1.png",
    title: "Highlights 2024",
    description: "Los mejores momentos de la temporada anterior",
  },
  {
    id: 3,
    type: "photo",
    src: "/gallery-photo-2.png",
    thumbnail: "/gallery-photo-2.png",
    title: "Descenso Técnico",
    description: "Sección técnica con obstáculos naturales",
  },
  {
    id: 4,
    type: "photo",
    src: "/gallery-photo-3.png",
    thumbnail: "/gallery-photo-3.png",
    title: "Paisaje Costero",
    description: "Vista al mar desde el circuito",
  },
  {
    id: 5,
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/video-thumbnail-2.png",
    title: "Recorrido Aéreo",
    description: "Vista aérea del circuito completo",
  },
  {
    id: 6,
    type: "photo",
    src: "/gallery-photo-4.png",
    thumbnail: "/gallery-photo-4.png",
    title: "Salto Espectacular",
    description: "Uno de los saltos más desafiantes del recorrido",
  },
]

export function PhotoGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item)
    setCurrentIndex(galleryItems.findIndex((i) => i.id === item.id))
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  const nextItem = () => {
    const nextIndex = (currentIndex + 1) % galleryItems.length
    setCurrentIndex(nextIndex)
    setSelectedItem(galleryItems[nextIndex])
  }

  const prevItem = () => {
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length
    setCurrentIndex(prevIndex)
    setSelectedItem(galleryItems[prevIndex])
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Galería de Recorridos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre los paisajes espectaculares y desafíos técnicos que te esperan en MTB Series MDQ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => openModal(item)}
            >
              <CardContent className="p-0 relative">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                      <div className="bg-primary/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                onClick={prevItem}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                onClick={nextItem}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>

              <div className="bg-white rounded-lg overflow-hidden">
                {selectedItem.type === "photo" ? (
                  <img
                    src={selectedItem.src || "/placeholder.svg"}
                    alt={selectedItem.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                ) : (
                  <div className="aspect-video">
                    <iframe
                      src={selectedItem.src}
                      title={selectedItem.title}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
                  <p className="text-muted-foreground">{selectedItem.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
