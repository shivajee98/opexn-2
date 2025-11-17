"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, CheckCircle, Clock, MapPin, Sparkles, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimationWrapper } from "./animation-wrapper"

const EventCard = () => {

  return (
    <div className="space-y-12">
      {/* Featured Event Card */}
      <AnimationWrapper direction="up" delay={0.2}>

          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#FF4500] via-[#FF6347] to-[#DC143C] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
            <div className="w-full h-full bg-white rounded-3xl"></div>
          </div> */}

          <div className="relative z-10 grid lg:grid-cols-5 gap-0 min-h-[500px]">
            <div className="lg:col-span-2 relative overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
              <div className="relative h-80 lg:h-full bg-gradient-to-br from-gray-900 to-gray-800">
                <Image
                  src="/edtech-roundtable.png"
                  alt="EdTech Round Table Chandigarh - Tech-Empowered Teaching"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40" />

                {/* <div className="absolute top-6 left-6 z-20">
                  <Badge className="bg-black/60 backdrop-blur-md hover:bg-black/70 text-white border border-white/30 px-4 py-2 text-sm font-semibold shadow-xl transition-all duration-300">
                    <Sparkles className="w-4 h-4 mr-2" />
                    EdTech Innovation
                  </Badge>
                </div> */}

                <div className="absolute bottom-6 left-6 right-6 text-white z-20">
                  <h3
                    className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-3 text-white drop-shadow-2xl leading-tight"
                    style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)" }}
                  >
                    Tech-Empowered Teaching
                  </h3>
                  <p
                    className="text-lg md:text-xl font-body text-white drop-shadow-lg"
                    style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.6)" }}
                  >
                    EdTech Round Table • Chandigarh
                  </p>
                </div>
              </div>
            </div>

            <CardContent className="lg:col-span-3 p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-white backdrop-blur-sm rounded-t-3xl lg:rounded-r-3xl lg:rounded-tl-none">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                <div className="flex items-center space-x-3 text-[#FF4500] bg-[#FF4500]/10 px-4 py-3 rounded-2xl border border-[#FF4500]/20">
                  <Calendar className="w-6 h-6" />
                  <div>
                    <span className="font-display font-bold text-lg block text-[#FF4500]">29th August, 2025</span>
                    <span className="text-sm text-gray-700">Friday</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-[#FF6347] bg-[#FF6347]/10 px-4 py-3 rounded-2xl border border-[#FF6347]/20">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <span className="font-display font-semibold text-lg block text-[#FF6347]">Chandigarh</span>
                    <span className="text-sm text-gray-700">India</span>
                  </div>
                </div>
              </div>

              <p className="font-body text-gray-800 mb-8 text-lg lg:text-xl leading-relaxed">
                Uniting educators, innovators & leaders to shape NEP-driven, tech-enabled learning for Chandigarh's
                future. Join the conversation that's transforming education.
              </p>

              <div className="mb-8">
                <h4 className="font-display font-bold mb-6 text-gray-900 text-xl flex items-center">
                  <Users className="w-5 h-5 mr-2 text-[#FF4500]" />
                  Discussion Areas
                </h4>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-emerald-50 to-emerald-100/50 rounded-2xl border border-emerald-200/50">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <span className="font-body text-base text-gray-800 font-medium">
                      Tech & SaaS Impact on Education
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl border border-blue-200/50">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span className="font-body text-base text-gray-900 font-medium">NEP's Impact on Academia</span>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-2xl border border-amber-200/50">
                    <Clock className="w-6 h-6 text-amber-600 flex-shrink-0" />
                    <span className="font-body text-base text-gray-800 font-medium">10:00 AM - 1:00 PM</span>
                  </div>
                </div>
              </div>

              <Link href="https://forms.gle/5UkuGAraqBormcq67" className="group/button">
                <Button className="w-full bg-gradient-to-r from-[#DC143C] to-[#FF4500] hover:from-[#B22222] hover:to-[#DC143C] text-white text-lg py-6 font-display font-semibold border-0 transition-all duration-300 shadow-2xl hover:shadow-3xl rounded-2xl relative overflow-hidden">
                  <span
                    className="relative z-10 flex items-center justify-center text-white font-bold"
                    style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                  >
                    Register for Round Table
                    <ArrowRight className="ml-3 w-5 h-5 group-hover/button:translate-x-1 transition-transform duration-300" />
                  </span>

                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-1000"></div>
                </Button>
              </Link>
            </CardContent>
          </div>
      </AnimationWrapper>

      {/* <div className="space-y-8">
        <div className="text-center">
          <AnimationWrapper
            direction="up"
            delay={0.3}
            className="inline-flex items-center justify-center px-6 py-3 mb-6 text-sm font-semibold text-[#FF4500] bg-white/90 backdrop-blur-md rounded-full border border-[#FF4500]/30 shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <span className="w-2 h-2 bg-[#FF4500] rounded-full mr-3 animate-pulse"></span>
            Our Activities
          </AnimationWrapper>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-transparent bg-gradient-to-r from-[#FF4500] via-[#FF6347] to-[#DC143C] bg-clip-text">
            Comprehensive Programs
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our diverse range of activities designed to foster innovation, networking, and growth across
            multiple sectors.
          </p>
        </div>


        <StaggerContainer className="flex flex-wrap justify-center gap-2 mb-8" staggerDelay={0.05}>
          {ACTIVITIES.map((activity, index) => (
            <StaggerItem key={activity.id} direction="scale">
              <button
                onClick={() => setSelectedActivity(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  selectedActivity === index
                    ? "bg-gradient-to-r from-[#FF4500] to-[#FF6347] text-white shadow-lg scale-105"
                    : "bg-white/80 text-gray-700 hover:bg-white hover:text-[#FF4500] border border-gray-200 hover:border-[#FF4500]/30"
                }`}
              >
                {activity.title}
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>


        <AnimationWrapper direction="up" delay={0.4}>
          <Card className="group relative overflow-hidden bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-3xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF4500]/5 via-[#FF6347]/5 to-[#DC143C]/5 rounded-3xl"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-0 min-h-[400px]">
              <div className="relative overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
                <div className="relative h-80 lg:h-full bg-gradient-to-br from-[#FF4500] to-[#FF6347] flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF4500]/90 to-[#FF6347]/90"></div>
                  <div className="relative z-10 text-center text-white p-8">
                    <div className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                      {(() => {
                        const IconComponent = ACTIVITIES[selectedActivity].icon
                        return IconComponent ? <IconComponent className="w-10 h-10 text-white" /> : null
                      })()}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-display font-bold mb-4">
                      {ACTIVITIES[selectedActivity].title}
                    </h4>
                    <p className="text-lg opacity-90">{ACTIVITIES[selectedActivity].description}</p>
                  </div>
                </div>
              </div>

              <CardContent className="p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-white">
                <div className="space-y-6">
                  <div>
                    <h5 className="text-xl font-display font-bold text-[#FF4500] mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Key Features
                    </h5>
                    <StaggerContainer className="space-y-3" staggerDelay={0.1}>
                      {ACTIVITIES[selectedActivity].features.map((feature, index) => (
                        <StaggerItem key={index} direction="left">
                          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-[#FF4500]/5 to-[#FF6347]/5 rounded-xl border border-[#FF4500]/10 hover:border-[#FF4500]/20 hover:bg-[#FF4500]/10 transition-all duration-300">
                            <div className="w-2 h-2 bg-[#FF4500] rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                            <span className="text-gray-800 font-medium">{feature}</span>
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>

                  <div>
                    <h5 className="text-xl font-display font-bold text-[#FF6347] mb-4 flex items-center">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Expected Outcomes
                    </h5>
                    <StaggerContainer className="space-y-3" staggerDelay={0.1}>
                      {ACTIVITIES[selectedActivity].outcomes.map((outcome, index) => (
                        <StaggerItem key={index} direction="right">
                          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-[#FF6347]/5 to-[#FF4500]/5 rounded-xl border border-[#FF6347]/10 hover:border-[#FF6347]/20 hover:bg-[#FF6347]/10 transition-all duration-300">
                            <div className="w-2 h-2 bg-[#FF6347] rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                            <span className="text-gray-800 font-medium">{outcome}</span>
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </AnimationWrapper>
      </div> */}

      {/* Contact Card */}
      {/* <AnimationWrapper direction="up" delay={0.5}>
        <Card className="bg-gradient-to-r from-[#FF4500] to-[#FF6347] text-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <CardContent className="relative z-10 p-8 md:p-12 text-center">
            <h4 className="text-2xl md:text-3xl font-display font-bold mb-6">Get in Touch</h4>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Ready to join our community? Connect with us to learn more about upcoming events and opportunities.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 p-4 bg-white/20 backdrop-blur-md rounded-2xl">
                <Phone className="w-5 h-5" />
                <span className="font-medium">+91 84390 56300</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-white/20 backdrop-blur-md rounded-2xl">
                <Mail className="w-5 h-5" />
                <span className="font-medium">Info.opexn@gmail.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-white/20 backdrop-blur-md rounded-2xl">
                <Globe className="w-5 h-5" />
                <span className="font-medium">www.opexn.com</span>
              </div>
            </div>

            <Button className="bg-white text-[#FF4500] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl">
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </CardContent>
        </Card>
      </AnimationWrapper> */}

    </div>
  )
}

export default EventCard
