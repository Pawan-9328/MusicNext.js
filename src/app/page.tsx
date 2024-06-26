import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import MusicSchoolTextimonials from "./components/TextimonialCards"
import  UpcomingWebinars from "./components/UpcomingWebinars"
import Instructors from "./components/Instructors";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
  
      <HeroSection />
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTextimonials/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
