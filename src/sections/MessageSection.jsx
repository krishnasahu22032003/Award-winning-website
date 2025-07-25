import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const MessageSection = () => {
  useGSAP(() => {
    // Split text with SplitType instead of gsap/SplitText for better support
    const first = new SplitType(".first-message", { types: "words" });
    const second = new SplitType(".second-message", { types: "words" });
    const paragraph = new SplitType(".message-paragraph", {
      types: "words, lines",
      lineClass: "paragraph-line",
    });

    gsap.from(first.words, {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".first-message",
        start: "top 80%",
      },
    });

    gsap.from(second.words, {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".second-message",
        start: "top 80%",
      },
    });

    gsap.to(".msg-text-scroll", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 80%",
      },
    });

    gsap.from(paragraph.words, {
      yPercent: 150,
      opacity: 0,
      stagger: 0.02,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".message-paragraph",
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper text-center space-y-5">
            <h1 className="first-message text-4xl md:text-6xl font-bold uppercase">
              Stir up your fearless past and
            </h1>

            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="msg-text-scroll"
            >
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="text-red-brown text-3xl md:text-5xl font-bold uppercase">
                  Fuel Up
                </h2>
              </div>
            </div>

            <h1 className="second-message text-4xl md:text-6xl font-bold uppercase">
              your future with every gulp of Perfect Protein
            </h1>
          </div>

          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-xl px-6 flex-center overflow-hidden">
              <p className="message-paragraph text-center text-lg text-[#f3e7db] leading-relaxed">
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you’re one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
