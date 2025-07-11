export const About = () => {
  return (
    <section className="py-24 px-6 gradient-subtle">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary mb-8">
          About the Roundtable
        </h2>
        
        <div className="w-16 h-1 bg-accent-gold mx-auto mb-12 rounded" />
        
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
          Inside Edge is a curated, application-only gathering of engineering leaders. 
          <span className="text-primary font-medium"> No sponsors. No recordings.</span> Just unfiltered 
          insights in a private, closed-door setting at the prestigious Hilton Sydney.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="card-luxury text-center">
            <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold text-primary mb-2">Exclusive Access</h3>
            <p className="text-muted-foreground">Invitation-only community of senior tech leaders</p>
          </div>
          
          <div className="card-luxury text-center">
            <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold text-primary mb-2">Open Dialogue</h3>
            <p className="text-muted-foreground">Honest discussions without corporate constraints</p>
          </div>
          
          <div className="card-luxury text-center">
            <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold text-primary mb-2">Premium Network</h3>
            <p className="text-muted-foreground">Connect with Australia's top engineering talent</p>
          </div>
        </div>
      </div>
    </section>
  );
};