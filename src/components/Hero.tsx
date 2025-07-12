import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import heroLondon from "@/assets/hero-london.jpg";
import heroHongKong from "@/assets/hero-hongkong.jpg";
import heroSydneyBar from "@/assets/hero-sydney-bar.jpg";

const heroImages = [
  { src: heroBg, alt: "Exclusive Tech Leadership" },
  { src: heroLondon, alt: "London Tech Leaders" },
  { src: heroHongKong, alt: "Hong Kong Innovation" },
  { src: heroSydneyBar, alt: "Sydney Premium Venue" }
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Enhanced zoom effect
  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = ((timestamp - start) % 5000) / 5000;
      setZoom(1 + progress * 0.08);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [currentImageIndex]);


  const scrollToApplication = () => {
    const element = document.getElementById('apply');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Fixed background images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-4000 ${
            index === currentImageIndex ? 'opacity-40 z-0' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: index === currentImageIndex ? `scale(${zoom})` : 'scale(1)',
            filter: 'brightness(0.4) contrast(1.2) saturate(1.1)',
            transition: 'opacity 4s ease-in-out, transform 6s cubic-bezier(0.4,0,0.2,1)'
          }}
        />
      ))}
      {/* Modern luxury image indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-4 z-30">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`group relative transition-all duration-500 ${
              index === currentImageIndex 
                ? 'w-12 h-3' 
                : 'w-3 h-3 hover:w-6'
            }`}
            aria-label={`Show image ${index + 1}`}
          >
            <div className={`w-full h-full rounded-full transition-all duration-500 ${
              index === currentImageIndex 
                ? 'bg-gradient-to-r from-accent-gold to-yellow-400 shadow-xl shadow-accent-gold/50' 
                : 'bg-white/30 group-hover:bg-white/50 backdrop-blur-sm'
            }`} />
            {index === currentImageIndex && (
              <div className="absolute inset-0 bg-gradient-to-r from-accent-gold to-yellow-400 rounded-full animate-pulse opacity-50" />
            )}
          </button>
        ))}
      </div>

      {/* Main content with modern 2024 glassmorphism */}
      <div 
        className="relative z-20 text-center px-8 max-w-6xl mx-auto"
      >
        <div className="relative overflow-hidden">
          {/* Modern glassmorphism card */}
          <div className="backdrop-blur-3xl bg-white/[0.08] border border-white/[0.12] rounded-2xl p-16 shadow-2xl shadow-black/25 relative">
            {/* Modern glass effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-white/[0.04] rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/[0.05] via-transparent to-white/[0.02] rounded-2xl" />
            
            {/* Sharp accent borders */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-accent-gold/60 to-transparent" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-accent-gold/60 to-transparent" />
            
            {/* Content */}
            <div className="relative z-10">
              <h1 className="font-display text-7xl md:text-9xl font-black mb-8 leading-tight tracking-tight">
                <span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-gold to-white animate-slide-in-left drop-shadow-2xl "
                  style={{ 
                    animationDelay: '0.2s',
                    textShadow: '0 0 40px rgba(255, 215, 0, 0.3)',
                    lineHeight: '1.4'
                  }}
                >
                  Inside Edge
                </span>
                <span 
                  className="block text-5xl md:text-7xl font-light mt-6 tracking-wider animate-slide-in-right"
                  style={{ 
                    animationDelay: '0.4s',
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFFF00 75%, #FFD700 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 30px rgba(255, 215, 0, 0.5)',
                    filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.4))',
                    lineHeight: '1.2'
                  }}
                >
                  Sydney Edition
                </span>
              </h1>
              
              {/* Modern decorative elements */}
              <div className="flex justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-accent-gold/60" />
                <div className="w-2 h-2 bg-accent-gold/80 rounded-full mx-6 shadow-sm shadow-accent-gold/30" />
                <div className="w-24 h-[1px] bg-gradient-to-r from-accent-gold/60 via-yellow-300/60 to-accent-gold/60" />
                <div className="w-2 h-2 bg-accent-gold/80 rounded-full mx-6 shadow-sm shadow-accent-gold/30" />
                <div className="w-16 h-[1px] bg-gradient-to-r from-accent-gold/60 to-transparent" />
              </div>
              
              <p 
                className="text-3xl md:text-4xl text-white mb-8 font-light tracking-wide leading-relaxed animate-fade-in-up"
                style={{ 
                  animationDelay: '0.8s',
                  textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)'
                }}
              >
                A Tech Leader's Roundtable at the Hilton Sydney
              </p>
              
              <p 
                className="text-xl text-accent-gold/90 mb-20 font-medium tracking-widest uppercase animate-fade-in-up"
                style={{ 
                  animationDelay: '1s',
                  textShadow: '0 0 20px rgba(255, 215, 0, 0.3)'
                }}
              >
                November 14 · Invite-Only · Premium Access
              </p>
              
              <div 
                className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in-up"
                style={{ animationDelay: '1.2s' }}
              >
                <Button 
                  onClick={scrollToApplication}
                  className="relative overflow-hidden text-lg px-12 py-8 font-bold rounded-2xl border-0 bg-gradient-to-r from-accent-gold to-yellow-400 text-primary shadow-2xl transition-all duration-300 w-64 focus:outline-none focus:ring-4 focus:ring-accent-gold/60 active:scale-95 hover:from-yellow-300 hover:to-yellow-500 hover:scale-110 hover:shadow-accent-gold/50 before:absolute before:inset-0 before:bg-white/30 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
                >
                  <span className="relative z-10 text-xl">Apply for Access</span>
                </Button>
                <Button
                  className="relative group text-lg px-12 py-8 font-bold rounded-2xl border-2 border-accent-gold bg-transparent text-accent-gold shadow-2xl transition-all duration-300 w-64 focus:outline-none focus:ring-4 focus:ring-accent-gold/60 active:scale-95 overflow-hidden hover:scale-110 hover:shadow-accent-gold/30"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-primary text-xl">Learn More</span>
                  <span className="absolute inset-0 left-0 w-0 group-hover:w-full bg-gradient-to-r from-accent-gold to-yellow-400 transition-all duration-500 z-0 rounded-2xl" style={{transitionProperty: 'width'}}></span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-accent-gold/80 z-30"
        style={{ animationDelay: '1.5s' }}
      >
        <div className="flex flex-col items-center space-y-3 animate-bounce time">
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};