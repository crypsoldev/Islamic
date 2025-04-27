"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { toast } = useToast()
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, this would send the form data to a server
    console.log("Form submitted:", formData)
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We will get back to you soon.",
    })
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "general",
    })
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">{t("contact.title")}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">{t("contact.subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>{t("contact.form.title")}</CardTitle>
              <CardDescription>{t("contact.form.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="inquiry-type">{t("contact.form.inquiryType")}</Label>
                  <RadioGroup
                    value={formData.inquiryType}
                    onValueChange={handleRadioChange}
                    className="flex flex-wrap gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="general" id="inquiry-general" />
                      <Label htmlFor="inquiry-general">{t("contact.form.general")}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="enrollment" id="inquiry-enrollment" />
                      <Label htmlFor="inquiry-enrollment">{t("contact.form.enrollment")}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="donation" id="inquiry-donation" />
                      <Label htmlFor="inquiry-donation">{t("contact.form.donation")}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="volunteer" id="inquiry-volunteer" />
                      <Label htmlFor="inquiry-volunteer">{t("contact.form.volunteer")}</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contact.form.name")}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contact.form.email")}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t("contact.form.subject")}</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleSelectChange("subject", value)}>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="courses">Courses Information</SelectItem>
                        <SelectItem value="enrollment">Enrollment</SelectItem>
                        <SelectItem value="donation">Donation</SelectItem>
                        <SelectItem value="volunteer">Volunteer</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.form.message")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  {t("contact.form.send")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("contact.info.title")}</CardTitle>
              <CardDescription>{t("contact.info.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">{t("contact.info.address")}</h3>
                  <p className="text-sm text-muted-foreground">
                    Fayzul Ulum Madrasa
                    <br />
                    Raozan, Chittagong
                    <br />
                    Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">{t("contact.info.phone")}</h3>
                  <p className="text-sm text-muted-foreground">
                    Main: +880 1234 567890
                    <br />
                    Office: +880 1234 567891
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">{t("contact.info.email")}</h3>
                  <p className="text-sm text-muted-foreground">
                    info@fayzululum.org
                    <br />
                    admin@fayzululum.org
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">{t("contact.info.hours")}</h3>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("contact.location.title")}</CardTitle>
              <CardDescription>{t("contact.location.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-[300px] w-full rounded-md overflow-hidden">
                <Image src="/images/entrance-gate.jpeg" alt="Map location" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-2 rounded-md shadow-md">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  {t("contact.location.button")}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 md:p-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("contact.faq.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("contact.faq.subtitle")}</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">{t("contact.visit.title")}</h2>
        <p className="max-w-2xl mx-auto mb-6">{t("contact.visit.description")}</p>
        <Button asChild variant="secondary" size="lg">
          <Link href="/contact">{t("contact.visit.button")}</Link>
        </Button>
      </div>
    </div>
  )
}

const faqs = [
  {
    question: "How can I enroll my child in Fayzul Ulum Madrasa?",
    answer:
      "To enroll your child, you can fill out the contact form on this page, call our office, or visit us in person. We'll guide you through the enrollment process and provide information about available programs.",
  },
  {
    question: "What age groups do you accept for the Quran courses?",
    answer:
      "We offer courses for all age groups, from young children (starting at age 5) to adults. We have specialized programs tailored to different age groups and learning needs.",
  },
  {
    question: "How can I support the orphan program?",
    answer:
      "You can support our orphan program through donations, sponsoring an orphan, volunteering your time, or providing in-kind donations such as books, clothing, or food. Contact us for more information on how you can help.",
  },
  {
    question: "Do you offer online classes?",
    answer:
      "Yes, we offer online Quran classes for those who cannot attend in person. Our online classes provide the same quality of education with flexible scheduling options.",
  },
  {
    question: "How can I volunteer at Fayzul Ulum Madrasa?",
    answer:
      "We welcome volunteers in various capacities, including teaching assistance, administrative support, event organization, and facility maintenance. Please contact us to discuss volunteer opportunities that match your skills and interests.",
  },
]
