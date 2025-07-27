import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const FlavorTitle = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".first-text-split h1", {
      type: "chars",
    });
    const secondTextSplit = SplitText.create(".second-text-split h1", {
      type: "chars",
    });

    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      },
    });

    gsap.to(".flavor-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 10%",
      },
    });

    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 1%",
      },
    });
  });

  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-10 py-3 first-text-split">
        <h1> We brew 6</h1>
      </div>

      <div
        style={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }}
        className="flavor-text-scroll "
      >
        <div className="md:block hidden pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3"
         style={{
    background: "linear-gradient(135deg, #d7a07f, #a65d43, #68403a)", 
    backgroundSize: "300% 300%",
    animation: "zestikPulse 10s ease infinite",
    borderRadius: "1.5rem",
  }}>
          <h2 className="text-milk">Zestified</h2>
        </div>
      </div>

 <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
  <h1 className="text-center">
    <span className="block md:inline mb-3">delicious</span>{" "}
    <span className="block md:inline">flavors</span>
  </h1>
</div>

    </div>
  );
};

export default FlavorTitle;
