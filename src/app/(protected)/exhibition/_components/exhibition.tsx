"use client"
import { motion } from "framer-motion"
import { ShineBorder } from "./border-shine"
import { MagicCardDemo } from "./shop"
import { HoverBorderGradient } from "./hover-button-gradient"

export function ExhibitionDemo() {
  const handleClick = () => {
    window.open("https://opexn-meet.vercel.app/", "_blank")
  }

  const handleVisitExhibition = () => {
    window.open("https://stall.opexn.com/", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with animated title */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text mb-2">
            Virtual Exhibition
          </h1>
          <p className="text-white/70 text-lg">Explore our pavilions and stalls</p>
        </motion.div>

        {/* Video Section with Shine Border */}
        <ShineBorder
          className="relative w-full h-48 sm:h-64 md:h-96 rounded-lg mb-8 bg-slate-800 text-white flex items-center justify-center overflow-hidden"
          color={["#cc0000", "#1a0000", "#FFBE7B"]}
          borderWidth={1}
          duration={8}
        >
          <video className="w-full h-full object-cover pointer-events-none" autoPlay loop muted playsInline>
            <source src={"/curtain_reveal.mp4"} type="video/mp4" />

          </video>
        </ShineBorder>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 animate-spotlight">
          <div className="flex-1 p-2">
            {/* Pavilions */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold  text-white mb-6">Pavilions</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8">
                <MagicCardDemo text="Pavilion 1" />
                <MagicCardDemo text="Pavilion 2" />
              </div>
            </motion.div>

            {/* Stalls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Stalls</h2>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 md:gap-4">
                {[...Array(32)].map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 md:w-16 md:h-16 flex justify-center items-center border-2 border-white/40 rounded-lg relative hover:border-white hover:scale-105 transition-all duration-300 bg-black/20 backdrop-blur-sm"
                  >
                    {i % 5 === 0 && (
                      <div className="dot absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <span className="flex size-3">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75"></span>
                          <span className="relative inline-flex size-3 rounded-full bg-pink-400"></span>
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            className="lg:w-1/3 flex flex-col gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Actions</h2>

             <HoverBorderGradient
          className="w-full h-24 rounded-xl"
          containerClassName="rounded-xl w-full"
          gradientColors={["#FF5F6D", "#FFC371", "#9E7AFF", "#FE8BBB"]}
          borderWidth={3}
        >
          <span className="text-2xl md:text-4xl font-bold">Buyer Zone</span>
        </HoverBorderGradient>

            <HoverBorderGradient
              children={<span className="text-2xl md:text-3xl font-bold py-4">Join Discussion</span>}
              className="w-full h-[80px] md:h-[100px] rounded-xl"
              containerClassName="rounded-xl w-full"
              gradientColors={["#9E7AFF", "#FE8BBB", "#FF5F6D", "#FFC371"]}
              borderWidth={3}
              onClick={handleClick}
            />

            <HoverBorderGradient
              children={<span className="text-2xl md:text-3xl font-bold py-4">Visit Exhibition</span>}
              className="w-full h-[80px] md:h-[100px] rounded-xl"
              containerClassName="rounded-xl w-full"
              gradientColors={["#FFC371", "#9E7AFF", "#FE8BBB", "#FF5F6D"]}
              borderWidth={3}
              onClick={handleVisitExhibition}
            />
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes emit {
          0% {
            transform: scale(0.5);
            box-shadow: 0 0 0 0 rgba(204, 0, 0, 0.5);
          }
          50% {
            transform: scale(1.2);
            box-shadow: 0 0 20px 10px rgba(204, 0, 0, 0);
          }
          100% {
            transform: scale(0.5);
            box-shadow: 0 0 0 0 rgba(204, 0, 0, 0);
          }
        }
        .animate-emit {
          animation: emit 2s infinite ease-in-out;
        }

        @keyframes shine {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 200%;
          }
        }

        .animate-shine {
          animation: shine 8s linear infinite;
        }

        @keyframes spotlight {
          0% {
            background-position: -100% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }

        .animate-spotlight {
          animation: spotlight 8s infinite linear;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.05) 25%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0.05) 75%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% 100%;
        }
      `}</style>
    </div>
  )
}
