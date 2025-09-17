"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

// Q&A data from the provided text
const QA_DATA = [
  {
    q: "What is a virtual exhibition?",
    a: "A virtual exhibition is an online event that replicates the experience of a physical exhibition or trade show, allowing exhibitors to showcase products, services, or artwork digitally and attendees to interact from anywhere.",
  },
  {
    q: "Who can host a virtual exhibition on your platform?",
    a: "Our platform is designed for businesses, event organizers, educational institutions, museums, and individuals looking to showcase their products, services, or creative work online.",
  },
  {
    q: "Do attendees need to download any software to join?",
    a: "No, our virtual exhibitions run directly in the browser. Attendees simply log in with a link—no downloads required.",
  },
  {
    q: "How many attendees can join an exhibition?",
    a: "We support unlimited attendees, with scalable infrastructure to handle everything from small niche events to global exhibitions with thousands of participants.",
  },
  {
    q: "How can exhibitors set up their booths?",
    a: "Exhibitors can customize their virtual booths by uploading logos, product images, videos, brochures, and even embedding live chat or demo sessions.",
  },
  {
    q: "Can exhibitors interact with visitors in real-time?",
    a: "Yes, our platform offers live chat, video calls, and Q&A sessions so exhibitors can connect directly with potential customers.",
  },
  {
    q: "Can exhibitors collect attendee data?",
    a: "Absolutely. Exhibitors get access to detailed analytics such as booth visits, file downloads, and attendee interactions (with GDPR compliance).",
  },
  {
    q: "How do attendees explore the exhibition?",
    a: "Attendees can browse booths, watch presentations, download brochures, chat with exhibitors, and network with other participants through an easy-to-use virtual interface.",
  },
  {
    q: "Is there a networking feature for attendees?",
    a: "Yes, we offer attendee matchmaking, chat lounges, and one-on-one video calls to encourage meaningful connections.",
  },
  {
    q: "Can attendees access the exhibition after it ends?",
    a: "Yes, exhibitions can be kept live for on-demand access, allowing attendees to revisit content and booths even after the live event.",
  },
  {
    q: "Does your platform support live webinars or presentations?",
    a: "Yes, organizers can host live keynote sessions, panel discussions, or product demos with interactive Q&A and polls.",
  },
  {
    q: "Can exhibitors showcase 3D products or galleries?",
    a: "Yes, our platform supports 3D product displays, immersive galleries, and even virtual reality integration for a richer experience.",
  },
  {
    q: "What kind of branding options are available?",
    a: "Organizers can fully customize the event theme, logos, banners, colors, and booth designs to align with their brand.",
  },
  {
    q: "What pricing plans do you offer?",
    a: "We offer flexible pricing—ranging from pay-per-event packages to enterprise subscriptions—based on the number of booths, attendees, and features required.",
  },
  {
    q: "Do you offer free trials or demos?",
    a: "Yes, we provide live demos and trial accounts so you can explore the platform before committing.",
  },
  {
    q: "Can attendees join for free?",
    a: "Organizers can choose whether to make the exhibition free or ticketed. Our platform supports secure online payments for paid events.",
  },
  {
    q: "What devices are supported?",
    a: "Our platform is fully responsive and works seamlessly on desktops, tablets, and mobile devices.",
  },
  {
    q: "Is the platform secure?",
    a: "Yes, we use enterprise-grade security, SSL encryption, and GDPR-compliant data practices to protect both exhibitors and attendees.",
  },
  {
    q: "How reliable is the streaming quality?",
    a: "We use global CDN support to deliver smooth, high-quality streaming with minimal latency for live sessions and videos.",
  },
  {
    q: "Do you provide technical support during the event?",
    a: "Yes, we offer 24/7 live technical support to ensure your exhibition runs smoothly without interruptions.",
  },
]

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm here to help you learn about OPEXN's virtual exhibition platform. Ask me anything!",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const findBestAnswer = (question: string): string => {
    const lowerQuestion = question.toLowerCase()

    // Find exact or partial matches
    const exactMatch = QA_DATA.find(
      (qa) => lowerQuestion.includes(qa.q.toLowerCase()) || qa.q.toLowerCase().includes(lowerQuestion),
    )

    if (exactMatch) return exactMatch.a

    // Find keyword matches
    const keywords = lowerQuestion.split(" ").filter((word) => word.length > 3)
    let bestMatch = null
    let maxScore = 0

    QA_DATA.forEach((qa) => {
      const qaText = (qa.q + " " + qa.a).toLowerCase()
      const score = keywords.reduce((acc, keyword) => {
        return acc + (qaText.includes(keyword) ? 1 : 0)
      }, 0)

      if (score > maxScore) {
        maxScore = score
        bestMatch = qa
      }
    })

    if (bestMatch && maxScore > 0) {
      return (bestMatch as typeof QA_DATA[0]).a
    }

    return "I'd be happy to help! You can ask me about virtual exhibitions, platform features, pricing, technical requirements, or any other aspect of OPEXN's services. Try asking something like 'What is a virtual exhibition?' or 'How does pricing work?'"
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findBestAnswer(inputValue),
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const suggestedQuestions = [
    "What is a virtual exhibition?",
    "How does pricing work?",
    "What devices are supported?",
    "Do you offer free trials?",
  ]

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-[#FF4500] to-[#FF6347] text-white p-4 rounded-full shadow-2xl hover:shadow-[#FF4500]/25 transition-all duration-300 hover:scale-110 group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 w-96 h-[500px] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FF4500] to-[#FF6347] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">OPEXN Assistant</h3>
                <p className="text-xs opacity-90">Online • Ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-1"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? "bg-gray-100 text-gray-800 rounded-bl-sm"
                      : "bg-gradient-to-r from-[#FF4500] to-[#FF6347] text-white rounded-br-sm"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot && <Bot className="w-4 h-4 mt-0.5 text-[#FF4500] flex-shrink-0" />}
                    {!message.isBot && <User className="w-4 h-4 mt-0.5 text-white/80 flex-shrink-0" />}
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-sm max-w-[80%]">
                  <div className="flex items-center space-x-2">
                    <Bot className="w-4 h-4 text-[#FF4500]" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-700 text-center">Try asking:</p>
                <div className="grid grid-cols-1 gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setInputValue(question)}
                      className="text-left p-2 text-xs bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors text-gray-800"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200/50">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about OPEXN..."
                className="flex-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4500]/20 focus:border-[#FF4500] text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-[#FF4500] to-[#FF6347] text-white p-3 rounded-xl hover:shadow-lg hover:shadow-[#FF4500]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 640px) {
          .chatbot-window {
            width: calc(100vw - 2rem);
            height: calc(100vh - 8rem);
            position: fixed;
            bottom: 1rem;
            right: 1rem;
            left: 1rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Chatbot
