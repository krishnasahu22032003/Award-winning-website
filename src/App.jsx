import NavBar from "./components/NavBar"
import HeroSection from "./sections/HeroSection"
import MessageSection from "./sections/MessageSection"

function App() {


  return (
    <>
    <main>
<NavBar/>
   <div id="smooth-wrapper">
     <div id="smooth-content">
<HeroSection/>
<MessageSection/>

     </div>
   </div>

   
    </main>


    </>
  )
}
export default App