import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import WorkCultureSection from "./components/WorkCultureSection";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import DevelopmentProcessSection from "./components/DevelopmentProcessSection";
import FeaturedProjectsSection from "./components/FeaturedProjectsSection";
import OpenSourceProjectsSection from "./components/OpenSourceProjectsSection";
import TechnologiesSection from "./components/TechnologiesSection"; 
import WhatWeDoSection from "./components/WhatWeDo";
import InsightsSection from "./components/InsightsSection";
import CTASection from "./components/CTASection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection /> 
      <WhatWeDoSection />
      <WhyChooseSection />
      <WorkCultureSection />
      <ServicesSection />
      <DevelopmentProcessSection />
      <FeaturedProjectsSection />
      <OpenSourceProjectsSection />
      <TechnologiesSection />
      <InsightsSection />
      <CTASection />
      <Footer />
      
    </>
  );
}

export default App;
