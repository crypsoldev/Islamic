"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ActivitiesPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">{t("activities.title")}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">{t("activities.subtitle")}</p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full mb-10">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="upcoming">{t("activities.upcoming")}</TabsTrigger>
          <TabsTrigger value="regular">{t("activities.regular")}</TabsTrigger>
          <TabsTrigger value="past">{t("activities.past")}</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="regular">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} isPast />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 md:p-8 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">{t("activities.quran.title")}</h2>
            <p className="text-muted-foreground mb-6">{t("activities.quran.description")}</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <Calendar className="h-5 w-5 text-green-600 mt-0.5" />
                <span>{t("activities.quran.date")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="h-5 w-5 text-green-600 mt-0.5" />
                <span>{t("activities.quran.participants")}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                <span>{t("activities.quran.location")}</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/contact">{t("activities.quran.register")}</Link>
            </Button>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=300&width=500" alt="Quran Competition" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">{t("activities.community.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>{t("activities.volunteer.title")}</CardTitle>
              <CardDescription>{t("activities.volunteer.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{t("activities.volunteer.description")}</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded text-xs">
                    Teaching
                  </span>
                  <span>{t("activities.volunteer.teaching")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded text-xs">
                    Events
                  </span>
                  <span>{t("activities.volunteer.events")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded text-xs">
                    Admin
                  </span>
                  <span>{t("activities.volunteer.admin")}</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">{t("activities.volunteer.button")}</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>{t("activities.services.title")}</CardTitle>
              <CardDescription>{t("activities.services.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{t("activities.services.description")}</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded text-xs">
                    Counseling
                  </span>
                  <span>{t("activities.services.counseling")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded text-xs">
                    Marriage
                  </span>
                  <span>{t("activities.services.marriage")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded text-xs">
                    Funeral
                  </span>
                  <span>{t("activities.services.funeral")}</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">{t("activities.services.button")}</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>{t("activities.outreach.title")}</CardTitle>
              <CardDescription>{t("activities.outreach.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{t("activities.outreach.description")}</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded text-xs">
                    Dawah
                  </span>
                  <span>{t("activities.outreach.dawah")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded text-xs">
                    Charity
                  </span>
                  <span>{t("activities.outreach.charity")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded text-xs">
                    Interfaith
                  </span>
                  <span>{t("activities.outreach.interfaith")}</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">{t("activities.outreach.button")}</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="bg-green-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">{t("activities.suggest.title")}</h2>
        <p className="max-w-2xl mx-auto mb-6">{t("activities.suggest.description")}</p>
        <Button asChild variant="secondary" size="lg">
          <Link href="/contact">{t("activities.suggest.button")}</Link>
        </Button>
      </div>
    </div>
  )
}

function EventCard({ event, isPast = false }) {
  const { t } = useLanguage()

  return (
    <Card>
      <div className="relative h-48 w-full">
        <Image
          src={event.image || "/placeholder.svg?height=200&width=400"}
          alt={event.title}
          fill
          className="object-cover rounded-t-lg"
        />
        {event.category && <Badge className="absolute top-2 right-2 bg-green-600">{event.category}</Badge>}
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2 text-green-600">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">{event.date}</span>
        </div>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>{event.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{event.location}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant={isPast ? "outline" : "default"}>
          <Link href={`/activities/${event.id}`}>
            {isPast ? t("activities.viewDetails") : t("activities.register")}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function ActivityCard({ activity }) {
  const { t } = useLanguage()

  return (
    <Card>
      <div className="relative h-48 w-full">
        <Image
          src={activity.image || "/placeholder.svg?height=200&width=400"}
          alt={activity.title}
          fill
          className="object-cover rounded-t-lg"
        />
        {activity.category && <Badge className="absolute top-2 right-2 bg-green-600">{activity.category}</Badge>}
      </div>
      <CardHeader>
        <CardTitle>{activity.title}</CardTitle>
        <CardDescription>{activity.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{activity.schedule}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{activity.time}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{activity.ageGroup}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/activities/${activity.id}`}>{t("home.programs.learnMore")}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

const upcomingEvents = [
  {
    id: 1,
    title: "Quran Recitation Competition",
    description: "Annual competition showcasing beautiful Quran recitation",
    date: "May 15, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Main Hall",
    category: "Competition",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Islamic Knowledge Quiz",
    description: "Test your knowledge of Islam in this friendly competition",
    date: "June 5, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Classroom 3",
    category: "Education",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Eid Celebration",
    description: "Community celebration of Eid with food and activities",
    date: "June 17, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Madrasa Grounds",
    category: "Celebration",
    image: "/placeholder.svg?height=200&width=400",
  },
]

const regularActivities = [
  {
    id: 101,
    title: "Weekly Tafsir Circle",
    description: "In-depth study of Quranic verses and their meanings",
    schedule: "Every Saturday",
    time: "7:00 PM - 8:30 PM",
    ageGroup: "Adults (16+)",
    category: "Education",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 102,
    title: "Youth Circle",
    description: "Discussion group for young Muslims to address contemporary issues",
    schedule: "Every Friday",
    time: "6:00 PM - 7:30 PM",
    ageGroup: "Teens (13-19)",
    category: "Youth",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 103,
    title: "Sisters' Halaqah",
    description: "Islamic knowledge and discussion circle for women",
    schedule: "Every Sunday",
    time: "11:00 AM - 12:30 PM",
    ageGroup: "Women (all ages)",
    category: "Education",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 104,
    title: "Children's Quran Club",
    description: "Fun activities to help children connect with the Quran",
    schedule: "Every Saturday",
    time: "10:00 AM - 11:30 AM",
    ageGroup: "Children (5-12)",
    category: "Children",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 105,
    title: "Community Sports",
    description: "Sports activities for physical fitness and brotherhood",
    schedule: "Every Sunday",
    time: "4:00 PM - 6:00 PM",
    ageGroup: "All ages",
    category: "Sports",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 106,
    title: "Arabic Language Classes",
    description: "Learn to read, write and speak Arabic",
    schedule: "Every Tuesday & Thursday",
    time: "6:00 PM - 7:30 PM",
    ageGroup: "All ages",
    category: "Education",
    image: "/placeholder.svg?height=200&width=400",
  },
]

const pastEvents = [
  {
    id: 201,
    title: "Ramadan Iftar Gathering",
    description: "Community iftar during the blessed month of Ramadan",
    date: "April 5, 2025",
    time: "Sunset - 9:00 PM",
    location: "Madrasa Dining Hall",
    category: "Ramadan",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 202,
    title: "Islamic Calligraphy Workshop",
    description: "Learn the beautiful art of Islamic calligraphy",
    date: "March 20, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Art Room",
    category: "Workshop",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 203,
    title: "Charity Fundraising Dinner",
    description: "Annual dinner to raise funds for orphan care",
    date: "February 15, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Community Center",
    category: "Fundraising",
    image: "/placeholder.svg?height=200&width=400",
  },
]
