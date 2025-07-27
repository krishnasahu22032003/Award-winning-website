import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";
import VideoPinSection from "../components/VideoPinSection";

const BenefitSection = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  });

  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
        <p>
  Step into Zestik’s World: <br />
  More Than Just a Sip.
</p>
          <div className="mt-20 col-center">
<ClipPathTitle
  title={"Golden Roast Infusion"}
  color={"#E7D6C3"}
  bg={"linear-gradient(135deg, #5E3A2C, #D8A774)"}
  className={"first-title"}
  borderColor={"#2E1B12"}
/>
<ClipPathTitle
  title={"Lunar Zest"}
 color={"#E2D3C3"} 
  bg={"linear-gradient(135deg, #2B1D1A, #5E4B44, #B9A58E)"} 
  className={"second-title"}
  borderColor={"#3E2C28"} 
/>
<ClipPathTitle
  title={"Elemental Bloom"}
  color={"#E3DDD5"} 
  bg={"linear-gradient(135deg, #3A3D3B, #77807A, #D1D7D1)"} 
  className={"third-title "}
  borderColor={"#6A6E68"} 
/>
         <ClipPathTitle
  title={"Velvet Pure"}
  color={"#3B372F"} // Refined cocoa-stone – soft and grounded
  bg={"linear-gradient(135deg, #FAF3E6, #F4D8AE, #EDD2B4)"} // Ivory → creamy gold → peach-blush
  className={"fourth-title"}
  borderColor={"#D6BA94"} // Smooth almond-gold border
/>

          </div>

          <div className="md:mt-0 mt-10">
         <p>And that's just the beginning...</p>
          </div>
        </div>
      </div>

      <div className="relative overlay-box">
        <VideoPinSection />
      </div>
    </section>
  );
};

export default BenefitSection;
