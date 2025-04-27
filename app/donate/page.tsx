"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Book, Building, GraduationCap, Heart, Home, Utensils } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function DonatePage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">{t("donate.title")}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">{t("donate.subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">{t("donate.why.title")}</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                <Book className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{t("donate.why.education.title")}</h3>
                <p className="text-muted-foreground">{t("donate.why.education.description")}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{t("donate.why.orphans.title")}</h3>
                <p className="text-muted-foreground">{t("donate.why.orphans.description")}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                <Building className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{t("donate.why.facilities.title")}</h3>
                <p className="text-muted-foreground">{t("donate.why.facilities.description")}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                <GraduationCap className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{t("donate.why.scholarships.title")}</h3>
                <p className="text-muted-foreground">{t("donate.why.scholarships.description")}</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6">{t("donate.impact.title")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                  <p className="text-sm">{t("donate.impact.students")}</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                  <p className="text-sm">{t("donate.impact.orphans")}</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                  <p className="text-sm">{t("donate.impact.huffaz")}</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                  <p className="text-sm">{t("donate.impact.years")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div>
          <Tabs defaultValue="one-time" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="one-time">{t("donate.form.oneTime")}</TabsTrigger>
              <TabsTrigger value="monthly">{t("donate.form.monthly")}</TabsTrigger>
            </TabsList>
            <TabsContent value="one-time">
              <Card>
                <CardHeader>
                  <CardTitle>{t("donate.form.title")}</CardTitle>
                  <CardDescription>{t("donate.form.description")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="donation-amount">{t("donate.form.amount")}</Label>
                    <RadioGroup defaultValue="50" className="flex flex-wrap gap-4" id="donation-amount">
                      {["20", "50", "100", "250", "500"].map((amount) => (
                        <div key={amount} className="flex items-center space-x-2">
                          <RadioGroupItem value={amount} id={`amount-${amount}`} />
                          <Label htmlFor={`amount-${amount}`}>${amount}</Label>
                        </div>
                      ))}
                      <div className="flex items-center space-x-2 w-full">
                        <RadioGroupItem value="custom" id="amount-custom" />
                        <Label htmlFor="amount-custom">{t("donate.form.custom")}</Label>
                        <Input type="number" placeholder="Enter amount" className="w-32 ml-2" />
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="donation-purpose">{t("donate.form.purpose")}</Label>
                    <RadioGroup defaultValue="general" id="donation-purpose">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="general" id="purpose-general" />
                          <Label htmlFor="purpose-general">{t("donate.form.general")}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="orphans" id="purpose-orphans" />
                          <Label htmlFor="purpose-orphans">{t("donate.form.orphans")}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="education" id="purpose-education" />
                          <Label htmlFor="purpose-education">{t("donate.form.education")}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="facilities" id="purpose-facilities" />
                          <Label htmlFor="purpose-facilities">{t("donate.form.facilities")}</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="personal-info">{t("donate.form.info")}</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="First Name" />
                      <Input placeholder="Last Name" />
                      <Input placeholder="Email" type="email" className="md:col-span-2" />
                      <Input placeholder="Phone (Optional)" type="tel" className="md:col-span-2" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("donate.form.message")}</Label>
                    <Textarea placeholder="Add a message with your donation" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">{t("donate.form.proceed")}</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="monthly">
              <Card>
                <CardHeader>
                  <CardTitle>{t("donate.monthly.title")}</CardTitle>
                  <CardDescription>{t("donate.monthly.description")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="monthly-amount">{t("donate.form.amount")}</Label>
                    <RadioGroup defaultValue="25" className="flex flex-wrap gap-4" id="monthly-amount">
                      {["10", "25", "50", "100", "200"].map((amount) => (
                        <div key={amount} className="flex items-center space-x-2">
                          <RadioGroupItem value={amount} id={`monthly-${amount}`} />
                          <Label htmlFor={`monthly-${amount}`}>${amount}/month</Label>
                        </div>
                      ))}
                      <div className="flex items-center space-x-2 w-full">
                        <RadioGroupItem value="custom" id="monthly-custom" />
                        <Label htmlFor="monthly-custom">{t("donate.form.custom")}</Label>
                        <Input type="number" placeholder="Enter amount" className="w-32 ml-2" />
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthly-purpose">{t("donate.form.purpose")}</Label>
                    <RadioGroup defaultValue="general" id="monthly-purpose">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="general" id="monthly-purpose-general" />
                          <Label htmlFor="monthly-purpose-general">{t("donate.form.general")}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="orphans" id="monthly-purpose-orphans" />
                          <Label htmlFor="monthly-purpose-orphans">{t("donate.form.orphans")}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="education" id="monthly-purpose-education" />
                          <Label htmlFor="monthly-purpose-education">{t("donate.form.education")}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="facilities" id="monthly-purpose-facilities" />
                          <Label htmlFor="monthly-purpose-facilities">{t("donate.form.facilities")}</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthly-personal-info">{t("donate.form.info")}</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="First Name" />
                      <Input placeholder="Last Name" />
                      <Input placeholder="Email" type="email" className="md:col-span-2" />
                      <Input placeholder="Phone (Optional)" type="tel" className="md:col-span-2" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">{t("donate.monthly.button")}</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 p-6 border rounded-lg bg-muted/40">
            <h3 className="font-semibold text-lg mb-4">{t("donate.bank.title")}</h3>
            <p className="text-muted-foreground mb-4">{t("donate.bank.description")}</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{t("donate.bank.name")}</span>
                <span>Fayzul Ulum Madrasa</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">{t("donate.bank.bank")}</span>
                <span>Islamic Bank</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">{t("donate.bank.number")}</span>
                <span>1234567890</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">{t("donate.bank.sort")}</span>
                <span>12-34-56</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">{t("donate.bank.reference")}</span>
                <span>Donation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">{t("donate.other.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <Utensils className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>{t("donate.other.meals.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{t("donate.other.meals.description")}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                {t("home.programs.learnMore")}
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <GraduationCap className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>{t("donate.other.student.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{t("donate.other.student.description")}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                {t("home.programs.learnMore")}
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Home className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>{t("donate.other.volunteer.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{t("donate.other.volunteer.description")}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                {t("home.programs.learnMore")}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">{t("donate.zakat.title")}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">{t("donate.zakat.description")}</p>
        <Button variant="outline">{t("donate.zakat.button")}</Button>
      </div>

      <div className="bg-green-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">{t("donate.cta.title")}</h2>
        <p className="max-w-2xl mx-auto mb-6">{t("donate.cta.description")}</p>
        <Button variant="secondary" size="lg">
          {t("donate.cta.button")}
        </Button>
      </div>
    </div>
  )
}
