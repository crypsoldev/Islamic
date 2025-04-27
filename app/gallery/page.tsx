"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/language-context"

export default function GalleryPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(null)

  // Gallery categories
  const categories = [
    { id: "campus", label: "Campus" },
    { id: "classes", label: "Classes" },
    { id: "events", label: "Events" },
  ]

  // Gallery images
  const galleryImages = {
    campus: [
      {
        id: 1,
        src: "/images/madrasa-campus.jpeg",
        alt: "Madrasa Campus",
        description: "Panoramic view of Fayzul Ulum Madrasa campus with mosque and educational buildings",
      },
      {
        id: 2,
        src: "/images/main-building-front.jpeg",
        alt: "Main Building Front View",
        description: "Front view of our main educational building",
      },
      {
        id: 3,
        src: "/images/main-building-side.jpeg",
        alt: "Main Building Side View",
        description: "Side view of our main educational building",
      },
      {
        id: 4,
        src: "/images/entrance-gate.jpeg",
        alt: "Entrance Gate",
        description: "The main entrance gate to Fayzul Ulum Madrasa",
      },
    ],
    classes: [
      {
        id: 1,
        src: "/images/quran-class-1.jpeg",
        alt: "Boys Quran Class",
        description: "Boys studying Quran in our traditional classroom setting",
      },
      {
        id: 2,
        src: "/images/quran-class-2.jpeg",
        alt: "Quran Memorization Class",
        description: "Students memorizing Quran with dedicated instructors",
      },
      {
        id: 3,
        src: "/images/quran-class-3.jpeg",
        alt: "Quran Learning",
        description: "Students in our bright classroom environment learning Quran",
      },
      {
        id: 4,
        src: "/images/female-students.jpeg",
        alt: "Girls Islamic Studies",
        description: "Female students studying Islamic texts in a dedicated classroom",
      },
      {
        id: 5,
        src: "/images/arabic-practice.jpeg",
        alt: "Arabic Writing Practice",
        description: "Students practicing Arabic writing on traditional slates",
      },
      {
        id: 6,
        src: "/images/islamic-books.jpeg",
        alt: "Islamic Study Materials",
        description: "Collection of Islamic textbooks used in our curriculum",
      },
    ],
    events: [
      {
        id: 1,
        src: "/images/quran-teaching.jpeg",
        alt: "Quran Competition",
        description: "Annual Quran recitation competition",
      },
      {
        id: 2,
        src: "/images/adult-online-class.jpeg",
        alt: "Adult Education Program",
        description: "Special programs for adult Islamic education",
      },
    ],
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Photo Gallery</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore images of our campus, classes, and events at Fayzul Ulum Madrasa
        </p>
      </div>

      <Tabs defaultValue="campus" className="w-full mb-10">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages[category.id].map((image) => (
                <Dialog key={image.id}>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                      <div className="relative h-64 w-full">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="transition-transform hover:scale-105 object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <p className="font-medium">{image.alt}</p>
                        <p className="text-sm text-muted-foreground">{image.description}</p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <div className="relative h-[70vh] w-full">
                      <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-contain" />
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="font-medium text-lg">{image.alt}</h3>
                      <p className="text-muted-foreground">{image.description}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Share Your Photos</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Are you a current or former student of Fayzul Ulum Madrasa? We'd love to see your photos! Send them to us and
          we may feature them in our gallery.
        </p>
        <Button>Submit Photos</Button>
      </div>
    </div>
  )
}
