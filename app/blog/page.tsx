"use client"

import { useState } from "react"
import { Calendar, User, Clock, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Cómo Identificar Serpientes Venenosas: Guía Completa",
    excerpt:
      "Aprende las características clave para distinguir entre serpientes venenosas y no venenosas de manera segura.",
    content: "Una guía detallada sobre los signos distintivos de las serpientes venenosas...",
    author: "Dr. María González",
    date: "2024-01-15",
    readTime: "8 min",
    category: "Identificación",
    image: "/serpiente-cascabel.jpg?height=300&width=500",
    featured: true,
  },
  {
    id: 2,
    title: "El Mito de la Serpiente Coral: Verdad vs Ficción",
    excerpt: "Desmitificamos las creencias populares sobre las serpientes coral y su comportamiento real.",
    content: "Exploramos los mitos más comunes sobre las serpientes coral...",
    author: "Prof. Carlos Mendoza",
    date: "2024-01-10",
    readTime: "6 min",
    category: "Educación",
    image: "/tiposcoral.jpg?height=300&width=500",
  },
  {
    id: 3,
    title: "Conservación de Serpientes: Por Qué Son Importantes",
    excerpt: "Descubre el papel crucial que juegan las serpientes en los ecosistemas y por qué debemos protegerlas.",
    content: "Las serpientes desempeñan un papel vital en el equilibrio ecológico...",
    author: "Dra. Ana Rodríguez",
    date: "2024-01-05",
    readTime: "10 min",
    category: "Conservación",
    image: "/mocasin deagua.jpg?height=300&width=500",
  },
  {
    id: 4,
    title: "Primeros Auxilios: Qué Hacer Ante una Mordedura",
    excerpt: "Protocolo de emergencia y primeros auxilios en caso de mordedura de serpiente venenosa.",
    content: "Guía paso a paso para actuar correctamente ante una mordedura...",
    author: "Dr. Luis Herrera",
    date: "2023-12-28",
    readTime: "12 min",
    category: "Seguridad",
    image: "/crotalo occidental.webp?height=300&width=500",
  },
  {
    id: 5,
    title: "Serpientes en la Mitología: Símbolos a Través de la Historia",
    excerpt: "Un viaje por las diferentes culturas y su relación simbólica con las serpientes.",
    content: "Desde la serpiente emplumada hasta la medicina moderna...",
    author: "Prof. Elena Vásquez",
    date: "2023-12-20",
    readTime: "7 min",
    category: "Cultura",
    image: "/vibora de cobre.jpg?height=300&width=500",
  },
  {
    id: 6,
    title: "Fotografía de Serpientes: Tips para Principiantes",
    excerpt: "Consejos prácticos para fotografiar serpientes de manera segura y efectiva.",
    content: "Técnicas y equipos recomendados para la fotografía de serpientes...",
    author: "Miguel Torres",
    date: "2023-12-15",
    readTime: "9 min",
    category: "Fotografía",
    image: "/serpiente-cascabel.jpg?height=300&width=500",
  },
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "Identificación", "Educación", "Conservación", "Seguridad", "Cultura", "Fotografía"]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

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
              <Link href="/videos" className="text-gray-600 hover:text-green-600 transition-colors">
                Videos
              </Link>
              <Link href="/blog" className="text-green-600 font-medium">
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-5xl font-bold text-white mb-2">Blog y Artículos</h2>
          <p className="text-lg text-white">Artículos educativos y noticias sobre el mundo de las serpientes</p>
        </div>

        {/* Search and Filter / Buscar y filtrar */}
        <div className="mb-8 space-y-4  text-white">
          <div className="relative max-w-md bg-white rounded-lg">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-4 h-4" />
            <Input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

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

        {/* Featured Post / Publicación destacada */}
        {featuredPost && selectedCategory === "all" && !searchTerm && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white">Artículo Destacado</h3>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full rounded-lg overflow-hidden ml-8">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-2 md:p-4 flex flex-col justify-between text-green-700">
                  <div className="flex items-center gap-2 mb-3">
                  </div>
                  <h4 className="text-2xl font-bold mb-3">{featuredPost.title}</h4>
                  <p className="text-black text-lg mb-4">{featuredPost.excerpt}</p>

                  <div className="flex items-center gap-4 text-sm text-black mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1 text-black">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString("es-ES")}
                    </div>
                    <div className="flex items-center gap-1 text-black">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <Button className="bg-green-700 text-white">
                    Leer Artículo Completo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid / Cuadrícula de publicaciones regulares */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">
            {searchTerm || selectedCategory !== "all" ? "Resultados" : "Artículos Recientes"}
          </h3>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 mb-4">No se encontraron artículos</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                }}
              >
                Ver todos los artículos
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image src={post.image || "/serpiente-cascabel.jpg"} alt={post.title} fill className="object-cover p-2 rounded-2xl" />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2 text-green-700 font-bold mb-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3 text-black text-md">{post.excerpt}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-black mb-4">
                      <div className="flex items-center gap-1 text-black">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1 text-black">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-black">{new Date(post.date).toLocaleDateString("es-ES")}</span>
                      <Button className="bg-green-700 text-white" size="sm">
                        Leer más
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
