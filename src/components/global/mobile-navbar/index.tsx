"use client";

import { socials, contactInfo } from "@/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";

const MobileNavbar = () => {
  const lenis = useLenis();
  const navRef = useRef<HTMLElement>(null);
  const linkRef = useRef<(HTMLDivElement | null)[]>([]);
  const contactRef = useRef<HTMLDivElement>(null);
  const topLineRef = useRef<HTMLSpanElement>(null);
  const bottomLineRef = useRef<HTMLSpanElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const iconTl = useRef<gsap.core.Timeline | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);

  // Navigation sections matching your existing header
  const navigationSections = [
    { id: "home", label: "Home" },
    { id: "events", label: "Events" },
    { id: "verticals", label: "Sectors" },
    { id: "event-activity", label: "Events & Activities" },
    { id: "hall-of-fame", label: "Hall of Fame" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  useGSAP(() => {
    if (!navRef.current) return;

    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linkRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linkRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2"
      );

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current?.reverse();
      iconTl.current?.reverse();
    } else {
      tl.current?.play();
      iconTl.current?.play();
    }
    setIsOpen(!isOpen);
  };

  // Smooth scroll function using Lenis
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element && lenis) {
      const offsetTop = element.offsetTop - 80; // 80px offset for navbar

      // Use Lenis for smooth, controlled scrolling
      lenis.scrollTo(offsetTop, {
        duration: 1.5, // Control speed here
        easing: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t), // Smooth easing function
        force: true, // Force scroll even if already at position
        lock: true, // Lock scrolling during animation
      });
    } else if (element) {
      // Fallback to native smooth scroll if Lenis is not available
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    // Close menu after navigation
    setTimeout(() => {
      toggleMenu();
    }, 300);
  };

  return (
    <>
      {/* Full Screen Navigation Overlay */}
      <nav
        ref={navRef}
        className="fixed z-50 flex flex-col justify-between w-full h-full px-6 sm:px-10 uppercase bg-gradient-to-br from-[#FF4500] via-[#FF6347] to-[#DC143C] text-white py-16 sm:py-28 gap-y-10 lg:w-1/2 lg:left-1/2 selection:text-orange-200"
      >
        <div className="flex flex-col text-4xl sm:text-5xl gap-y-3 md:text-6xl lg:text-8xl">
          {navigationSections.map((section, index) => (
            <div key={index} ref={(el) => { linkRef.current[index] = el; }}>
              <button
                onClick={() => scrollToSection(section.id)}
                className="transition-all duration-300 cursor-pointer hover:text-orange-200 hover:scale-105 text-left font-bold tracking-wide"
              >
                {section.label}
              </button>
            </div>
          ))}

          {/* Visit Exhibition Button */}
          <div className="mt-4">
            <a
              href="/exhibition"
              className="inline-block bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-6 py-3 rounded-full font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/30 hover:border-white/50"
              onClick={() => {
                setTimeout(() => {
                  toggleMenu();
                }, 300);
              }}
            >
              Visit Exhibition
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <div
        className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 cursor-pointer w-14 h-14 md:w-16 md:h-16 top-0 right-4 sm:right-6 selection:text-orange-200 shadow-lg hover:shadow-xl lg:hidden"
        onClick={toggleMenu}
        style={

             {clipPath: "circle(50.1% at 50% 50%)" }
        }
      >
        <span
          ref={topLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
        <span
          ref={bottomLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
      </div>
    </>
  );
};

export default MobileNavbar;
