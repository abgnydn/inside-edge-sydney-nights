import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import newYorkImg from "@/assets/newyork-event.jpg";
import londonImg from "@/assets/london-event.jpg";
import hongKongImg from "@/assets/hongkong-event.jpg";

const events = [
  {
    image: newYorkImg,
    city: "New York",
    date: "January 18, 2025",
    description: "Manhattan Tech Leaders Summit",
    testimonial: "One of the most valuable evenings for genuine tech discourse. The caliber of conversation was exceptional.",
    attendee: "M.C., CTO, Series C Fintech"
  },
  {
    image: londonImg,
    city: "London",
    date: "April 10, 2025",
    description: "European Engineering Roundtable",
    testimonial: "Finally, a tech event where we could discuss real challenges without the usual corporate theater.",
    attendee: "J.R., Head of Engineering, Scale-up"
  },
  {
    image: hongKongImg,
    city: "Hong Kong",
    date: "August 22, 2025",
    description: "Asia-Pacific Innovation Forum",
    testimonial: "The connections made that evening led to three strategic partnerships. Unmatched quality of attendees.",
    attendee: "S.L., VP Engineering, Unicorn Startup"
  }
];

export const PastEvents = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary mb-6">
            Global Excellence
          </h2>
          <div className="w-16 h-1 bg-accent-gold mx-auto mb-8 rounded" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join a prestigious network spanning major tech hubs worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={event.image}
                      alt={`Inside Edge ${event.city}`}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="font-display text-2xl font-semibold mb-1">
                        {event.city}
                      </h3>
                      <p className="text-white/90">{event.description}</p>
                    </div>
                    
                    {/* Click indicator */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-accent-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-display text-2xl font-semibold text-primary mb-2">
                      Inside Edge {event.city}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {event.date}
                    </p>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl w-full mx-auto p-0 bg-background border-border">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={`Inside Edge ${event.city}`}
                    className="w-full h-96 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent rounded-t-lg" />
                  
                  <div className="absolute bottom-6 left-6 text-white">
                    <h2 className="font-display text-4xl font-semibold mb-2">
                      Inside Edge {event.city}
                    </h2>
                    <p className="text-xl text-white/90">{event.description}</p>
                    <p className="text-lg text-white/80 mt-1">{event.date}</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="max-w-2xl mx-auto text-center">
                    <div className="w-16 h-1 bg-accent-gold mx-auto mb-8 rounded" />
                    
                    <blockquote className="text-xl text-foreground italic leading-relaxed mb-6">
                      "{event.testimonial}"
                    </blockquote>
                    
                    <p className="text-muted-foreground font-medium">
                      — {event.attendee}
                    </p>
                    
                    <div className="mt-8 pt-8 border-t border-border">
                      <p className="text-muted-foreground text-sm">
                        Part of our global series connecting visionary tech leaders 
                        across major innovation hubs worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center px-8 py-4 bg-accent rounded-full">
            <div className="w-3 h-3 bg-accent-gold rounded-full mr-3 animate-pulse" />
            <span className="text-primary font-medium">
              Part of a global network of premium tech gatherings
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};