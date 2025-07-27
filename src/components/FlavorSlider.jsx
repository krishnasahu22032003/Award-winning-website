import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const FlavorSlider = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    if (!isTablet) {
      const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1500}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-${scrollAmount + 1500}px`,
        ease: "power1.inOut",
      });
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<"
      );
  }, [isTablet]);

  return (
    <div
      ref={sliderRef}
      className={`slider-wrapper ${isTablet ? "overflow-x-hidden" : ""}`}
    >
      <div
        className={`flavors ${
          isTablet
            ? "flex flex-col items-center gap-16 py-10"
            : "flex flex-row"
        }`}
      >
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          >
            <img
              src={`/images/${flavor.name}.png`}
              alt={flavor.name}
              className="absolute bottom-0 left-1/2 -translate-x-1/2
                       object-contain rounded-3xl shadow-xl
                       hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <h1 className="text-4xl md:text-6xl mt-2 tracking-normal font-semibold">
              {flavor.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
