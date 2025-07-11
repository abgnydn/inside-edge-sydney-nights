import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToApplication = () => {
    const element = document.getElementById('apply');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 42, 58, 0.85), rgba(18, 22, 27, 0.9)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Inside Edge
            <span className="block text-4xl md:text-5xl font-normal text-white/90 mt-2">
              Sydney Edition
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-accent-gold mx-auto mb-8 rounded" />
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
            A Tech Leader's Roundtable at the Hilton Sydney
          </p>
          
          <p className="text-lg text-white/80 mb-12 font-light">
            November 14 · Invite-Only · Premium Access
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={scrollToApplication}
              className="btn-luxury text-lg px-10 py-6 shadow-glow hover:shadow-premium"
            >
              Apply for Access
            </Button>
            
            <button className="btn-ghost-luxury text-lg px-10 py-6">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};