import About from "@/components/About";
import StarsCanvas from "@/components/canvas/Stars";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { FloatingNavDemo } from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  return (
    <main className="">
      <FloatingNavDemo />
      <div className="flex flex-col min-h-screen p-4 md:p-10 lg:p-16">
        <StarsCanvas />
        <Hero />
        {/* <About /> */}
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
