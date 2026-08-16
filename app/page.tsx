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
    <main className="min-h-screen bg-[--bg-black] text-[--text-primary] selection:bg-[--purple-glow] selection:text-white">
      <Loader />
      <Navbar />
      <Hero />
      <AboutMe />
      <ToolsGrid />
      <Projects />
      <ContactChat />
      <Footer />
    </main>
  );
}
