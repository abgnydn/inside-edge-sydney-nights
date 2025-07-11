export const WhoShouldApply = () => {
  const criteria = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "C-Level Executives",
      description: "CTOs, Heads of Engineering, and Product Leaders"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Senior Technologists",
      description: "Senior Developers and Software Architects"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "Infrastructure Leaders",
      description: "DevOps Leaders and Platform Architects"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Technical Founders",
      description: "Startup CTOs and Technical Co-founders"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Innovation Experts",
      description: "Specialists in .NET, C#, AI, and cutting-edge tech"
    }
  ];

  return (
    <section className="py-24 px-6 gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary mb-6">
            Who Should Apply
          </h2>
          <div className="w-16 h-1 bg-accent-gold mx-auto mb-8 rounded" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We seek distinguished technology leaders who drive innovation and shape 
            the future of engineering excellence in Australia and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {criteria.map((item, index) => (
            <div key={index} className="card-luxury group">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-accent-gold/10 rounded-xl flex items-center justify-center text-accent-gold group-hover:bg-accent-gold group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-primary mb-2 group-hover:text-accent-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="card-luxury max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-accent-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-display text-2xl font-semibold text-primary">
                Selection Criteria
              </h3>
            </div>
            <p className="text-muted-foreground">
              All applicants undergo a careful selection process. We prioritize senior-level 
              experience, thought leadership, and genuine contribution to technical discussions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};