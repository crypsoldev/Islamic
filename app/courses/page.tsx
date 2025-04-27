"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Book, Clock, GraduationCap, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function CoursesPage() {
  const { t, language } = useLanguage()

  // Translate course data based on language
  const getTranslatedCourses = () => {
    if (language === "bn") {
      return [
        {
          id: 1,
          title: "নতুনদের জন্য কোরআন পাঠ",
          description: "সঠিক উচ্চারণ এবং মৌলিক তাজবীদ নিয়ম সহ কোরআন পড়তে শিখুন",
          image: "/images/quran-class-1.jpeg",
          category: "children",
          format: "সরাসরি",
          ageGroup: "৫-১০ বছর",
          duration: "৬ মাস",
        },
        {
          id: 2,
          title: "তাজবীদ নিয়মাবলী",
          description: "সুন্দর এবং সঠিক কোরআন তেলাওয়াতের জন্য তাজবীদের নিয়ম শিখুন",
          image: "/images/arabic-practice.jpeg",
          category: "children",
          format: "সরাসরি",
          ageGroup: "১০-১৫ বছর",
          duration: "৪ মাস",
        },
        {
          id: 3,
          title: "হিফজ প্রোগ্রাম",
          description: "সম্পূর্ণ কোরআন মুখস্থ করার জন্য ব্যাপক প্রোগ্রাম",
          image: "/images/quran-class-2.jpeg",
          category: "children",
          format: "সরাসরি",
          ageGroup: "৮-১৫ বছর",
          duration: "৩-৫ বছর",
        },
        {
          id: 4,
          title: "অনলাইন কোরআন ক্লাস",
          description: "আপনার বাড়ি থেকে কোরআন তেলাওয়াত এবং হিফজ শিখুন",
          image: "/images/adult-online-class.jpeg",
          category: "adults",
          format: "অনলাইন",
          ageGroup: "সব বয়স",
          duration: "নমনীয়",
        },
        {
          id: 5,
          title: "সাপ্তাহিক ছুটির দিনের কোরআন ক্লাস",
          description: "যারা সপ্তাহের দিনে আসতে পারেন না তাদের জন্য সাপ্তাহিক ছুটির দিনের ক্লাস",
          image: "/images/quran-class-3.jpeg",
          category: "children",
          format: "সরাসরি",
          ageGroup: "৫-১৫ বছর",
          duration: "চলমান",
        },
        {
          id: 6,
          title: "প্রাপ্তবয়স্কদের কোরআন শিক্ষা",
          description: "প্রাপ্তবয়স্কদের জন্য বিশেষ প্রোগ্রাম যারা কোরআন পড়া শিখতে বা উন্নত করতে চান",
          image: "/images/islamic-books.jpeg",
          category: "adults",
          format: "অনলাইন",
          ageGroup: "১৮+ বছর",
          duration: "৬ মাস",
        },
      ]
    } else {
      return [
        {
          id: 1,
          title: "Quran Reading for Beginners",
          description: "Learn to read the Quran with proper pronunciation and basic Tajweed rules",
          image: "/images/quran-class-1.jpeg",
          category: "children",
          format: "in-person",
          ageGroup: "5-10 years",
          duration: "6 months",
        },
        {
          id: 2,
          title: "Tajweed Rules",
          description: "Master the rules of Tajweed for beautiful and accurate Quran recitation",
          image: "/images/arabic-practice.jpeg",
          category: "children",
          format: "in-person",
          ageGroup: "10-15 years",
          duration: "4 months",
        },
        {
          id: 3,
          title: "Hifz Program",
          description: "Comprehensive program for memorizing the entire Quran",
          image: "/images/quran-class-2.jpeg",
          category: "children",
          format: "in-person",
          ageGroup: "8-15 years",
          duration: "3-5 years",
        },
        {
          id: 4,
          title: "Online Quran Classes",
          description: "Learn Quran recitation and memorization from the comfort of your home",
          image: "/images/adult-online-class.jpeg",
          category: "adults",
          format: "online",
          ageGroup: "All ages",
          duration: "Flexible",
        },
        {
          id: 5,
          title: "Weekend Quran Classes",
          description: "Weekend classes for those who cannot attend during weekdays",
          image: "/images/quran-class-3.jpeg",
          category: "children",
          format: "in-person",
          ageGroup: "5-15 years",
          duration: "Ongoing",
        },
        {
          id: 6,
          title: "Adult Quran Learning",
          description: "Special program for adults who want to learn or improve their Quran reading",
          image: "/images/islamic-books.jpeg",
          category: "adults",
          format: "online",
          ageGroup: "18+ years",
          duration: "6 months",
        },
      ]
    }
  }

  // Translate FAQs based on language
  const getTranslatedFaqs = () => {
    if (language === "bn") {
      return [
        {
          question: "কোরআন কোর্সের জন্য আপনি কোন বয়সের শিক্ষার্থী গ্রহণ করেন?",
          answer:
            "আমরা সব বয়সের শিক্ষার্থীদের জন্য কোর্স অফার করি, ছোট শিশু (৫ বছর থেকে শুরু) থেকে প্রাপ্তবয়স্ক পর্যন্ত। আমাদের বিভিন্ন বয়স গ্রুপ এবং শিক্ষার চাহিদা অনুযায়ী বিশেষ প্রোগ্রাম রয়েছে।",
        },
        {
          question: "হিফজ প্রোগ্রাম সম্পূর্ণ করতে কত সময় লাগে?",
          answer:
            "হিফজ প্রোগ্রামের সময়কাল শিক্ষার্থীর নিষ্ঠা, ক্ষমতা এবং সময়ের প্রতিশ্রুতির উপর নির্ভর করে। গড়ে, সম্পূর্ণ কোরআন মুখস্থ করতে ৩-৫ বছর সময় লাগে।",
        },
        {
          question: "আপনি কি অনলাইন ক্লাস অফার করেন?",
          answer:
            "হ্যাঁ, আমরা তাদের জন্য অনলাইন কোরআন ক্লাস অফার করি যারা সরাসরি উপস্থিত হতে পারেন না। আমাদের অনলাইন ক্লাস নমনীয় সময়সূচীর বিকল্প সহ একই মানের শিক্ষা প্রদান করে।",
        },
        {
          question: "এতিমদের জন্য ভর্তি প্রক্রিয়া কী?",
          answer:
            "আমাদের এতিম প্রোগ্রামের জন্য, আমাদের একটি বিশেষ ভর্তি প্রক্রিয়া রয়েছে যা শিশুর চাহিদা এবং শিক্ষার ক্ষমতার মূল্যায়ন অন্তর্ভুক্ত করে। এই প্রোগ্রাম সম্পর্কে আরও তথ্যের জন্য অনুগ্রহ করে সরাসরি আমাদের সাথে যোগাযোগ করুন।",
        },
        {
          question: "কোর্সে যোগদানের জন্য কি কোন পূর্বশর্ত আছে?",
          answer:
            "নতুনদের কোর্সের জন্য কোন পূর্বশর্ত নেই। তাজবীদ এবং হিফজের মতো উন্নত কোর্সের জন্য, মৌলিক কোরআন পাঠের দক্ষতা প্রয়োজন। আমরা ভর্তির আগে শিক্ষার্থীদের উপযুক্ত স্তরে রাখার জন্য একটি মূল্যায়ন পরিচালনা করি।",
        },
      ]
    } else {
      return [
        {
          question: "What age groups do you accept for the Quran courses?",
          answer:
            "We offer courses for all age groups, from young children (starting at age 5) to adults. We have specialized programs tailored to different age groups and learning needs.",
        },
        {
          question: "How long does it take to complete the Hifz program?",
          answer:
            "The duration of the Hifz program varies depending on the student's dedication, ability, and time commitment. On average, it takes 3-5 years to memorize the entire Quran.",
        },
        {
          question: "Do you offer online classes?",
          answer:
            "Yes, we offer online Quran classes for those who cannot attend in person. Our online classes provide the same quality of education with flexible scheduling options.",
        },
        {
          question: "What is the admission process for orphans?",
          answer:
            "For our orphan program, we have a special admission process that includes an assessment of the child's needs and learning abilities. Please contact us directly for more information about this program.",
        },
        {
          question: "Are there any prerequisites for joining the courses?",
          answer:
            "For beginner courses, there are no prerequisites. For advanced courses like Tajweed and Hifz, basic Quran reading skills are required. We conduct an assessment before enrollment to place students in the appropriate level.",
        },
      ]
    }
  }

  const courses = getTranslatedCourses()
  const faqs = getTranslatedFaqs()

  // Translate category labels
  const getCategoryLabel = (category) => {
    if (language === "bn") {
      return category === "children" ? "শিশু" : "প্রাপ্তবয়স্ক"
    }
    return category
  }

  // Translate format labels
  const getFormatLabel = (format) => {
    if (language === "bn") {
      return format === "online" ? "অনলাইন" : "সরাসরি"
    }
    return format
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">{t("courses.title")}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">{t("courses.subtitle")}</p>
      </div>

      <Tabs defaultValue="all" className="w-full mb-10">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="all">{t("courses.all")}</TabsTrigger>
          <TabsTrigger value="children">{t("courses.children")}</TabsTrigger>
          <TabsTrigger value="adults">{t("courses.adults")}</TabsTrigger>
          <TabsTrigger value="online">{t("courses.online")}</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} language={language} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="children">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses
              .filter((course) => course.category === "children")
              .map((course) => (
                <CourseCard key={course.id} course={course} language={language} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="adults">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses
              .filter((course) => course.category === "adults")
              .map((course) => (
                <CourseCard key={course.id} course={course} language={language} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="online">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses
              .filter((course) => course.format === "online" || course.format === "অনলাইন")
              .map((course) => (
                <CourseCard key={course.id} course={course} language={language} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 md:p-8 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">{t("courses.hafiz.title")}</h2>
            <p className="text-muted-foreground mb-6">{t("courses.hafiz.description")}</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <Book className="h-5 w-5 text-green-600 mt-0.5" />
                <span>{t("courses.hafiz.feature1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="h-5 w-5 text-green-600 mt-0.5" />
                <span>{t("courses.hafiz.feature2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <GraduationCap className="h-5 w-5 text-green-600 mt-0.5" />
                <span>{t("courses.hafiz.feature3")}</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contact">{t("courses.hafiz.inquire")}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/donate">{t("courses.hafiz.support")}</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image src="/images/quran-class-1.jpeg" alt="Hafiz Program" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold mb-4">{t("courses.faq.title")}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">{t("courses.faq.subtitle")}</p>
      </div>

      <div className="space-y-4 mb-16">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-6">
            <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
            <p className="text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="bg-green-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">{t("courses.cta.title")}</h2>
        <p className="max-w-2xl mx-auto mb-6">{t("courses.cta.description")}</p>
        <Button asChild variant="secondary" size="lg">
          <Link href="/contact">{t("courses.cta.button")}</Link>
        </Button>
      </div>
    </div>
  )
}

// Update the CourseCard to use a course object with appropriate typings
function CourseCard({ course, language }) {
  const ageGroupLabel = language === "bn" ? "বয়স গ্রুপ:" : "Age Group:"
  const durationLabel = language === "bn" ? "সময়কাল:" : "Duration:"
  const viewDetailsLabel = language === "bn" ? "বিস্তারিত দেখুন" : "View Details"

  return (
    <Card>
      <div className="relative h-48 w-full">
        <Image
          src={course.image || "/placeholder.svg?height=200&width=400"}
          alt={course.title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{course.title}</CardTitle>
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            {course.format}
          </span>
        </div>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>
              {ageGroupLabel} {course.ageGroup}
            </span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>
              {durationLabel} {course.duration}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/courses/${course.id}`}>{viewDetailsLabel}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
