import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

export const Attendees = () => {
  const attendees = [
    {
      initials: "M.C.",
      role: "CTO",
      company: "Series C Fintech",
      avatar: avatar1
    },
    {
      initials: "J.R.",
      role: "Head of Engineering",
      company: "Scale-up Unicorn",
      avatar: avatar2
    },
    {
      initials: "S.L.",
      role: "VP Engineering",
      company: "Public SaaS",
      avatar: avatar3
    },
    {
      initials: "A.K.",
      role: "Technical Founder",
      company: "AI Startup",
      avatar: avatar1
    },
    {
      initials: "R.P.",
      role: "Chief Architect",
      company: "Fortune 500",
      avatar: avatar2
    },
    {
      initials: "D.W.",
      role: "CTO",
      company: "PropTech Leader",
      avatar: avatar3
    }
  ];

  const companyLogos = [
    "Atlassian", "Canva", "Culture Amp", "SafetyCulture", "Deputy", "Koala"
  ];

  const vcFirms = [
    "Blackbird Ventures", "AirTree Ventures", "Square Peg", "Insight Partners"
  ];

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary mb-6">
            A Glimpse Behind the Curtain
          </h2>
          <div className="w-16 h-1 bg-accent-gold mx-auto mb-8 rounded" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Past attendees include C-suite executives, technical founders, and senior engineers 
            from Australia's most innovative companies and leading global firms.
          </p>
        </div>

        {/* Past Attendees Avatars */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-semibold text-primary text-center mb-8">
            Past Attendees Include
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {attendees.map((attendee, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-border group-hover:border-accent-gold transition-colors duration-300">
                    <img
                      src={attendee.avatar}
                      alt={attendee.initials}
                      className="w-full h-full object-cover filter blur-sm grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full bg-primary/40 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {attendee.initials}
                    </span>
                  </div>
                </div>
                <p className="text-sm font-medium text-primary">{attendee.role}</p>
                <p className="text-xs text-muted-foreground">{attendee.company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Representation */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center">
            <h3 className="font-display text-2xl font-semibold text-primary mb-8">
              Companies Represented
            </h3>
            <div className="space-y-4">
              {companyLogos.map((company, index) => (
                <div key={index} className="card-luxury">
                  <div className="flex items-center justify-center h-16">
                    <span className="font-semibold text-primary text-lg">
                      {company}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-display text-2xl font-semibold text-primary mb-8">
              Investment Partners
            </h3>
            <div className="space-y-4">
              {vcFirms.map((firm, index) => (
                <div key={index} className="card-luxury">
                  <div className="flex items-center justify-center h-16">
                    <span className="font-semibold text-primary text-lg">
                      {firm}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mt-16 text-center">
          <div className="card-luxury max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-accent-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h4 className="font-display text-xl font-semibold text-primary">
                Privacy First
              </h4>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              All attendee identities are kept confidential. What happens at Inside Edge, 
              stays at Inside Edge. Photos are used with permission and faces are blurred 
              to maintain the intimate, trust-based atmosphere we've cultivated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};