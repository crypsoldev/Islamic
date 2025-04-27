"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Book, GraduationCap, Heart, History, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">{t("about.title")}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">{t("about.subtitle")}</p>
      </div>

      <Tabs defaultValue="mission" className="w-full mb-10">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="mission">{t("about.mission")}</TabsTrigger>
          <TabsTrigger value="history">{t("about.history")}</TabsTrigger>
          <TabsTrigger value="team">{t("about.team")}</TabsTrigger>
          <TabsTrigger value="facilities">{t("about.facilities")}</TabsTrigger>
        </TabsList>

        <TabsContent value="mission">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">{t("about.mission.title")}</h2>
              <p className="text-muted-foreground mb-6">{t("about.mission.description")}</p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                    <Book className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t("about.mission.quran.title")}</h3>
                    <p className="text-sm text-muted-foreground">{t("about.mission.quran.description")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t("about.mission.orphan.title")}</h3>
                    <p className="text-sm text-muted-foreground">{t("about.mission.orphan.description")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t("about.mission.community.title")}</h3>
                    <p className="text-sm text-muted-foreground">{t("about.mission.community.description")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/quran-class-1.jpeg" alt="Our Mission" fill className="object-cover" />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/madrasa-campus.jpeg" alt="Our History" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold mb-4">{t("about.history.title")}</h2>
              <p className="text-muted-foreground mb-6">{t("about.history.description")}</p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                    <History className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t("about.history.founding.title")}</h3>
                    <p className="text-sm text-muted-foreground">{t("about.history.founding.description")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t("about.history.orphan.title")}</h3>
                    <p className="text-sm text-muted-foreground">{t("about.history.orphan.description")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                    <GraduationCap className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t("about.history.growth.title")}</h3>
                    <p className="text-sm text-muted-foreground">{t("about.history.growth.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="team">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">{t("about.team.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("about.team.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center">
                <div className="relative mx-auto mt-6 h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src={member.image || "/placeholder.svg?height=128&width=128"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">{t("about.teachers.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("about.teachers.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {teachers.map((teacher) => (
              <Card key={teacher.id} className="text-center">
                <div className="relative mx-auto mt-6 h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src={teacher.image || "/placeholder.svg?height=96&width=96"}
                    alt={teacher.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{teacher.name}</CardTitle>
                  <CardDescription>{teacher.subject}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="facilities">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">{t("about.facilities.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("about.facilities.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <div className="relative h-48 w-full">
                <Image
                  src="/images/main-building-front.jpeg"
                  alt="Main Building"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Main Building</CardTitle>
                <CardDescription>
                  Our primary educational facility with classrooms and administrative offices
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <div className="relative h-48 w-full">
                <Image
                  src="/images/campus-view.jpeg"
                  alt="Campus Overview"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Campus Overview</CardTitle>
                <CardDescription>Aerial view of our campus surrounded by palm trees</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <div className="relative h-48 w-full">
                <Image
                  src="/images/entrance-gate.jpeg"
                  alt="Entrance Gate"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Entrance Gate</CardTitle>
                <CardDescription>The main entrance to our madrasa</CardDescription>
              </CardHeader>
            </Card>
            {facilities.slice(3).map((facility) => (
              <Card key={facility.id}>
                <div className="relative h-48 w-full">
                  <Image
                    src={facility.image || "/placeholder.svg?height=200&width=400"}
                    alt={facility.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{facility.name}</CardTitle>
                  <CardDescription>{facility.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 md:p-8 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">{t("about.achievements.title")}</h2>
            <p className="text-muted-foreground mb-6">{t("about.achievements.description")}</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <GraduationCap className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <span className="font-medium">{t("about.achievements.huffaz.title")}</span>
                  <p className="text-sm text-muted-foreground">{t("about.achievements.huffaz.description")}</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <span className="font-medium">{t("about.achievements.orphans.title")}</span>
                  <p className="text-sm text-muted-foreground">{t("about.achievements.orphans.description")}</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Users className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <span className="font-medium">{t("about.achievements.community.title")}</span>
                  <p className="text-sm text-muted-foreground">{t("about.achievements.community.description")}</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image src="/images/arabic-practice.jpeg" alt="Our Achievements" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold mb-4">{t("about.testimonials.title")}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">{t("about.testimonials.subtitle")}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-muted/40">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=48&width=48" alt="Testimonial" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-green-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">{t("about.join.title")}</h2>
        <p className="max-w-2xl mx-auto mb-6">{t("about.join.description")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="secondary">
            <Link href="/contact">{t("about.join.contact")}</Link>
          </Button>
          <Button asChild variant="outline" className="text-white border-white hover:bg-white/20">
            <Link href="/donate">{t("about.join.support")}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

const teamMembers = [
  {
    id: 1,
    name: "Imam Abdullah",
    role: "Director",
    bio: "Imam Abdullah has been leading Fayzul Ulum Madrasa since its inception. With over 20 years of experience in Islamic education, he brings wisdom and vision to our institution.",
    image: "/placeholder.svg?height=128&width=128",
  },
  {
    id: 2,
    name: "Ustadh Muhammad",
    role: "Head of Education",
    bio: "Ustadh Muhammad oversees all educational programs at the madrasa. He is a Hafiz and holds a degree in Islamic Studies from Al-Azhar University.",
    image: "/placeholder.svg?height=128&width=128",
  },
  {
    id: 3,
    name: "Sister Aisha",
    role: "Head of Orphan Care",
    bio: "Sister Aisha manages our orphan care program with compassion and dedication. She ensures that all orphans receive the care, love, and education they deserve.",
    image: "/placeholder.svg?height=128&width=128",
  },
]

const teachers = [
  {
    id: 1,
    name: "Ustadh Ibrahim",
    subject: "Quran Memorization",
    image: "/placeholder.svg?height=96&width=96",
  },
  {
    id: 2,
    name: "Ustadh Yusuf",
    subject: "Tajweed",
    image: "/placeholder.svg?height=96&width=96",
  },
  {
    id: 3,
    name: "Ustadha Fatima",
    subject: "Islamic Studies",
    image: "/placeholder.svg?height=96&width=96",
  },
  {
    id: 4,
    name: "Ustadh Omar",
    subject: "Arabic Language",
    image: "/placeholder.svg?height=96&width=96",
  },
  {
    id: 5,
    name: "Ustadha Khadija",
    subject: "Children's Education",
    image: "/placeholder.svg?height=96&width=96",
  },
  {
    id: 6,
    name: "Ustadh Bilal",
    subject: "Fiqh",
    image: "/placeholder.svg?height=96&width=96",
  },
  {
    id: 7,
    name: "Ustadh Hamza",
    subject: "Hadith",
    image: "/placeholder.svg?height=96&width=96",
  },
  {
    id: 8,
    name: "Ustadha Zainab",
    subject: "Sisters' Education",
    image: "/placeholder.svg?height=96&width=96",
  },
]

const facilities = [
  {
    id: 4,
    name: "Prayer Hall",
    description: "Spacious prayer hall that can accommodate up to 500 worshippers",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    name: "Dining Hall",
    description: "Communal dining area serving nutritious meals",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    name: "Outdoor Space",
    description: "Garden and recreational area for physical activities",
    image: "/placeholder.svg?height=200&width=400",
  },
]

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "Parent",
    text: "My son has been attending Fayzul Ulum Madrasa for three years now, and the transformation in his character and knowledge is remarkable. The teachers are dedicated and caring.",
  },
  {
    name: "Fatima Khan",
    role: "Former Student",
    text: "I completed my Hifz at Fayzul Ulum Madrasa, and it was the most rewarding experience of my life. The supportive environment and excellent teaching made it possible.",
  },
  {
    name: "Ibrahim Ali",
    role: "Community Member",
    text: "Fayzul Ulum Madrasa is a beacon of light in our community. Their work with orphans is especially commendable and has made a real difference in many lives.",
  },
]
