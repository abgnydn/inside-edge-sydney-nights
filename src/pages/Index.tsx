import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { PastEvents } from "@/components/PastEvents";
import { VenueShowcase } from "@/components/VenueShowcase";
import { WhoShouldApply } from "@/components/WhoShouldApply";
import { Agenda } from "@/components/Agenda";
import { ApplicationForm } from "@/components/ApplicationForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <PastEvents />
      <VenueShowcase />
      <WhoShouldApply />
      <Agenda />
      <ApplicationForm />
      <Footer />
    </div>
  );
};

export default Index;
