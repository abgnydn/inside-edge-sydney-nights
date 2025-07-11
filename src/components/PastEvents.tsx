import newYorkImg from "@/assets/newyork-event.jpg";
import londonImg from "@/assets/london-event.jpg";
import hongKongImg from "@/assets/hongkong-event.jpg";

export const PastEvents = () => {
  const events = [
    {
      image: newYorkImg,
      city: "New York",
      date: "January 18, 2025",
      description: "Manhattan Tech Leaders Summit"
    },
    {
      image: londonImg,
      city: "London",
      date: "April 10, 2025",
      description: "European Engineering Roundtable"
    },
    {
      image: hongKongImg,
      city: "Hong Kong",
      date: "August 22, 2025",
      description: "Asia-Pacific Innovation Forum"
    }
  ];

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
            <div key={index} className="group cursor-pointer">
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