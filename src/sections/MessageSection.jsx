import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const MessageSection = () => {
  const containerRef = useRef();

  useGSAP(() => {
    const firstMsgSplit = new SplitText(".first-message", { type: "words" });
    const secMsgSplit = new SplitText(".second-message", { type: "words" });
    const paragraphSplit = new SplitText(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    // Animate first message
    gsap.fromTo(
      firstMsgSplit.words,
      { color: null },
      {
        color: "#faeade",
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".first-message",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      }
    );

    // Animate second message
    gsap.fromTo(
      secMsgSplit.words,
      { color: null },
      {
        color: "#faeade",
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".second-message",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      }
    );

    // Reveal "Fuel Up"
    gsap.to(".msg-text-scroll", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power3.out",
      duration: 1.2,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
      },
    });

    // Animate paragraph words
    gsap.from(paragraphSplit.words, {
      y: 40,
      autoAlpha: 0,
      ease: "power2.out",
      duration: 0.8,
      stagger: 0.03,
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top 90%",
        end: "bottom 20%",
        scrub: 1,
      },
    });

    ScrollTrigger.refresh();
  }, { scope: containerRef });

  return (
    <section className="message-content" ref={containerRef}>
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message">Stir up your fearless past and</h1>

            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                transition: "clip-path 0.5s ease-out",
              }}
              className="msg-text-scroll"
            >
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="text-red-brown">Fuel Up</h2>
              </div>
            </div>

            <h1 className="second-message">
              your future with every gulp of Perfect Protein
            </h1>
          </div>

          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-visible">
              <p className="overflow-visible leading-relaxed text-center">
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
