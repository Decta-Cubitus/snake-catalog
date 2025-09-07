"use client"

import { useState } from "react"
import { Play, Clock, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const videosData = [
  {
    id: 1,
    title: "Crótalo Diamantino Occidental - Comportamiento",
    description: "Observa el comportamiento natural del crótalo diamantino occidental en su hábitat",
    embedId: "R6mnpSxyTq0",
    duration: "8:45",
    views: "125K",
    category: "Comportamiento",
  },
  {
    id: 2,
    title: "Víbora Cabeza de Cobre - Identificación",
    description: "Aprende a identificar la víbora cabeza de cobre y sus características distintivas",
    embedId: "3JrPzbnyVTY",
    duration: "6:32",
    views: "89K",
    category: "Identificación",
  },
  {
    id: 3,
    title: "Mocasín de Agua - Hábitat Acuático",
    description: "Descubre cómo vive y se comporta el mocasín de agua en su entorno natural",
    embedId: "FYonMEqJ4cc",
    duration: "10:15",
    views: "67K",
    category: "Hábitat",
  },
  {
    id: 4,
    title: "Serpiente Coral - Veneno Letal",
    description: "Todo sobre el veneno de la serpiente coral y su mecanismo de acción",
    embedId: "3Uuw8D7VIoc",
    duration: "12:20",
    views: "156K",
    category: "Veneno",
  },
  {
    id: 5,
    title: "Coral vs Falsa Coral - Diferencias Clave",
    description: "Aprende a distinguir entre la serpiente coral venenosa y su imitadora no venenosa",
    embedId: "dQw4w9WgXcQ",
    duration: "7:18",
    views: "203K",
    category: "Comparación",
  },
  {
    id: 6,
    title: "Primeros Auxilios - Mordedura de Serpiente",
    description: "Guía esencial sobre qué hacer en caso de mordedura de serpiente venenosa",
    embedId: "dQw4w9WgXcQ",
    duration: "15:30",
    views: "89K",
    category: "Seguridad",
  },
]

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "Comportamiento", "Identificación", "Hábitat", "Veneno", "Comparación", "Seguridad"]

  const filteredVideos =
    selectedCategory === "all" ? videosData : videosData.filter((video) => video.category === selectedCategory)

  const selectedVideoData = selectedVideo ? videosData.find((video) => video.id === selectedVideo) : null

  return (
    <div className="min-h-screen bg-green-700">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🐍</span>
              </div>
              <h1 className="text-2xl font-bold text-green-800">TodoSerpientes</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
                Inicio
              </Link>
              <Link href="/catalog" className="text-gray-600 hover:text-green-600 transition-colors">
                Catálogo
              </Link>
              <Link href="/gallery" className="text-gray-600 hover:text-green-600 transition-colors">
                Galería
              </Link>
              <Link href="/videos" className="text-green-600 font-medium">
                Videos
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-green-600 transition-colors">
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-5xl font-bold text-white mb-2">Videos relacionados</h2>
          <p className="text-lg text-white mb-2">Documentales y videos informativos sobre serpientes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            {selectedVideoData ? (
              <div className="bg-green-200 rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-video rounded-2xl overflow-hidden m-5">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideoData.embedId}`}
                    title={selectedVideoData.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-black">
                    <Badge className="bg-white text-black" variant="secondary">{selectedVideoData.category}</Badge>
                    <div className="flex items-center text-sm text-black gap-4">
                      <div className="flex items-center gap-1 text-black">
                        <Clock className="w-4 h-4" />
                        {selectedVideoData.duration}
                      </div>
                      <div className="flex items-center gap-1 text-black">
                        <Eye className="w-4 h-4" />
                        {selectedVideoData.views} visualizaciones
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-green-700">{selectedVideoData.title}</h3>
                  <p className="text-black">{selectedVideoData.description}</p>
                </div>
              </div>
            ) : (
              <div className="bg-green-200 rounded-lg shadow-lg p-8 text-center">
                <Play className="w-16 h-16 mx-auto mb-4 text-red-500" />
                <h3 className="text-xl font-semibold mb-2 text-black">Ver video</h3>
                <p className="text-black mb-4">Elige un video de la lista para comenzar a reproducir</p>
              </div>
            )}
          </div>

          {/* Video List */}
          <div className="space-y-6">
            {/* Category Filter */}
            <div>
              <h4 className="font-semibold mb-3 bg-green-200 bg-opacity-75 p-4 rounded-lg text-black">Categorías</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="capitalize"
                  >
                    {category === "all" ? "Todos" : category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Video List */}
            <div>
              <h4 className="font-semibold mb-3 bg-green-200 bg-opacity-75 p-4 rounded-lg text-black">Lista de Videos ({filteredVideos.length})</h4>
              <div className="space-y-3 max-h-90 overflow-y-auto bg-green-700 bg-opacity-75 rounded-lg p-6 text-white">
                {filteredVideos.map((video) => (
                  <Card
                    key={video.id}
                    className={`cursor-pointer transition-all bg-green-200 hover:bg-white hover:text-green-700 hover:shadow-md${selectedVideo === video.id ? "ring-2 ring-green-500" : ""}`}
                    onClick={() => setSelectedVideo(video.id)}
                  >
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-start gap-3 text-green-700">
                        <div className="relative flex-shrink-0 bg-black bg-opacity-75 rounded-lg overflow-hidden h-14 w-20">
                          <div className="w-20 h-14 bg-green-700 bg-opacity-75 rounded flex items-center justify-center">
                            <Play className="w-6 h-6 text-red-500" />
                          </div>
                          <div className="absolute bottom-0 right-0 bg-green-700 bg-opacity-75 text-black text-xs rounded-full p-0 px-1">
                            {video.duration}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-medium text-xs line-clamp-2 mb-1">{video.title}</h5>
                          <div className="flex items-center gap-2 text-xs text-black">
                            <Badge variant="outline" className="bg-white text-black text-xs">
                              {video.category}
                            </Badge>
                            <span>{video.views} vistas</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
