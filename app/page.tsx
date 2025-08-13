"use client"

import { useState } from "react"
import { Search, Eye, Play, BookOpen, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const featuredSnakes = [
  {
    id: 1,
    name: "Crótalo Diamantino Occidental",
    scientificName: "Crotalus atrox",
    region: "Sur de Estados Unidos, México",
    venomous: true,
    habitat: "Desiertos y praderas",
    image: "/crotalo occidental.webp?height=300&width=400",
  },
  {
    id: 2,
    name: "Víbora Cabeza de Cobre",
    scientificName: "Agkistrodon contortrix",
    region: "Sur de Estados Unidos, México",
    venomous: true,
    habitat: "Terrestres y semiacuáticas",
    image: "/Vibora de Cobre.jpg?height=300&width=400",
  },
  {
    id: 3,
    name: "Mocasín de Agua",
    scientificName: "Agkistrodon piscivorus",
    region: "Sureste de Estados Unidos",
    venomous: true,
    habitat: "Semiacuáticas",
    image: "/mocasin deagua.jpg?height=300&width=400",
  },
]

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🐍</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">TodoSerpientes</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-green-600 font-medium">
                Inicio
              </Link>
              <Link href="/catalog" className="text-gray-600 hover:text-green-600 transition-colors">
                Catálogo
              </Link>
              <Link href="/gallery" className="text-gray-600 hover:text-green-600 transition-colors">
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Descubre el Fascinante Mundo de las Serpientes</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Todo lo que necesitas saber sobre serpientes: identificación, hábitat, comportamiento y más
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Search className="w-5 h-5 mr-2" />
                Explorar Catálogo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Videos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar serpientes por nombre, región o características..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Snakes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Serpientes Destacadas</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conoce algunas de las serpientes más fascinantes del continente americano
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSnakes.map((snake) => (
              <Card key={snake.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={snake.image || "/placeholder.svg"} alt={snake.name} fill className="object-cover" />
                  {snake.venomous && <Badge className="absolute top-2 right-2 bg-red-500">Venenosa</Badge>}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{snake.name}</CardTitle>
                  <CardDescription className="italic">{snake.scientificName}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Región:</strong> {snake.region}
                    </p>
                    <p>
                      <strong>Hábitat:</strong> {snake.habitat}
                    </p>
                  </div>
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Detalles
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Explora Nuestro Contenido</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/gallery" className="group">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <ImageIcon className="w-12 h-12 mx-auto mb-4 text-green-600 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-semibold mb-2">Galería de Imágenes</h4>
                  <p className="text-gray-600">Fotografías de alta calidad de diferentes especies</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/videos" className="group">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <Play className="w-12 h-12 mx-auto mb-4 text-green-600 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-semibold mb-2">Videos Educativos</h4>
                  <p className="text-gray-600">Documentales y videos informativos</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/blog" className="group">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 text-green-600 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-semibold mb-2">Blog y Artículos</h4>
                  <p className="text-gray-600">Artículos detallados y noticias</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🐍</span>
                </div>
                <h4 className="text-xl font-bold">TodoSerpientes</h4>
              </div>
              <p className="text-gray-400">Tu fuente confiable de información sobre serpientes</p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Navegación</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/catalog" className="hover:text-white transition-colors">
                    Catálogo
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-white transition-colors">
                    Galería
                  </Link>
                </li>
                <li>
                  <Link href="/videos" className="hover:text-white transition-colors">
                    Videos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Recursos</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Síguenos</h5>
              <p className="text-gray-400 text-sm">Mantente actualizado con las últimas noticias sobre serpientes</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TodoSerpientes - Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
