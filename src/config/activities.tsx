const Calendar = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
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

const Trophy = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55.47.98.97 1.21C12.04 18.75 14 20 14 20s1.96-1.25 3.03-1.79c.5-.23.97-.66.97-1.21v-2.34" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
)

const Lightbulb = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M9 21h6" />
    <path d="M12 17v4" />
    <path d="M12 3a6 6 0 0 1 6 6c0 1.66-.67 3.17-1.76 4.24-.43.43-.64 1.01-.64 1.6V16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-1.16c0-.59-.21-1.17-.64-1.6A5.98 5.98 0 0 1 6 9a6 6 0 0 1 6-6z" />
  </svg>
)

const Target = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const Handshake = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
    <path d="M3 22v-7c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v7" />
    <path d="M21 22v-7a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v7" />
  </svg>
)

const Presentation = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M2 3h20v14H2z" />
    <path d="M8 21l4-4 4 4" />
  </svg>
)

const BookOpen = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
)

const Zap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
  </svg>
)

export const ACTIVITIES = [
  {
    id: 1,
    title: "Training Programs",
    description:
      "Comprehensive skill development programs designed to enhance entrepreneurial capabilities and business acumen across various industry sectors.",
    image: "/activity/modern-training-facility-with-interactive-workshop.png",
    icon: BookOpen,
    features: [
      "Industry-specific skill development",
      "Expert-led workshops and seminars",
      "Hands-on practical training sessions",
      "Certification upon completion",
      "Networking opportunities with peers",
    ],
    outcomes: [
      "Enhanced business knowledge and skills",
      "Industry-recognized certifications",
      "Expanded professional network",
      "Improved market readiness",
      "Access to ongoing mentorship",
    ],
  },
  {
    id: 2,
    title: "Exhibitions",
    description:
      "Strategic exhibition platforms that showcase innovative products and services, connecting businesses with potential customers and partners.",
    image: "/activity/large-modern-exhibition-hall-with-innovative-techn.png",
    icon: Presentation,
    features: [
      "Product showcase opportunities",
      "B2B networking sessions",
      "Industry expert presentations",
      "Live demonstrations",
      "Media coverage and publicity",
    ],
    outcomes: [
      "Increased brand visibility",
      "New customer acquisition",
      "Partnership opportunities",
      "Market feedback and insights",
      "Sales lead generation",
    ],
  },
  {
    id: 3,
    title: "Investors Meet & Conference",
    description:
      "Exclusive investor meetups and conferences that bridge the gap between innovative startups and potential investors.",
    image: "/activity/investor-conference-with-entrepreneurs-presenting-.png",
    icon: Handshake,
    features: [
      "Pitch presentation opportunities",
      "One-on-one investor meetings",
      "Due diligence workshops",
      "Funding strategy sessions",
      "Success story sharing",
    ],
    outcomes: [
      "Access to funding opportunities",
      "Investor network expansion",
      "Refined business propositions",
      "Strategic partnerships",
      "Market validation",
    ],
  },
  {
    id: 4,
    title: "Buyer & Seller Meet",
    description:
      "Targeted matchmaking events that connect suppliers with buyers, facilitating business transactions and long-term partnerships.",
    image: "/activity/business-meeting-room-with-b2b-negotiations-and-pr.png",
    icon: Users,
    features: [
      "Pre-qualified buyer-seller matching",
      "Product demonstration sessions",
      "Negotiation facilitation",
      "Contract guidance",
      "Follow-up support",
    ],
    outcomes: [
      "Direct business transactions",
      "Long-term supply partnerships",
      "Market expansion opportunities",
      "Revenue growth",
      "Supply chain optimization",
    ],
  },
  {
    id: 5,
    title: "Round Table Discussions",
    description:
      "Strategic roundtable discussions bringing together industry leaders to address challenges and explore opportunities.",
    image: "/activity/business-roundtable-meeting-with-executives-in-mod.png",
    icon: Target,
    features: [
      "Industry expert participation",
      "Policy discussion forums",
      "Challenge identification sessions",
      "Solution brainstorming",
      "Action plan development",
    ],
    outcomes: [
      "Industry insights and trends",
      "Policy influence opportunities",
      "Collaborative solutions",
      "Strategic partnerships",
      "Market intelligence",
    ],
  },
  {
    id: 6,
    title: "Boot Camp & Party",
    description:
      "Intensive bootcamp sessions combined with networking parties to accelerate business growth and build lasting relationships.",
    image: "/activity/tech-bootcamp-with-developers-coding-intensively-f.png",
    icon: Zap,
    features: [
      "Intensive skill-building sessions",
      "Accelerated learning programs",
      "Networking parties and events",
      "Peer collaboration opportunities",
      "Fun and engaging activities",
    ],
    outcomes: [
      "Rapid skill development",
      "Strong peer networks",
      "Enhanced team building",
      "Increased motivation",
      "Lasting business relationships",
    ],
  },
  {
    id: 7,
    title: "Pitching Competitions",
    description:
      "Competitive pitching events where entrepreneurs present their ideas to win funding, mentorship, and recognition.",
    image: "/activity/startup-pitch-competition-with-entrepreneur-presen.png",
    icon: Trophy,
    features: [
      "Structured pitch presentations",
      "Expert jury evaluation",
      "Prize money and awards",
      "Media coverage",
      "Mentorship opportunities",
    ],
    outcomes: [
      "Funding opportunities",
      "Public recognition",
      "Refined pitch skills",
      "Investor connections",
      "Market validation",
    ],
  },
  {
    id: 8,
    title: "Workshops",
    description:
      "Specialized workshops focusing on specific skills and knowledge areas essential for business success and growth.",
    image: "/activity/hands-on-workshop-with-participants-working-on-pro.png",
    icon: Lightbulb,
    features: [
      "Skill-specific training modules",
      "Interactive learning sessions",
      "Expert facilitators",
      "Practical exercises",
      "Resource materials",
    ],
    outcomes: [
      "Specialized skill acquisition",
      "Practical knowledge application",
      "Professional development",
      "Industry best practices",
      "Continuous learning mindset",
    ],
  },
  {
    id: 9,
    title: "Challenges/Hackathon",
    description:
      "Innovation challenges and hackathons that encourage creative problem-solving and rapid prototype development.",
    image: "/activity/hackathon-coding-event-with-developers-working-on-.png",
    icon: Calendar,
    features: [
      "Problem-solving challenges",
      "Rapid prototyping sessions",
      "Team collaboration",
      "Technical mentorship",
      "Innovation showcases",
    ],
    outcomes: [
      "Innovative solutions",
      "Technical skill enhancement",
      "Team building experience",
      "Recognition and awards",
      "Potential product development",
    ],
  },
]
