import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import ToolsGrid from "@/components/ToolsGrid";
import Projects from "@/components/Projects";
import ContactChat from "@/components/ContactChat";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-base text-white selection:bg-purple-glow selection:text-white relative">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-teal-glow blur-[160px] opacity-20 mix-blend-screen animate-pulse-slow" />
        <div className="absolute top-[30%] -left-40 w-[600px] h-[800px] bg-purple-glow blur-[160px] opacity-20 mix-blend-screen" />
        <div className="absolute top-[60%] -right-40 w-[600px] h-[800px] bg-teal-glow blur-[160px] opacity-20 mix-blend-screen" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-glow blur-[160px] opacity-30 mix-blend-screen" />
      </div>

      <div className="relative z-10">
        <Loader>
          <Navbar />
        <Hero />
        <AboutMe />
        <ToolsGrid />
        <Projects />
        <ContactChat />
        <Footer />
        </Loader>
      </div>
    </main>
  );
}
