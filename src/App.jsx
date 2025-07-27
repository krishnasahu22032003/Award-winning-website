import NavBar from "./components/NavBar"
import SmoothScroll from "./components/SmoothScroll"
import BenefitSection from "./sections/BenefitSection"
import FlavorSection from "./sections/FlavorSection"
import FooterSection from "./sections/FooterSection"
import HeroSection from "./sections/HeroSection"
import MessageSection from "./sections/MessageSection"
import NutritionSection from "./sections/NutritionSection"
import TestimonialSection from "./sections/TestimonialSection"

function App() {


  return (
    <>
    <SmoothScroll/>
    <main>

<NavBar/>
   <div id="smooth-wrapper">
     <div id="smooth-content">
<HeroSection/>
<MessageSection/>
<FlavorSection/>
<NutritionSection/>
<div>
  <BenefitSection/>
  <TestimonialSection/>
</div>
<FooterSection/>
     </div>
   </div>
    </main>
    </>
  )
}
export default App;