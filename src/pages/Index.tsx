
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrainingSection from "@/components/TrainingSection";
import ValueProposition from "@/components/ValueProposition";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <Header />
      <Hero />
      <TrainingSection />
      <ValueProposition />
      <SocialProof />
      <Footer />
    </div>
  );
};

export default Index;
