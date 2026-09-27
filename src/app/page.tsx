import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ThesisSection from "@/components/ThesisSection";
import MethodSection from "@/components/MethodSection";
import FishSection from "@/components/FishSection";
import EcosystemSection from "@/components/EcosystemSection";
import OriginSection from "@/components/OriginSection";
import SymbolsSection from "@/components/SymbolsSection";
import DialogueSection from "@/components/DialogueSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-pipra-paper text-pipra-charcoal">
      <Header />
      <main className="flex-1">
        <Hero />
        <ThesisSection />
        <MethodSection />
        <FishSection />
        <EcosystemSection />
        <OriginSection />
        <SymbolsSection />
        <DialogueSection />
      </main>
      <Footer />
    </div>
  );
}
