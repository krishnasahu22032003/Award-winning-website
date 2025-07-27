import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          {/* #CHUGZESTIK with hover + gradient effect */}
          <h1
            className="general-title text-center py-5 z-10 relative
              bg-gradient-to-r from-[#f6d365] via-[#fda085] to-[#f6d365]
              text-transparent bg-clip-text transition-all duration-300 hover:scale-105 hover:from-[#ffb347] hover:to-[#ffcc33]"
          >
            #CHUGZESTIK
          </h1>
        </div>

        <img
          src="/images/footer-drink.png"
          alt="Zestik Footer Drink"
          className="absolute top-40 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] object-contain z-0 pointer-events-none"
        />

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="./images/yt.svg" alt="YouTube" />
          </div>
          <div className="social-btn">
            <img src="./images/insta.svg" alt="Instagram" />
          </div>
          <div className="social-btn">
            <img src="./images/tiktok.svg" alt="TikTok" />
          </div>
        </div>

        <div className="mt-15 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium relative z-10">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>Zestik Flavors</p>
            </div>
            <div>
              <p>Zest Club</p>
              <p>Campus Creators</p>
              <p>Zest Ambassadors</p>
            </div>
            <div>
              <p>About Zestik</p>
              <p>Contact</p>
              <p>Zest Journal</p>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p>
              Join the Zestik Circle and be the first to know about new drops,
              collabs, and juicy updates!
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999] bg-transparent outline-none"
              />
              <img src="/images/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>

        <div className="copyright-box relative z-10">
          <p>Copyright © 2025 Zestik - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
