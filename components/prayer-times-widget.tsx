"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/contexts/language-context"

// Updated prayer times data for Chittagong Raozan
const PRAYER_TIMES = {
  "Chittagong, Raozan": {
    fajr: "4:30 AM",
    sunrise: "5:55 AM",
    dhuhr: "12:15 PM",
    asr: "3:45 PM",
    maghrib: "6:35 PM",
    isha: "8:00 PM",
  },
  "Dhaka, Bangladesh": {
    fajr: "4:25 AM",
    sunrise: "5:50 AM",
    dhuhr: "12:10 PM",
    asr: "3:40 PM",
    maghrib: "6:30 PM",
    isha: "7:55 PM",
  },
  "Sylhet, Bangladesh": {
    fajr: "4:20 AM",
    sunrise: "5:45 AM",
    dhuhr: "12:05 PM",
    asr: "3:35 PM",
    maghrib: "6:25 PM",
    isha: "7:50 PM",
  },
}

export default function PrayerTimesWidget() {
  const { t, language } = useLanguage()
  const [location, setLocation] = useState("Chittagong, Raozan")
  const [currentTime, setCurrentTime] = useState("")
  const [nextPrayer, setNextPrayer] = useState({ name: "", time: "" })

  // Translate prayer names based on language
  const translatePrayerName = (name) => {
    const prayerTranslations = {
      fajr: language === "bn" ? "ফজর" : "Fajr",
      sunrise: language === "bn" ? "সূর্যোদয়" : "Sunrise",
      dhuhr: language === "bn" ? "যোহর" : "Dhuhr",
      asr: language === "bn" ? "আসর" : "Asr",
      maghrib: language === "bn" ? "মাগরিব" : "Maghrib",
      isha: language === "bn" ? "এশা" : "Isha",
    }
    return prayerTranslations[name] || name
  }

  // Translate location names
  const translateLocation = (loc) => {
    const locationTranslations = {
      "Chittagong, Raozan": language === "bn" ? "চট্টগ্রাম, রাউজান" : "Chittagong, Raozan",
      "Dhaka, Bangladesh": language === "bn" ? "ঢাকা, বাংলাদেশ" : "Dhaka, Bangladesh",
      "Sylhet, Bangladesh": language === "bn" ? "সিলেট, বাংলাদেশ" : "Sylhet, Bangladesh",
    }
    return locationTranslations[loc] || loc
  }

  useEffect(() => {
    // Update current time every minute
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)

    // Calculate next prayer (simplified logic)
    const calculateNextPrayer = () => {
      // In a real implementation, this would compare current time with prayer times
      // For now, we'll just set a placeholder
      const nextPrayerName = "maghrib"
      setNextPrayer({
        name: translatePrayerName(nextPrayerName),
        time: PRAYER_TIMES[location][nextPrayerName],
      })
    }

    calculateNextPrayer()

    return () => clearInterval(interval)
  }, [location, language])

  return (
    <Card className="border-green-200 dark:border-green-800">
      <CardHeader className="bg-green-50 dark:bg-green-900/30 border-b border-green-100 dark:border-green-800">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-green-600" />
            {t("prayer.title")}
          </CardTitle>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(PRAYER_TIMES).map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {translateLocation(loc)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {Object.entries(PRAYER_TIMES[location]).map(([prayer, time]) => (
            <div key={prayer} className="text-center p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
              <h4 className="font-medium capitalize mb-1">{translatePrayerName(prayer)}</h4>
              <p className="text-green-700 dark:text-green-400">{time}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between p-4 rounded-lg bg-green-100 dark:bg-green-900/40">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <Clock className="h-5 w-5 text-green-600" />
            <span>
              {t("prayer.currentTime")} {currentTime}
            </span>
          </div>
          <div>
            <span className="font-medium">{t("prayer.nextPrayer")} </span>
            <span className="text-green-700 dark:text-green-400">
              {nextPrayer.name} at {nextPrayer.time}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
