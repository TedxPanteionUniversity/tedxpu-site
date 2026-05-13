import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventsSection from "@/components/EventsSection";
import TeamSection from "@/components/TeamSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-white text-black">
      <Header />
      <Hero />
      <EventsSection />
      <TeamSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
