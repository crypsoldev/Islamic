"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Calendar, GraduationCap, Heart } from "lucide-react"
import PrayerTimesWidget from "@/components/prayer-times-widget"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-50 dark:bg-green-950 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">{t("home.hero.title")}</h1>
              <p className="text-xl text-muted-foreground">{t("home.hero.subtitle")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/courses">{t("home.hero.exploreCourses")}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/donate">{t("home.hero.supportCause")}</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden">
              <Image src="/images/madrasa-campus.jpeg" alt={t("site.name")} fill className="object-contain" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Times Widget */}
      <section className="py-12 bg-white dark:bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PrayerTimesWidget />
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("home.programs.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("home.programs.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <Book className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>{t("home.programs.quran.title")}</CardTitle>
                <CardDescription>{t("home.programs.quran.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden">
                  <Image src="/images/quran-class-1.jpeg" alt="Quran Memorization" fill className="object-cover" />
                </div>
                <p className="text-sm text-muted-foreground">{t("home.programs.quran.description")}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/courses">{t("home.programs.learnMore")}</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <GraduationCap className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>{t("home.programs.islamic.title")}</CardTitle>
                <CardDescription>{t("home.programs.islamic.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden">
                  <Image src="/images/arabic-practice.jpeg" alt="Islamic Studies" fill className="object-cover" />
                </div>
                <p className="text-sm text-muted-foreground">{t("home.programs.islamic.description")}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/courses">{t("home.programs.learnMore")}</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Heart className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>{t("home.programs.orphan.title")}</CardTitle>
                <CardDescription>{t("home.programs.orphan.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden">
                  <Image src="/images/female-students.jpeg" alt="Orphan Care" fill className="object-cover" />
                </div>
                <p className="text-sm text-muted-foreground">{t("home.programs.orphan.description")}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/about">{t("home.programs.learnMore")}</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("home.events.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("home.events.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2 text-green-600">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">May {10 + i}, 2025</span>
                  </div>
                  <CardTitle>Quran Recitation Competition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Join us for our annual Quran recitation competition where students showcase their beautiful
                    recitation skills.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/activities">{t("home.events.viewDetails")}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/activities">{t("home.events.viewAll")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("home.testimonials.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("home.testimonials.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white dark:bg-gray-800">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Testimonial"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Parent {i}</h4>
                      <p className="text-sm text-muted-foreground">Parent of Student</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">
                    "Fayzul Ulum Madrasa has been a blessing for my child. The teachers are dedicated and the
                    environment is perfect for Islamic learning."
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("home.donation.title")}</h2>
          <p className="max-w-2xl mx-auto mb-8">{t("home.donation.description")}</p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/donate">{t("home.donation.button")}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
