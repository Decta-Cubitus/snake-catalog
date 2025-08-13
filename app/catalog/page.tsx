"use client"

import { useState, useMemo } from "react"
import { Search, Filter, MapPin, Droplets, Utensils, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import Link from "next/link"

const snakesData = [
  {
    id: 1,
    name: "Crótalo Diamantino Occidental",
    scientificName: "Crotalus atrox",
    region: "Sur de Estados Unidos, México",
    continent: "america",
    venomous: true,
    habitat: "Desiertos y praderas",
    diet: "Aves, lagartos, ratones",
    reproduction: "Ovovivíparas",
    image: "/crotalo occidental.webp?height=300&width=400",
    description: "El crótalo diamante occidental es una de las víboras más agresivas y peligrosas de Estados Unidos.",
  },
  {
    id: 2,
    name: "Víbora Cabeza de Cobre",
    scientificName: "Agkistrodon contortrix",
    region: "Sur de Estados Unidos, México, Norte de Costa Rica",
    continent: "america",
    venomous: true,
    habitat: "Terrestres y semiacuáticas",
    diet: "Aves, lagartos, ratones",
    reproduction: "Ovovivíparas",
    image: "/Vibora de Cobre.jpg?height=300&width=400",
    description: "Serpiente venenosa conocida por su coloración cobriza característica.",
  },
  {
    id: 3,
    name: "Mocasín de Agua",
    scientificName: "Agkistrodon piscivorus",
    region: "Sureste de Estados Unidos",
    continent: "america",
    venomous: true,
    habitat: "Terrestres y semiacuáticas",
    diet: "Peces, lagartijas, tortugas, ranas, otras serpientes",
    reproduction: "Ovovivíparas",
    image: "/mocasin deagua.jpg?height=300&width=400",
    description: "También conocida como boca de algodón, es una serpiente semiacuática muy agresiva.",
  },
  {
    id: 4,
    name: "Serpiente Coral",
    scientificName: "Micrurus nigrocinctus",
    region: "América Central y del Sur",
    continent: "america",
    venomous: true,
    habitat: "Bosques tropicales",
    diet: "Reptiles, serpientes, ranas",
    reproduction: "Ovíparas",
    image: "/serpiente-coral.webp?height=300&width=400",
    description: "Serpiente altamente venenosa con patrones de colores distintivos.",
  },
]

export default function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedContinent, setSelectedContinent] = useState("all")
  const [showVenomousOnly, setShowVenomousOnly] = useState(false)
  const [selectedHabitat, setSelectedHabitat] = useState("all")

  const filteredSnakes = useMemo(() => {
    return snakesData.filter((snake) => {
      const matchesSearch =
        snake.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        snake.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        snake.region.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesContinent = selectedContinent === "all" || snake.continent === selectedContinent
      const matchesVenomous = !showVenomousOnly || snake.venomous
      const matchesHabitat =
        selectedHabitat === "all" || snake.habitat.toLowerCase().includes(selectedHabitat.toLowerCase())

      return matchesSearch && matchesContinent && matchesVenomous && matchesHabitat
    })
  }, [searchTerm, selectedContinent, showVenomousOnly, selectedHabitat])

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
              <Link href="/catalog" className="text-green-600 font-medium">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Catálogo de Serpientes</h2>
          <p className="text-lg text-gray-600">Explora nuestra completa base de datos de serpientes</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Buscar serpientes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedContinent} onValueChange={setSelectedContinent}>
              <SelectTrigger>
                <SelectValue placeholder="Continente" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los continentes</SelectItem>
                <SelectItem value="america">América</SelectItem>
                <SelectItem value="asia">Asia</SelectItem>
                <SelectItem value="europe">Europa</SelectItem>
                <SelectItem value="africa">África</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedHabitat} onValueChange={setSelectedHabitat}>
              <SelectTrigger>
                <SelectValue placeholder="Hábitat" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los hábitats</SelectItem>
                <SelectItem value="desierto">Desierto</SelectItem>
                <SelectItem value="bosque">Bosque</SelectItem>
                <SelectItem value="acuático">Acuático</SelectItem>
                <SelectItem value="pradera">Pradera</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center space-x-2">
              <Checkbox id="venomous" checked={showVenomousOnly} onCheckedChange={setShowVenomousOnly} />
              <label htmlFor="venomous" className="text-sm font-medium">
                Solo venenosas
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Mostrando {filteredSnakes.length} de {snakesData.length} serpientes
            </p>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Más filtros
            </Button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSnakes.map((snake) => (
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
                <p className="text-sm text-gray-600 mb-4">{snake.description}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{snake.region}</span>
                  </div>
                  <div className="flex items-center">
                    <Droplets className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{snake.habitat}</span>
                  </div>
                  <div className="flex items-center">
                    <Utensils className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{snake.diet}</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{snake.reproduction}</span>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  Ver Detalles Completos
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSnakes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 mb-4">No se encontraron serpientes con los filtros seleccionados</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedContinent("all")
                setShowVenomousOnly(false)
                setSelectedHabitat("all")
              }}
            >
              Limpiar filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
