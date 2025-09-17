"use client";

import { ScrollToTop } from "@/components/global/smooth-scroll/scroll-to-top";
import { Footer } from "./_components/footer";
import dynamic from "next/dynamic";
import Loader from "@/components/global/Loader";
import ActivityAndEvent from "./_components/activity-and-event";
import { HallOfFame } from "./_components/hall-of-fame";
import AboutSection from "./_components/about-section";
import ContactSection from "./_components/contact-section";
import Sectors from "./_components/sectors";
import OngoingEvents from "./_components/ongoing-events";
import Chatbot from "@/components/global/chat-bot";
import ReactLenis from "lenis/react";

const HeroSlider = dynamic(
  () => import("@/components/global/home/hero-slider"),
  {
    loading: () => <Loader />,
    ssr: false,
  }
);
const DynamicHeader = dynamic(() => import("./_components/header"), {
  ssr: false,
});

const HomePage = () => {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.8, // Slower, more noticeable smooth scroll
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
        orientation: "vertical", // Vertical scrolling
        gestureOrientation: "vertical", // Gesture orientation
        smoothWheel: true, // Enable smooth wheel scrolling
        wheelMultiplier: 1, // Wheel scroll multiplier
        touchMultiplier: 2, // Touch scroll multiplier
        autoResize: true, // Auto resize on window resize
      }}
      className="relative w-screen min-h-screen overflow-x-hidden"
    >
      <div className="bg-black relative">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-[#FF4500]/10 via-[#FF6347]/5 to-transparent rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-[#FF6347]/8 via-[#FF4500]/4 to-transparent rounded-full blur-[100px] animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#FF7F50]/6 to-[#FF4500]/3 rounded-full blur-[140px] animate-pulse"></div>
        </div>

        <div className="relative z-10">
            <DynamicHeader />
          <div id="home">
            <HeroSlider />
          </div>
          <main className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FCFCFA] via-[#F8F5EE] to-[#FCFCFA]">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF4500]/2 to-transparent"></div>
            </div>

            <div className="relative z-10">
              <div id="events">
                <OngoingEvents />
              </div>
              <div id="verticals">
                <Sectors />
              </div>
              <div id="event-activity">
                <ActivityAndEvent />
              </div>
              <div id="hall-of-fame">
                <HallOfFame />
              </div>
              <div id="about">
                <AboutSection />
              </div>
              <div id="contact">
                <ContactSection />
              </div>
              <Footer />
              <Chatbot />
            </div>
          </main>
        </div>
      </div>
    </ReactLenis>
  );
};

export default HomePage;
