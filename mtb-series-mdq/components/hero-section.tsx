"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Calendar, MapPin, Users, X } from "lucide-react"

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/mountain-bike-rider-on-scenic-trail-with-mountains.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-geist font-bold text-5xl md:text-7xl mb-6 animate-fade-in-up">
            <span className="text-primary">MTB SERIES</span>
            <br />
            <span className="text-secondary">MAR DEL PLATA</span>
          </h1>

          <p className="font-manrope text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-up animation-delay-200">
            Únete a la aventura más emocionante del mountain bike en la costa atlántica
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-manrope font-semibold text-lg px-8 py-4"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Inscribirse Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black font-manrope font-semibold text-lg px-8 py-4 bg-transparent"
              onClick={() => setIsVideoOpen(true)}
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Video
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-6 w-6 text-secondary mr-2" />
                <span className="font-geist font-bold text-2xl">25KM</span>
              </div>
              <p className="font-manrope text-gray-300">Recorrido Épico</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-secondary mr-2" />
                <span className="font-geist font-bold text-2xl">500+</span>
              </div>
              <p className="font-manrope text-gray-300">Participantes</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="h-6 w-6 text-secondary mr-2" />
                <span className="font-geist font-bold text-2xl">2025</span>
              </div>
              <p className="font-manrope text-gray-300">Próxima Edición</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4">
            {/* Close button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              aria-label="Cerrar video"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Video container */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <video className="w-full h-full object-cover" controls autoPlay poster="/mtb-video-poster.png">
                <source src="/mtb-promotional-video.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>

            {/* Video info */}
            <div className="mt-4 text-center text-white">
              <h3 className="font-geist font-bold text-xl mb-2">MTB SERIES MDQ 2024 - Highlights</h3>
              <p className="font-manrope text-gray-300">
                Revive los mejores momentos de la edición anterior y prepárate para la aventura de 2025
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
