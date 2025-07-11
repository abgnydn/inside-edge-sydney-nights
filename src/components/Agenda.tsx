export const Agenda = () => {
  const schedule = [
    {
      time: "4:00 PM",
      title: "Arrival & Welcome Reception",
      description: "Premium networking with Sydney's tech elite",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      time: "4:30 PM",
      title: "Opening Circle",
      description: "Challenges on the Table - Setting the agenda",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      time: "5:00 PM",
      title: "Closed-Door Roundtable",
      description: "Deep-dive discussions on critical engineering challenges",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      time: "6:30 PM",
      title: "Gourmet Networking",
      description: "Premium canapés and continued discussions",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14c0-5.33-4.67-10-10-10s-10 4.67-10 10h20zm0 0v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4m14 0H5" />
        </svg>
      )
    },
    {
      time: "7:30 PM",
      title: "Strategic Breakouts",
      description: "Optional 1:1s and focused group discussions",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary mb-6">
            Event Agenda
          </h2>
          <div className="w-16 h-1 bg-accent-gold mx-auto mb-8 rounded" />
        </div>

        <div className="card-luxury mb-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-2">Location</h3>
              <p className="text-muted-foreground">Hilton Sydney<br />Premium Conference Suite</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0v1a2 2 0 11-4 0V7m-2 7h16" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-2">Date</h3>
              <p className="text-muted-foreground">November 14<br />Thursday Evening</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-2">Duration</h3>
              <p className="text-muted-foreground">4:00 PM – 8:30 PM<br />4.5 Hours</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {schedule.map((item, index) => (
            <div key={index} className="flex items-start space-x-6 group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white group-hover:bg-accent-gold transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              
              <div className="flex-1 card-luxury">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="font-display text-2xl font-semibold text-primary group-hover:text-accent-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className="text-lg font-medium text-accent-gold bg-accent-gold/10 px-4 py-1 rounded-full">
                    {item.time}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};