"use client";

import clsx from "clsx";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { usePrevNextButtons } from "./embla-carousel-arrow-buttons";
import { useAutoplay } from "./embla-carousel-autoplay";
import { useAutoplayProgress } from "./embla-carousel-autoplay-progress";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { LazyImage } from "../lazy-image";
import { ChevronLeft, ChevronRight, Pause, Play } from "@/components/icons/micro";
import Image from "next/image";

type PropType = {
  slides: {
    id: number;
    src: string;
    heading: string;
    subHeading: string;
  }[];
  options?: EmblaOptionsType;
};
const TWEEN_FACTOR_BASE = 0.2;

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const progressNode = useRef<HTMLDivElement>(null);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 5000 }),
    ClassNames(),
  ]);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const {
    autoplayIsPlaying,
    toggleAutoplay,
    onAutoplayButtonClick,
    hoverAutoplay,
  } = useAutoplay(emblaApi);

  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__parallax__layer") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
          const tweenNode = tweenNodes.current[slideIndex];
          if (tweenNode) {
            tweenNode.style.transform = `translateX(${translate}%)`;
          }
        });
      });
    },
    []
  );

  // Update progress bars for each slide
  const updateProgressBars = useCallback(() => {
    if (!emblaApi || !autoplayIsPlaying) return;

    const autoplay = emblaApi.plugins().autoplay;
    if (!autoplay) return;

    const timeUntilNext = autoplay.timeUntilNext();
    const totalDuration = autoplay.options.delay;

    progressRefs.current.forEach((progressBar, index) => {
      if (!progressBar) return;

      if (index === activeIndex) {
        progressBar.style.transition = `transform ${timeUntilNext}ms linear`;
        progressBar.style.transform = "translateX(0%)";
      } else {
        progressBar.style.transition = "none";
        progressBar.style.transform = "translateX(-100%)";
      }
    });
  }, [emblaApi, activeIndex, autoplayIsPlaying]);

  // Handle slide change and update headings visibility
  const handleSlideChange = useCallback(() => {
    if (!emblaApi) return;

    const selectedIndex = emblaApi.selectedScrollSnap();
    setActiveIndex(selectedIndex);

    // Reset and start progress bar animation
    updateProgressBars();
  }, [emblaApi, updateProgressBars]);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("slideFocus", tweenParallax)
      .on("select", handleSlideChange);

    // Initial setup
    handleSlideChange();

    return () => {
      emblaApi.off("select", handleSlideChange);
    };
  }, [
    emblaApi,
    tweenParallax,
    setTweenFactor,
    setTweenNodes,
    handleSlideChange,
  ]);

  return (
    <div className="h-dvh w-full bg-black select-none">
      <div
        className={clsx(
          "embla",
          "absolute w-full z-9 lg:top-32 md:top-[17vh] top-10"
        )}
      >
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((item, index) => (
              <div
                className={clsx(
                  "embla__slide",
                  "lg:pt-16 max-md:flex-1 max-md:pt-36 lg:px-12 relative group/card group/text"
                )}
                key={item.id}
              >
                <div className="relative">
                  <div
                    className={clsx(
                      "lg:top-[-65px] max-sm:top-[-90px] z-50 absolute w-[90%] transition-opacity duration-500"
                    )}
                  >
                    {activeIndex === index ? (
                      <motion.h2
                        initial={{
                          x: 1000,
                          opacity: 0,
                        }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          transition: {
                            duration: 1.2,
                          },
                        }}
                        className="lg:text-6xl max-sm:text-5xl text-wrap font-normal text-white md:text-6xl "
                      >
                        {item.heading}
                      </motion.h2>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="embla__parallax rounded-lg">
                    <div className={clsx("embla__parallax__layer relative")}>
                      <LazyImage
                        className="embla__slide__img embla__parallax__img "
                        src={item.src}
                        alt={item.heading}
                        width={1200}
                        height={800}
                      />

                      <div className="absolute w-full h-full top-0 left-0 transition duration-500 group-hover/card:bg-black opacity-30"></div>

                      <div className="absolute opacity-0 lg:top-28 bottom-[260px] left-2 text-xl text-white group-hover/text:opacity-[100%]">
                        {item.subHeading}
                      </div>

                      {/* Individual slide progress bar */}
                      <div
                        className={cn(
                          "absolute bottom-0 left-0 right-0 h-1 bg-gray-600 overflow-hidden",
                          activeIndex === index ? "opacity-100" : "opacity-40"
                        )}
                      >
                        <div
                          ref={(el) => {
                            progressRefs.current[index] = el;
                          }}
                          className="h-full w-full bg-blue-500 transform"
                          style={{
                            transform:
                              index === 0
                                ? "translateX(0%)"
                                : "translateX(-100%)",
                            transition:
                              index === 0 ? "transform 3000ms linear" : "none",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="embla__buttons">
          <button
            onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button
            onClick={() => onAutoplayButtonClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          >
            <ChevronRight size={24} className="text-white" />
          </button>
          <button onClick={toggleAutoplay} type="button">
            {autoplayIsPlaying ? <Pause size={20} className="text-white" /> : <Play size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
