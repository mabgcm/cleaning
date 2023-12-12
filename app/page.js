// import 'bootstrap/dist/css/bootstrap.css'

import AboutArea from "./home/About";
import Cta from "./home/Cta";
import HeroSection from "./home/Hero";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Cta />
      <AboutArea />
    </div>
  )
}
