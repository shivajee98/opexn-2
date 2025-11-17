import { LazyImage } from "@/components/global/lazy-image"
import { Brain, Car, Cpu, Gamepad2, Gift, Heart, Package, Shield, Shirt, Wheat, ArrowUpRight } from "lucide-react"
import { AnimationWrapper, StaggerContainer, StaggerItem } from "./animation-wrapper"

export const SectorCard = () => {
  const sectors = [
    {
      icon: Wheat,
      title: "Agri, Food & Dairy Products",
      description:
        "Sustainable agriculture, food processing, dairy technology, and farm-to-fork supply chain innovations.",
      image: "/activity/modern-sustainable-farming.png",
      alt: "modern sustainable farming",
      color: "green",
      alignment: "left",
    },
    {
      icon: Car,
      title: "EV, Robotics & IoT",
      description:
        "Electric vehicles, autonomous systems, industrial robotics, and Internet of Things ecosystem development.",
      image: "/activity/electric-vehicle-charging-station-with-robots-and-.png",
      alt: "electric vehicle and robotics",
      color: "blue",
      alignment: "right",
    },
    {
      icon: Package,
      title: "Packaging",
      description:
        "Sustainable packaging solutions, smart packaging technologies, and eco-friendly material innovations.",
      image: "/activity/eco-friendly-smart-packaging-with-biodegradable-ma.png",
      alt: "eco-friendly smart packaging",
      color: "orange",
      alignment: "left",
    },
    {
      icon: Cpu,
      title: "Deep Tech",
      description:
        "Cutting-edge technologies including quantum computing, advanced AI, blockchain, and emerging digital innovations.",
      image: "/activity/futuristic-technology-lab-with-quantum-computers-a.png",
      alt: "futuristic technology lab",
      color: "purple",
      alignment: "right",
    },
    {
      icon: Gamepad2,
      title: "Toys",
      description: "Educational toys, interactive gaming, STEM learning products, and child development solutions.",
      image: "/activity/interactive-educational-toys-with-ar-technology-an.png",
      alt: "interactive educational toys",
      color: "pink",
      alignment: "left",
    },
    {
      icon: Shirt,
      title: "Textiles & Apparels",
      description: "Sustainable fashion, smart textiles, traditional crafts modernization, and global fashion trends.",
      image: "/activity/sustainable-fashion-design-studio-with-smart-texti.png",
      alt: "sustainable fashion design studio",
      color: "cyan",
      alignment: "right",
    },
    {
      icon: Shield,
      title: "Defence",
      description: "Defense technology, cybersecurity, aerospace systems, and national security solutions.",
      image: "/activity/advanced-defense-technology-center-with-cybersecur.png",
      alt: "advanced defense technology center",
      color: "red",
      alignment: "left",
    },
    {
      icon: Heart,
      title: "Medical & Healthcare",
      description: "Healthcare technology, medical devices, telemedicine, and pharmaceutical innovations.",
      image: "/activity/modern-medical-facility-with-telemedicine-technolo.png",
      alt: "modern medical facility",
      color: "red",
      alignment: "right",
    },
    {
      icon: Brain,
      title: "AI, EdTech & SaaS",
      description: "Artificial intelligence applications, educational technology, and software-as-a-service solutions.",
      image: "/activity/ai-powered-educational-platform-with-interactive-l.png",
      alt: "AI-powered educational platform",
      color: "indigo",
      alignment: "left",
    },
    {
      icon: Gift,
      title: "Gift & Handicrafts",
      description: "Traditional handicrafts, artisan products, cultural gifts, and heritage craft preservation.",
      image: "/activity/eco-friendly-smart-packaging-with-biodegradable-ma.png",
      alt: "traditional handicrafts",
      color: "yellow",
      alignment: "right",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "text-green-600 bg-green-50 border-green-200",
      blue: "text-blue-600 bg-blue-50 border-blue-200",
      orange: "text-orange-600 bg-orange-50 border-orange-200",
      purple: "text-purple-600 bg-purple-50 border-purple-200",
      pink: "text-pink-600 bg-pink-50 border-pink-200",
      cyan: "text-cyan-600 bg-cyan-50 border-cyan-200",
      red: "text-red-600 bg-red-50 border-red-200",
      indigo: "text-indigo-600 bg-indigo-50 border-indigo-200",
      yellow: "text-yellow-600 bg-yellow-50 border-yellow-200",
    }
    return colorMap[color as keyof typeof colorMap] || "text-gray-600 bg-gray-50 border-gray-200"
  }

  return (
    <StaggerContainer className="space-y-16 lg:space-y-24" staggerDelay={0.2}>
      {sectors.map((sector, index) => {
        const IconComponent = sector.icon
        const isLeft = sector.alignment === "left"

        return (
          <StaggerItem key={index} direction="up">
            <div className="group">
              {/* Mobile Layout - Always stacked */}
              <div className="lg:hidden">
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden border border-gray-100 hover:border-gray-200">
                  <div className="relative h-64 overflow-hidden">
                    <LazyImage
                      src={sector.image}
                      alt={sector.alt}
                      width={1200}
                      height={800}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    <div
                      className={`absolute top-4 left-4 p-3 rounded-2xl border ${getColorClasses(sector.color)} hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-[#FF4500] transition-colors duration-300">
                      {sector.title}
                    </h3>
                    <p className="text-gray-600 font-body leading-relaxed">{sector.description}</p>
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Alternating sides */}
              <div className="hidden lg:block">
                <div
                  className={`grid lg:grid-cols-2 gap-12 xl:gap-16 items-center ${!isLeft ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Content Section */}
                  <AnimationWrapper
                    direction={isLeft ? "right" : "left"}
                    delay={0.3}
                    className={`space-y-6 ${!isLeft ? "lg:col-start-2" : ""}`}
                  >
                    <div
                      className={`inline-flex items-center gap-4 p-4 rounded-2xl border ${getColorClasses(sector.color)} hover:scale-105 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 flex-shrink-0" />
                      <h3 className="text-3xl xl:text-4xl font-display font-bold text-gray-900">{sector.title}</h3>
                    </div>

                    <p className="text-xl xl:text-2xl font-body text-gray-700 leading-relaxed">{sector.description}</p>

                    <div className="flex items-center text-[#FF4500] font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer hover:text-[#FF6347]">
                      <span className="mr-2">Explore Solutions</span>
                      <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                  </AnimationWrapper>

                  {/* Image Section */}
                  <AnimationWrapper
                    direction={isLeft ? "left" : "right"}
                    delay={0.1}
                    className={`${!isLeft ? "lg:col-start-1" : ""}`}
                  >
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                      <LazyImage
                        src={sector.image}
                        alt={sector.alt}
                        width={1200}
                        height={800}
                        className="object-cover w-full h-80 xl:h-96 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-500"></div>
                    </div>
                  </AnimationWrapper>
                </div>
              </div>

              {index < sectors.length - 1 && (
                <div className="mt-16 lg:mt-24 flex justify-center">
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent animate-pulse"></div>
                </div>
              )}
            </div>
          </StaggerItem>
        )
      })}
    </StaggerContainer>
  )
}
