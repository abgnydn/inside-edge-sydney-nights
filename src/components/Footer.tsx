export const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-muted text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h3 className="font-display text-2xl font-semibold text-primary mb-4">
            Inside Edge
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connecting the world's most innovative technology leaders through 
            exclusive, closed-door roundtables in major tech hubs.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
          <a 
            href="mailto:hello@insideedge.tech" 
            className="text-muted-foreground hover:text-accent-gold transition-colors duration-300"
          >
            hello@insideedge.tech
          </a>
          <a 
            href="https://linkedin.com/company/inside-edge" 
            className="text-muted-foreground hover:text-accent-gold transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-accent-gold transition-colors duration-300"
          >
            Privacy Policy
          </a>
        </div>
        
        <div className="w-full h-px bg-border mb-8" />
        
        <p className="text-muted-foreground text-sm">
          © 2025 Inside Edge. Curated in partnership with Australia's leading tech organizations.
        </p>
      </div>
    </footer>
  );
};