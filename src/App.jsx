import NavBar from "./components/NavBar"
import SmoothScroll from "./components/SmoothScroll"
import FlavorSection from "./sections/FlavorSection"
import HeroSection from "./sections/HeroSection"
import MessageSection from "./sections/MessageSection"

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

     </div>
   </div>

   
    </main>


    </>
  )
}
export default App