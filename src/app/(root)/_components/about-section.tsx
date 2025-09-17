import { AnimationWrapper, StaggerContainer, StaggerItem } from "./animation-wrapper"

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FCFCFA] via-[#F8F5EE] to-[#FCFCFA]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#FF4500]/2 to-transparent"></div>
      </div>

      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute top-1/6 right-1/5 w-[450px] h-[450px] bg-gradient-to-br from-[#FF4500] via-[#FF6347] to-[#FF7F50] rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/6 left-1/5 w-[350px] h-[350px] bg-gradient-to-tl from-[#FF6347] via-[#FF4500] to-[#DC143C] rounded-full blur-[90px] animate-float-delayed"></div>
        <div className="absolute top-2/3 right-1/3 w-[250px] h-[250px] bg-gradient-to-r from-[#FF7F50] to-[#FF4500] rounded-full blur-[80px] animate-pulse opacity-50"></div>
      </div>

      <div className="pb-16 lg:pb-24 pt-16 lg:pt-24 select-none relative z-10 lg:max-w-[1400px] mx-auto flex flex-col px-6">
        {/* Header */}
        <AnimationWrapper className="text-center mb-16" direction="up" duration={0.8}>
          <div className="inline-flex items-center justify-center px-6 py-3 mb-8 text-sm font-semibold bg-gradient-to-r from-[#FF4500]/10 to-[#FF6347]/10 backdrop-blur-sm rounded-full border border-[#FF4500]/20 shadow-lg">
            <span className="w-2 h-2 bg-gradient-to-r from-[#FF4500] to-[#FF6347] rounded-full mr-3 animate-pulse"></span>
            <span className="text-[#FF4500] font-bold">About Us</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display mb-6 tracking-tight text-gray-900">
            About{" "}
            <div className="inline-block">
              <img
                src="opexn_icon.png"
                alt="OPEXN Logo"
                className="inline-block h-16 md:h-20 w-auto"
              />
            </div>
          </h2>
          <p className="text-xl md:text-2xl font-heading text-[#FF4500] max-w-4xl mx-auto leading-relaxed font-medium">
            Connect With Opportunities
          </p>
        </AnimationWrapper>

        {/* Main Description */}
        <AnimationWrapper className="mb-16" direction="up" delay={0.2} duration={0.8}>
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-[#FF4500]/10 hover:shadow-2xl hover:border-[#FF4500]/20 transition-all duration-500 hover:scale-[1.02]">
            <p className="text-lg md:text-xl font-body text-gray-800 leading-relaxed text-center max-w-5xl mx-auto">
              OPEXN is more than a platform – it's a movement to redefine how startups and businesses grow, connect, and
              scale in a globally connected innovation economy. We bridge the gap between potential and access, creating
              launchpads for high-potential enterprises.
            </p>
          </div>
        </AnimationWrapper>

        {/* Vision & Mission */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-16" staggerDelay={0.2}>
          <StaggerItem direction="left">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-[#FF4500]/10 hover:shadow-2xl hover:border-[#FF4500]/30 transition-all duration-500 hover:scale-105 group">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FF4500] to-[#FF6347] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#FF4500] mb-4">Vision</h3>
              <p className="font-body text-gray-800 leading-relaxed">
                To be the bridge between innovation and opportunity by connecting emerging ventures with infinite
                possibilities across markets, mentorship, and capital.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem direction="right">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-[#FF6347]/10 hover:shadow-2xl hover:border-[#FF6347]/30 transition-all duration-500 hover:scale-105 group">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FF6347] to-[#FF4500] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#FF6347] mb-4">Mission</h3>
              <p className="font-body text-gray-800 leading-relaxed">
                To build a global, hybrid ecosystem that supports and scales startups through digital exhibitions,
                access to capital, mentorship, and strategic collaborations - all under one platform.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Stakeholders Grid */}
        <div className="mb-16">
          <AnimationWrapper direction="up" delay={0.4} duration={0.8}>
            <h3 className="text-3xl md:text-4xl font-display text-center text-[#FF4500] mb-12 tracking-tight">
              Our Ecosystem
            </h3>
          </AnimationWrapper>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              {
                title: "Start-ups/Business",
                description:
                  "We work with enterprises across sectors to support innovation, scale, and sustainability through access to markets, mentorship, and national ecosystem linkages.",
                color: "text-[#FF4500]",
                icon: "🚀",
              },
              {
                title: "Investors",
                description:
                  "We connect ventures with impact-focused investors and CSR partners to unlock capital, visibility, and long-term support.",
                color: "text-[#FF6347]",
                icon: "💰",
              },
              {
                title: "Mentors",
                description:
                  "Our mentor network offers strategic guidance and ecosystem navigation to help ventures build strong foundations and scale responsibly.",
                color: "text-[#FF4500]",
                icon: "🎯",
              },
              {
                title: "Incubators",
                description:
                  "Through incubation partners, we enable growth via infrastructure, expert support, and exposure to national-level opportunities.",
                color: "text-[#FF6347]",
                icon: "🏢",
              },
              {
                title: "Industries",
                description:
                  "We co-create partnerships with industries to foster local value chains, market access, and impactful collaborations across sectors.",
                color: "text-[#FF4500]",
                icon: "🏭",
              },
              {
                title: "Government Bodies",
                description:
                  "We align with government agencies to facilitate policy linkages, program support, and institutional collaboration for enterprise development.",
                color: "text-[#FF6347]",
                icon: "🏛️",
              },
            ].map((item, index) => (
              <StaggerItem key={index} direction="scale">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-200/30 hover:shadow-2xl hover:border-[#FF4500]/30 transition-all duration-500 hover:scale-105 group transform hover:-translate-y-2">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className={`text-xl font-heading font-bold ${item.color} mb-3`}>{item.title}</h4>
                  <p className="font-body text-gray-700 text-sm leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Key Facilities */}
        <div className="mb-16">
          <AnimationWrapper direction="up" delay={0.6} duration={0.8}>
            <h3 className="text-3xl md:text-4xl font-display text-center text-[#FF4500] mb-12 tracking-tight">
              Our Facilities
            </h3>
          </AnimationWrapper>
          <AnimationWrapper direction="up" delay={0.8} duration={0.8}>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-500">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-800">
                {[
                  "Funding Rounds & Pitching sessions",
                  "Listing on e-commerce platform",
                  "Mentors & Investors",
                  "Panel Discussion & Round Tables",
                  "Buyer leads & Industrial connects",
                  "Government Connects & Grants",
                  "CSR Funds",
                  "GTM Strategy & Pitch deck preparation",
                  "National & International Events",
                  "Featuring in magazine",
                  "IPR, Trademark and other licensing support",
                  "Legal Compliances & GEM Registration",
                  "Mail, Calling & Digital Content Creating Support",
                  "Import and Export",
                ].map((facility, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
                  >
                    <div
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        index % 2 === 0 ? "bg-[#FF4500]" : "bg-[#FF6347]"
                      }`}
                    ></div>
                    <span className="font-body text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimationWrapper>
        </div>

        {/* Core Sectors */}
        <div className="mb-16">
          <AnimationWrapper direction="up" delay={1.0} duration={0.8}>
            <h3 className="text-3xl md:text-4xl font-display text-center text-[#FF6347] mb-8 tracking-tight">
              Core Sectors
            </h3>
          </AnimationWrapper>
          <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.05}>
            {[
              "Deep Tech",
              "Agri-Tech",
              "EV & Robotics",
              "Packaging",
              "Toys",
              "Textile & Fashion",
              "Defence",
              "Medical & Healthcare",
              "Ed-Tech",
              "Gift & Handicraft",
            ].map((sector, index) => (
              <StaggerItem key={index} direction="scale" className="mt-2">
                <span
                  className={`text-white px-6 py-3 rounded-full font-heading text-sm font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer transform hover:-translate-y-1 ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-[#FF4500] to-[#FF6347] hover:from-[#FF6347] hover:to-[#FF4500]"
                      : "bg-gradient-to-r from-[#FF6347] to-[#FF4500] hover:from-[#FF4500] hover:to-[#FF6347]"
                  }`}
                >
                  {sector}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Updated Directors' Message */}
        <AnimationWrapper direction="up" delay={1.2} duration={0.8}>
          <div className="bg-gradient-to-r from-[#FF4500] to-[#FF6347] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-center">
                Letter from the Directors
              </h3>
              <div className="space-y-4 font-body text-white/95 leading-relaxed max-w-4xl mx-auto">
                <p>
                  At OPEXN, we believe innovation must be inclusive, and transformation must be collective. Our work is
                  rooted in the understanding that meaningful impact happens when entrepreneurs, institutions,
                  investors, and ecosystem enablers come together to create real opportunities—not just conversations.
                </p>
                <p>
                  Through our platforms, we enable curated engagement across ten core sectors: Deep Tech, Agri-Tech, EV
                  & Robotics, Packaging, Toys, Textile & Fashion, Defence, Medical & Healthcare, Ed-Tech, and Gift &
                  Handicraft. These domains are not just industries—they represent the pillars of India's emerging
                  innovation economy.
                </p>
                <p>
                  OPEXN was founded with a simple yet powerful mission: to bridge the gap between potential and access.
                  We don't just organize events; we build launchpads. Whether it's a policy-linked roundtable, an
                  investor-led summit, or a grassroots-focused platform, each initiative is designed to foster scale,
                  visibility, and long-term growth for high-potential enterprises.
                </p>
                <p>
                  Our vision is grounded in a hybrid model that combines the scale of digital with the depth of
                  real-world connection. Whether it's enabling a rural innovator to find global buyers or helping a tech
                  startup navigate policy landscapes, OPEXN serves as a bridge—not just to markets, but to ecosystems.
                </p>
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  )
}

export default AboutSection
