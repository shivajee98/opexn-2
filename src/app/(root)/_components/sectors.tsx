import { SectorCard } from "./sector-cards"
import { AnimationWrapper, StaggerContainer, StaggerItem } from "./animation-wrapper"

const Sectors = () => {
  return (
    <section id="verticals" className="py-16 lg:py-32 select-none relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FCFCFA] to-[#F8F5EE]"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#FF6347]/2 to-transparent"></div>
      </div>

      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#FF4500] to-[#FF6347] rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] bg-gradient-to-tl from-[#FF6347] to-[#FF7F50] rounded-full blur-[90px] animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-gradient-to-r from-[#FF4500] to-[#DC143C] rounded-full blur-[80px] animate-pulse opacity-50"></div>
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,69,0,0.2) 1px, transparent 0)`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="mb-16 lg:mb-24">
          <div className="max-w-4xl">
            <AnimationWrapper direction="left" duration={0.8}>
              <div className="inline-flex items-center justify-center px-6 py-3 mb-8 text-sm font-semibold bg-gradient-to-r from-[#FF4500]/10 to-[#FF6347]/10 backdrop-blur-sm rounded-full border border-[#FF4500]/20 shadow-lg">
                <span className="w-2 h-2 bg-gradient-to-r from-[#FF4500] to-[#FF6347] rounded-full mr-3 animate-pulse"></span>
                <span className="bg-gradient-to-r from-[#FF4500] to-[#FF6347] bg-clip-text text-transparent font-bold">
                  Our Expertise
                </span>
              </div>
            </AnimationWrapper>

            <AnimationWrapper direction="left" delay={0.2} duration={0.8}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[0.9] tracking-tight mb-8">
                <span className="text-gray-900">Sectors we</span>{" "}
                <span className="text-transparent bg-gradient-to-r from-[#FF4500] via-[#FF6347] to-[#DC143C] bg-clip-text">
                  work with.
                </span>
              </h1>
            </AnimationWrapper>

            <AnimationWrapper direction="left" delay={0.4} duration={0.8}>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-body leading-relaxed max-w-3xl mb-6">
                Driving innovation across diverse industries with specialized expertise and global partnerships.
              </p>
            </AnimationWrapper>

            <StaggerContainer className="flex flex-wrap gap-3 mt-8" staggerDelay={0.1}>
              {["Technology", "Healthcare", "Finance", "Education", "Manufacturing"].map((sector, index) => (
                <StaggerItem key={sector} direction="scale">
                  <span className="px-4 py-2 bg-white/80 backdrop-blur-sm text-[#FF4500] text-sm font-semibold rounded-full border border-[#FF4500]/20 hover:bg-gradient-to-r hover:from-[#FF4500] hover:to-[#FF6347] hover:text-white transition-all duration-300 cursor-pointer hover:scale-105 shadow-md transform hover:-translate-y-1">
                    {sector}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        <AnimationWrapper direction="up" delay={0.6} duration={0.8}>
          <SectorCard />
        </AnimationWrapper>
      </div>
    </section>
  )
}

export default Sectors
