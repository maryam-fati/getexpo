
'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CustomScrollbar = () => {
  const thumbRef = useRef(null);
  const scrollTweenRef = useRef(null);

  useEffect(() => {
    const thumb = thumbRef.current;
    let scrollbarHeight = window.innerHeight * 0.9;
    let maxThumbMove, maxScroll, thumbHeight;

    // Calculate scrollbar dimensions
    const updateScrollbar = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      scrollbarHeight = window.innerHeight * 0.9;

      maxScroll = Math.max(scrollHeight - clientHeight, 1);
      const scrollRatio = scrollbarHeight / scrollHeight;

      thumbHeight = Math.max(scrollbarHeight * scrollRatio, 50);
      maxThumbMove = scrollbarHeight - thumbHeight;

      gsap.set(thumb, { height: thumbHeight });
    };

    // Update thumb position
    const updateThumbPosition = () => {
      if (!maxScroll) return;
      const progress = window.scrollY / maxScroll;
      gsap.set(thumb, { y: progress * maxThumbMove });
    };

    // Initialize ScrollTrigger
    const initScrollTrigger = () => {
      if (scrollTweenRef.current) scrollTweenRef.current.kill();

      ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        onUpdate: self => {
          updateThumbPosition();
        },
        onRefresh: () => {
          updateScrollbar();
          updateThumbPosition();
        }
      });
    };

    // Initial setup
    updateScrollbar();
    initScrollTrigger();
    updateThumbPosition();

    // Handle resize
    const onResize = () => {
      updateScrollbar();
      ScrollTrigger.refresh();
      updateThumbPosition();
    };

    window.addEventListener("resize", onResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", onResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="hidden md:block fixed top-[8vh]  md:top-[5vh] right-0 md:right-2 w-[6px] h-[90vh] bg-[#0000004f] rounded-full z-[1000] overflow-hidden">
      <div
        ref={thumbRef}
        className="w-full bg-white rounded-full absolute top-0"
      />
    </div>
  );
};

export default CustomScrollbar;