"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimationWrapper, StaggerContainer, StaggerItem } from "./animation-wrapper"

const Trophy = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55.47.98.97 1.21C12.04 18.75 14 20 14 20s1.96-1.25 3.03-1.79c.5-.23.97-.66.97-1.21v-2.34" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
)

const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const Calendar = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const MapPin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const achievements = [
  {
    id: 1,
    title: "Innovation Summit 2024",
    description: "Successfully organized the largest innovation summit with 500+ participants from 50+ companies",
    image: "/activity/innovation-summit-conference-hall-with-people-netw.png",
    date: "March 2024",
    location: "Mumbai",
    participants: 500,
    category: "Conference",
  },
  {
    id: 2,
    title: "Startup Pitch Battle",
    description: "Hosted the most competitive startup pitch event with ₹50L funding distributed to winners",
    image: "/activity/startup-pitch-presentation-stage-with-entrepreneur.png",
    date: "February 2024",
    location: "Bangalore",
    participants: 150,
    category: "Competition",
  },
  {
    id: 3,
    title: "Tech Excellence Awards",
    description: "Recognized outstanding contributions in AI, IoT, and sustainable technology sectors",
    image: "/activity/awards-ceremony-stage-with-winners-holding-trophie.png",
    date: "January 2024",
    location: "Delhi",
    participants: 300,
    category: "Awards",
  },
  {
    id: 4,
    title: "Industry Leaders Roundtable",
    description: "Facilitated strategic discussions between C-suite executives from Fortune 500 companies",
    image: "/activity/business-roundtable-meeting-with-executives-in-mod.png",
    date: "December 2023",
    location: "Pune",
    participants: 75,
    category: "Roundtable",
  },
  {
    id: 5,
    title: "Innovation Hackathon",
    description: "48-hour intensive coding marathon resulting in 25 breakthrough solutions for smart cities",
    image: "/activity/hackathon-coding-event-with-developers-working-on-.png",
    date: "November 2023",
    location: "Hyderabad",
    participants: 200,
    category: "Hackathon",
  },
  {
    id: 6,
    title: "Women in Tech Summit",
    description: "Empowering female leaders in technology with mentorship and networking opportunities",
    image: "/activity/women-in-tech-conference-with-female-speakers-on-s.png",
    date: "October 2023",
    location: "Chennai",
    participants: 400,
    category: "Summit",
  },
]

export function HallOfFame() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredAchievements =
    selectedCategory === "All"
      ? achievements
      : achievements.filter((achievement) => achievement.category === selectedCategory)

  return (
    <section id="hall-of-fame" className="py-24 bg-gradient-to-br from-[#F8F5EE] via-[#FCFCFA] to-[#F8F5EE] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-[#FF4500]/20 to-[#FF6347]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-[#FF6347]/20 to-[#FF4500]/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimationWrapper direction="up" delay={0.2} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF4500] to-[#FF6347] text-white px-4 py-2 rounded-full text-sm font-medium mb-6 hover:scale-105 transition-transform duration-300">
            <Trophy className="w-4 h-4" />
            Hall of Fame
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
            Celebrating Our{" "}
            <span className="bg-gradient-to-r from-[#FF4500] to-[#FF6347] bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body leading-relaxed">
            A showcase of our most impactful events, groundbreaking innovations, and the remarkable moments that have
            shaped our journey in transforming industries.
          </p>
        </AnimationWrapper>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {filteredAchievements.map((achievement, index) => (
            <StaggerItem key={achievement.id} direction="up">
              <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden border border-gray-200/50">
                <div className="relative overflow-hidden">
                  <Image
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FF4500] to-[#FF6347] text-white px-3 py-1 rounded-full text-xs font-semibold animate-float">
                    {achievement.category}
                  </div> */}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display group-hover:text-[#FF4500] transition-colors duration-300">
                    {achievement.title}
                  </h3>

                  <p className="text-gray-700 mb-4 font-body leading-relaxed">{achievement.description}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1 group-hover:text-[#FF4500] transition-colors duration-300">
                      <Calendar className="w-4 h-4 text-[#FF6347]" />
                      <span className="font-body">{achievement.date}</span>
                    </div>
                    <div className="flex items-center gap-1 group-hover:text-[#FF4500] transition-colors duration-300">
                      <MapPin className="w-4 h-4 text-[#FF6347]" />
                      <span className="font-body">{achievement.location}</span>
                    </div>
                    <div className="flex items-center gap-1 group-hover:text-[#FF4500] transition-colors duration-300">
                      <Users className="w-4 h-4 text-[#FF6347]" />
                      <span className="font-body">{achievement.participants}+ attendees</span>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
