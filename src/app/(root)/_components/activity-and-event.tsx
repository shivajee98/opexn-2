"use client"

import { ACTIVITIES } from "@/config/activities"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"

const Calendar = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22,4 12,14.01 9,11.01" />
  </svg>
)

const Trophy = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55.47.98.97 1.21C12.04 18.75 14 20 14 20s1.96-1.25 3.03-1.79c.5-.23.97-.66.97-1.21v-2.34" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
)

export default function ActivityAndEvent() {
  const [activeActivityId, setActiveActivityId] = useState(ACTIVITIES[0].id)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const activityRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})

  return (
    <div id="event-activity" className="min-h-screen pt-6 bg-gradient-to-br from-[#F8F5EE] via-[#FCFCFA] to-[#F8F5EE]">
      <div className="text-center mb-8 md:mb-16 backdrop-blur-sm mx-4 rounded-2xl p-8">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF4500] to-[#FF6347] text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
          <Calendar className="w-4 h-4" />
          Event & Activities
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
          Comprehensive{" "}
          <span className="bg-gradient-to-r from-[#FF4500] to-[#FF6347] bg-clip-text text-transparent">
            Event & Activities
          </span>
        </h2>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
          Explore our diverse range of carefully curated activities designed to foster innovation, facilitate
          networking, and drive business growth across all industry sectors.
        </p>
      </div>

      <section className="py-16 px-4 relative">
        <div className="mx-auto max-w-[1600px] md:pt-4 sm:pt-2">
          <div className="grid lg:grid-cols-5 gap-16 relative">
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6 hidden lg:inline">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200/50">
                  <h2 className="text-2xl font-bold mb-4 text-transparent bg-gradient-to-r from-[#FF4500] via-[#FF6347] to-[#DC143C] bg-clip-text ">Our Events & Activities</h2>
                  <div className="space-y-3">
                    <div
                      className="block text-gray-700 hover:text-[#FF4500] transition-colors duration-300 py-2 px-3 rounded-lg "
                    >
                      Training Programs
                    </div>
                    <div
                      className="block text-gray-700 hover:text-[#FF4500] transition-colors duration-300 py-2 px-3 rounded-lg "
                    >
                      Exhibitions
                    </div>
                    <div
                      className="block text-gray-700 hover:text-[#FF4500] transition-colors duration-300 py-2 px-3 rounded-lg "
                    >
                      Investors Meet & Conference
                    </div>
                    <div
                      className="block text-gray-700 hover:text-[#FF4500] transition-colors duration-300 py-2 px-3 rounded-lg "
                    >
                      Buyer & Seller Meet
                    </div>
                    <div
                      className="block text-gray-700 hover:text-[#FF4500] transition-colors duration-300 py-2 px-3 rounded-lg "
                    >
                      Round Table Discussions
                    </div>
                    <div
                      className="block text-gray-700 hover:text-[#FF4500] transition-colors duration-300 py-2 px-3 rounded-lg "
                    >
                      Boot Camp & Party
                    </div>
                    <div
                      className="block text-gray-700 hover:text-[#FF4500] transition-colors duration-300 py-2 px-3 rounded-lg "
                    >
                      Pitching Competitions
                    </div>
                    <div
                      className="block text-gray-700 hover:text-[#FF4500] transition-colors duration-300 py-2 px-3 rounded-lg "
                    >
                      Workshops
                    </div>
                    <div
                      className="block text-gray-700 hover:text-[#FF4500] transition-colors duration-300 py-2 px-3 rounded-lg "
                    >
                      Challenges/Hackathon
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-[calc(83%-10px)] transform -translate-x-1/2 h-full w-[2px] z-10 bg-gradient-to-b from-[#FF4500] via-[#FF6347] to-transparent hidden lg:inline" />

            <div className="lg:col-span-4 space-y-12">
              <div className="flex-1 max-w-6xl order-1 lg:order-2 relative">
                <div
                  ref={scrollContainerRef}
                  className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-gray-100 pr-2 md:pr-4 sm:scroll-smooth md:scroll-smooth"
                  style={{ scrollBehavior: "smooth" }}
                >
                  <div className="space-y-10 md:space-y-16 pb-24 md:pb-28 sm:pb-28">
                    {ACTIVITIES.map((activity) => {
                      const IconComponent = activity.icon
                      return (
                        <div
                          key={activity.id}
                          ref={(el) => {
                            activityRefs.current[activity.id] = el
                          }}
                          data-activity-id={activity.id}
                          className={`group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-500 min-h-[650px] md:min-h-[800px] lg:min-h-[900px] xl:min-h-[950px] border border-gray-200/50`}
                        >
                          <div className="relative overflow-hidden">
                            <div className="relative aspect-[2/1] lg:aspect-[3/2]">
                              <Image
                                src={activity.image || "/placeholder.svg"}
                                alt={`${activity.title} - Professional event showcasing innovative solutions`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                priority={activity.id <= 3}
                                quality={85}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute bottom-4 md:bottom-6 left-6 md:left-8 text-white">
                              <div className="flex items-center gap-2 mb-2 md:mb-3">
                                <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                                <span
                                  className={`text-sm font-medium px-3 py-1.5 rounded-full`}
                                >
                                  Featured Activity
                                </span>
                              </div>
                              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{activity.title}</h3>
                            </div>
                          </div>

                          <div className="p-8 md:p-10 lg:p-12 xl:p-14 bg-white">
                            <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed">
                              {activity.description}
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                              <div>
                                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">
                                  Key Features
                                </h4>
                                <ul className="space-y-2 md:space-y-3">
                                  {activity.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#FF4500] flex-shrink-0 mt-0.5" />
                                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">
                                  Expected Outcomes
                                </h4>
                                <ul className="space-y-2 md:space-y-3">
                                  {activity.outcomes.map((outcome, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                      <Trophy className="w-4 h-4 md:w-5 md:h-5 text-[#FF6347] flex-shrink-0 mt-0.5" />
                                      <span className="text-gray-700 text-sm md:text-base">{outcome}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
