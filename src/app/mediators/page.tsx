"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, MapPin, Calendar, Star } from "lucide-react"

interface Mediator {
  id: number
  name: string
  location: string
  expertise: string[]
  experience: number
  rating: number
  languages: string[]
  availability: string
  image: string
}

const sampleMediators: Mediator[] = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    location: "Mumbai, Maharashtra",
    expertise: ["Family Law", "Civil Disputes"],
    experience: 12,
    rating: 4.8,
    languages: ["English", "Hindi", "Marathi"],
    availability: "Available next week",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi, NCR",
    expertise: ["Commercial", "Employment"],
    experience: 15,
    rating: 4.9,
    languages: ["English", "Hindi", "Punjabi"],
    availability: "Available this week",
    image: "https://i.pravatar.cc/150?img=2",
  },
]

export default function MediatorsPage() {
  const [mediators] = useState<Mediator[]>(sampleMediators)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])

  const allExpertise = Array.from(
    new Set(mediators.flatMap((m) => m.expertise))
  ).sort()
  const allLanguages = Array.from(
    new Set(mediators.flatMap((m) => m.languages))
  ).sort()

  const toggleExpertise = (expertise: string) => {
    setSelectedExpertise((prev) =>
      prev.includes(expertise)
        ? prev.filter((e) => e !== expertise)
        : [...prev, expertise]
    )
  }

  const toggleLanguage = (language: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((l) => l !== language)
        : [...prev, language]
    )
  }

  const filteredMediators = mediators.filter((mediator) => {
    const matchesSearch =
      searchTerm === "" ||
      mediator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mediator.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesExpertise =
      selectedExpertise.length === 0 ||
      mediator.expertise.some((e) => selectedExpertise.includes(e))

    const matchesLanguages =
      selectedLanguages.length === 0 ||
      mediator.languages.some((l) => selectedLanguages.includes(l))

    return matchesSearch && matchesExpertise && matchesLanguages
  })

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Find a Mediator</h1>

      {/* Search and Filters */}
      <div className="mb-8 grid gap-6 md:grid-cols-[300px_1fr]">
        <div className="space-y-6">
          {/* Search input */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name or location"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-md border bg-background pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>

          {/* Expertise filter */}
          <div>
            <h3 className="mb-2 font-semibold">Expertise</h3>
            <div className="space-y-2">
              {allExpertise.map((expertise) => (
                <label
                  key={expertise}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="checkbox"
                    checked={selectedExpertise.includes(expertise)}
                    onChange={() => toggleExpertise(expertise)}
                    className="rounded border-muted-foreground"
                  />
                  <span className="text-sm">{expertise}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Languages filter */}
          <div>
            <h3 className="mb-2 font-semibold">Languages</h3>
            <div className="space-y-2">
              {allLanguages.map((language) => (
                <label
                  key={language}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="checkbox"
                    checked={selectedLanguages.includes(language)}
                    onChange={() => toggleLanguage(language)}
                    className="rounded border-muted-foreground"
                  />
                  <span className="text-sm">{language}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Mediators list */}
        <div className="space-y-6">
          {filteredMediators.map((mediator) => (
            <div
              key={mediator.id}
              className="flex flex-col gap-6 rounded-lg border bg-background p-6 shadow-sm sm:flex-row"
            >
              <div className="flex-shrink-0">
                <img
                  src={mediator.image}
                  alt={mediator.name}
                  className="h-24 w-24 rounded-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="mb-2 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{mediator.name}</h2>
                  <div className="flex items-center text-yellow-500">
                    <Star className="mr-1 h-4 w-4 fill-current" />
                    <span>{mediator.rating}</span>
                  </div>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {mediator.expertise.map((exp) => (
                    <span
                      key={exp}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
                <div className="mb-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    {mediator.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    {mediator.availability}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="text-sm text-muted-foreground">
                    Languages: {mediator.languages.join(", ")}
                  </div>
                  <Button>Schedule Consultation</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 