import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import UseCases from "@/components/UseCases";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Services />
        <UseCases />
        <Stats />
        <CTA />
        <Footer />
      </div>
      
      {/* Animated background overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-purple-500/10 to-transparent"></div>
      </div>
    </main>
  );
}