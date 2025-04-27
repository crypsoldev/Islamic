"use client"

import { Button } from "@/components/ui/button"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Clock, CalendarIcon, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

// Mock prayer times data - in a real implementation, this would come from an API
const PRAYER_TIMES = {
  "London, UK": {
    fajr: "4:15 AM",
    sunrise: "5:45 AM",
    dhuhr: "1:05 PM",
    asr: "5:30 PM",
    maghrib: "8:45 PM",
    isha: "10:15 PM",
  },
  "Birmingham, UK": {
    fajr: "4:20 AM",
    sunrise: "5:50 AM",
    dhuhr: "1:10 PM",
    asr: "5:35 PM",
    maghrib: "8:50 PM",
    isha: "10:20 PM",
  },
  "Manchester, UK": {
    fajr: "4:10 AM",
    sunrise: "5:40 AM",
    dhuhr: "1:00 PM",
    asr: "5:25 PM",
    maghrib: "8:40 PM",
    isha: "10:10 PM",
  },
}

// Generate mock monthly data
const generateMonthlyData = (location) => {
  const days = []
  const currentDate = new Date()
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i)
    const dayData = {
      date: date,
      fajr: adjustTime(PRAYER_TIMES[location].fajr, Math.random() * 10 - 5),
      sunrise: adjustTime(PRAYER_TIMES[location].sunrise, Math.random() * 10 - 5),
      dhuhr: adjustTime(PRAYER_TIMES[location].dhuhr, Math.random() * 10 - 5),
      asr: adjustTime(PRAYER_TIMES[location].asr, Math.random() * 10 - 5),
      maghrib: adjustTime(PRAYER_TIMES[location].maghrib, Math.random() * 10 - 5),
      isha: adjustTime(PRAYER_TIMES[location].isha, Math.random() * 10 - 5),
    }
    days.push(dayData)
  }

  return days
}

// Helper function to adjust time string by minutes
function adjustTime(timeStr, minutesChange) {
  const [time, period] = timeStr.split(" ")
  const [hours, minutes] = time.split(":").map(Number)

  const date = new Date()
  date.setHours(period === "PM" && hours !== 12 ? hours + 12 : hours)
  date.setMinutes(minutes)

  date.setMinutes(date.getMinutes() + minutesChange)

  let adjustedHours = date.getHours()
  const adjustedMinutes = date.getMinutes()

  const newPeriod = adjustedHours >= 12 ? "PM" : "AM"
  adjustedHours = adjustedHours % 12 || 12

  return `${adjustedHours}:${adjustedMinutes.toString().padStart(2, "0")} ${newPeriod}`
}

export default function PrayerTimesPage() {
  const { t } = useLanguage()
  const [location, setLocation] = useState("London, UK")
  const [date, setDate] = useState(new Date())
  const [monthlyData, setMonthlyData] = useState(() => generateMonthlyData(location))

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation)
    setMonthlyData(generateMonthlyData(newLocation))
  }

  const selectedDayData = monthlyData.find((day) => day.date.getDate() === date.getDate()) || monthlyData[0]

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">{t("prayer.page.title")}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">{t("prayer.page.subtitle")}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle>{t("prayer.location.title")}</CardTitle>
              <CardDescription>{t("prayer.location.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={location} onValueChange={handleLocationChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(PRAYER_TIMES).map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="mt-6">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => newDate && setDate(newDate)}
                  className="rounded-md border"
                />
              </div>

              <div className="mt-6 flex items-center gap-2 p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
                <MapPin className="h-5 w-5 text-green-600" />
                <span className="text-sm">Fayzul Ulum Madrasa, {location}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-2/3">
          <Tabs defaultValue="daily">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="daily">{t("prayer.daily")}</TabsTrigger>
              <TabsTrigger value="monthly">{t("prayer.monthly")}</TabsTrigger>
            </TabsList>

            <TabsContent value="daily">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>
                      {t("prayer.times.title")}{" "}
                      {date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </CardTitle>
                    <CardDescription>{t("prayer.times.description")}</CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-4 w-4 text-green-600" />
                    <span>{date.toLocaleDateString("en-US", { weekday: "long" })}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(selectedDayData || PRAYER_TIMES[location]).map(
                      ([prayer, time]) =>
                        prayer !== "date" && (
                          <Card key={prayer} className="bg-muted/40">
                            <CardContent className="p-4 text-center">
                              <h4 className="font-medium capitalize mb-1">{prayer}</h4>
                              <div className="flex items-center justify-center gap-2">
                                <Clock className="h-4 w-4 text-green-600" />
                                <p className="text-green-700 dark:text-green-400">{time}</p>
                              </div>
                            </CardContent>
                          </Card>
                        ),
                    )}
                  </div>

                  <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
                    <h3 className="font-medium mb-2">{t("prayer.jumuah.title")}</h3>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-green-600" />
                      <span>{t("prayer.jumuah.khutbah")} 1:15 PM</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-4 w-4 text-green-600" />
                      <span>{t("prayer.jumuah.prayer")} 1:45 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monthly">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {t("prayer.times.title")} {date.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                  </CardTitle>
                  <CardDescription>{t("prayer.times.description")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-muted/60">
                          <th className="border px-4 py-2 text-left">Date</th>
                          <th className="border px-4 py-2 text-left">Fajr</th>
                          <th className="border px-4 py-2 text-left">Sunrise</th>
                          <th className="border px-4 py-2 text-left">Dhuhr</th>
                          <th className="border px-4 py-2 text-left">Asr</th>
                          <th className="border px-4 py-2 text-left">Maghrib</th>
                          <th className="border px-4 py-2 text-left">Isha</th>
                        </tr>
                      </thead>
                      <tbody>
                        {monthlyData.map((day, index) => (
                          <tr
                            key={index}
                            className={`${day.date.getDate() === date.getDate() ? "bg-green-50 dark:bg-green-900/20" : ""} hover:bg-muted/40`}
                          >
                            <td className="border px-4 py-2">
                              {day.date.toLocaleDateString("en-US", { day: "numeric", weekday: "short" })}
                            </td>
                            <td className="border px-4 py-2">{day.fajr}</td>
                            <td className="border px-4 py-2">{day.sunrise}</td>
                            <td className="border px-4 py-2">{day.dhuhr}</td>
                            <td className="border px-4 py-2">{day.asr}</td>
                            <td className="border px-4 py-2">{day.maghrib}</td>
                            <td className="border px-4 py-2">{day.isha}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>{t("prayer.guidelines.title")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">{t("prayer.guidelines.calculation.title")}</h3>
              <p className="text-sm text-muted-foreground">{t("prayer.guidelines.calculation.description")}</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">{t("prayer.guidelines.jumuah.title")}</h3>
              <p className="text-sm text-muted-foreground">{t("prayer.guidelines.jumuah.description")}</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">{t("prayer.guidelines.ramadan.title")}</h3>
              <p className="text-sm text-muted-foreground">{t("prayer.guidelines.ramadan.description")}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("prayer.download.title")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">{t("prayer.download.description")}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                {t("prayer.download.pdf")}
              </Button>
              <Button variant="outline" className="w-full">
                {t("prayer.download.calendar")}
              </Button>
              <Button variant="outline" className="w-full">
                {t("prayer.download.monthly")}
              </Button>
              <Button variant="outline" className="w-full">
                {t("prayer.download.yearly")}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">{t("prayer.notification.title")}</h2>
        <p className="max-w-2xl mx-auto mb-6">{t("prayer.notification.description")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button>{t("prayer.notification.email")}</Button>
          <Button variant="outline">{t("prayer.notification.sms")}</Button>
        </div>
      </div>
    </div>
  )
}
