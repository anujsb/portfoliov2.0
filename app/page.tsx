import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { FloatingNavDemo } from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  return (
    <main>
      <FloatingNavDemo />
      <div className="flex flex-col min-h-screen ">
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
