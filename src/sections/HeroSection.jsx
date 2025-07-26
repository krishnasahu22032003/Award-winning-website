import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({ delay: 1.5 });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1.5,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5"
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });
    heroTl.to(".hero-container", {
      yPercent: 0,
      ease: "power1.inOut",
    });
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10;
      const y = (e.clientY / innerHeight - 0.5) * 10;

      gsap.to(titleRef.current, {
        x,
        y,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.to(subtitleRef.current, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.to(buttonRef.current, {
        x: -x * 0.3,
        y: -y * 0.3,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    const container = heroRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);
  useGSAP(() => {
    gsap.set('#video-frame', {
      clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
      borderRadius: '0 0 40% 10%',
    });
    gsap.from('#video-frame', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
    });
  }, []);
  return (
    <section  className="bg-main-bg">
      <div id="video-frame" className="hero-container" ref={heroRef}>
        {isTablet ? (
          <>
            {isMobile && (
              <img
                src="/images/hero-bg.png"
                className="absolute bottom-40 size-full object-cover"
              />
            )}
            <img
              src="/images/hero-img.png"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto"
            />
          </>
        ) : (
          <video
            src="/videos/hero-bg.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1
              ref={titleRef}
              className="hero-title glow-title"
              style={{ willChange: "transform" }}
            >
              Crushing Smooth
            </h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div
              ref={subtitleRef}
              className="hero-subtitle glow-subtitle"
              style={{ willChange: "transform" }}
            >
              <h1>Energy + Froth </h1>
            </div>
          </div>

          <h2>
            Zestik isn’t just a drink — it’s a full-throttle flavor bomb built
            to blast boredom, fuel your fire, and make every sip feel like a
            dare. Unleash the energy. Unleash the vibe.
          </h2>
          <button
            ref={buttonRef}
            className="hero-button cursor-pointer glow-button"
            style={{ willChange: "transform" }}
          >
            <p>Pop the Chaos</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
