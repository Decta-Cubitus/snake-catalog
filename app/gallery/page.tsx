"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const galleryImages = [
  {
    id: 1,
    src: "/crotalo occidental.webp?height=400&width=600",
    alt: "Crótalo Diamantino Occidental",
    title: "Crótalo Diamantino Occidental",
    description: "Serpiente venenosa característica del suroeste de Estados Unidos",
    category: "Venenosas",
  },
  {
    id: 2,
    src: "/Vibora de Cobre.jpg?height=400&width=600",
    alt: "Víbora Cabeza de Cobre",
    title: "Víbora Cabeza de Cobre",
    description: "Conocida por su coloración cobriza distintiva",
    category: "Venenosas",
  },
  {
    id: 3,
    src: "/mocasin deagua.jpg?height=400&width=600",
    alt: "Mocasín de Agua",
    title: "Mocasín de Agua",
    description: "Serpiente semiacuática del sureste de Estados Unidos",
    category: "Venenosas",
  },
  {
    id: 4,
    src: "/serpiente-coral.webp?height=400&width=600",
    alt: "Serpiente Coral",
    title: "Serpiente Coral",
    description: "Serpiente altamente venenosa con patrones coloridos",
    category: "Venenosas",
  },
  {
    id: 5,
    src: "/falsacoral.jpg?height=400&width=600",
    alt: "Falsa Coral",
    title: "Falsa Coral",
    description: "Serpiente no venenosa que imita a la coral verdadera",
    category: "No Venenosas",
  },
  {
    id: 6,
    src: "/tiposcoral.jpg?height=400&width=600",
    alt: "Comparación Coral vs Falsa Coral",
    title: "Coral vs Falsa Coral",
    description: "Comparación visual entre especies venenosas y no venenosas",
    category: "Comparaciones",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "Venenosas", "No Venenosas", "Comparaciones"]

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex].id)
  }

  const selectedImageData = selectedImage ? filteredImages.find((img) => img.id === selectedImage) : null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🐍</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">TodoSerpientes</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
                Inicio
              </Link>
              <Link href="/catalog" className="text-gray-600 hover:text-green-600 transition-colors">
                Catálogo
              </Link>
              <Link href="/gallery" className="text-green-600 font-medium">
                Galería
              </Link>
              <Link href="/videos" className="text-gray-600 hover:text-green-600 transition-colors">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Galería de Imágenes</h2>
          <p className="text-lg text-gray-600">Fotografías de alta calidad de diferentes especies de serpientes</p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category === "all" ? "Todas" : category}
              </Button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openLightbox(image.id)}
            >
              <div className="relative h-64">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <Badge className="absolute top-2 right-2 bg-green-600">{image.category}</Badge>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
                <p className="text-gray-600 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && selectedImageData && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white hover:bg-opacity-70"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white hover:bg-opacity-70"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white hover:bg-opacity-70"
                onClick={() => navigateImage("next")}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Image */}
              <div className="relative">
                <Image
                  src={selectedImageData.src || "/placeholder.svg"}
                  alt={selectedImageData.alt}
                  width={800}
                  height={600}
                  className="max-w-full max-h-[80vh] object-contain"
                />

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">{selectedImageData.title}</h3>
                  <p className="text-gray-300">{selectedImageData.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
