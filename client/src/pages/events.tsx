import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, Star } from "lucide-react";
import { type Event } from "@shared/schema";

export default function Events() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const { data: events, isLoading } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });

  const filteredEvents = events?.filter(event => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'upcoming') return event.status === 'upcoming' || event.status === 'registration_open';
    if (activeFilter === 'completed') return event.status === 'completed';
    if (activeFilter === 'workshops') return event.category === 'workshop';
    if (activeFilter === 'hackathons') return event.category === 'hackathon';
    return true;
  }) || [];

  const upcomingEvents = filteredEvents.filter(event => 
    event.status === 'upcoming' || event.status === 'registration_open'
  );
  
  const pastEvents = filteredEvents.filter(event => 
    event.status === 'completed'
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-success/20 text-success';
      case 'upcoming':
        return 'bg-primary/20 text-primary';
      case 'registration_open':
        return 'bg-accent/20 text-accent';
      default:
        return 'bg-muted/20 text-muted-foreground';
    }
  };

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filterButtons = [
    { id: 'all', label: 'All Events' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'completed', label: 'Completed' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'hackathons', label: 'Hackathons' },
  ];

  return (
    <div data-testid="events-page">
      {/* Events Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20" data-testid="events-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6" data-testid="events-hero-title">Club Events</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto" data-testid="events-hero-description">
              Join our exciting workshops, hackathons, and networking events designed to enhance your mobile development skills
            </p>
          </div>
        </div>
      </section>

      {/* Events Filter */}
      <section className="py-8 bg-card border-b border-border" data-testid="events-filter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {filterButtons.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                  activeFilter === filter.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground'
                }`}
                data-testid={`filter-${filter.id}`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-16 bg-muted" data-testid="events-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {isLoading ? (
            <div className="animate-pulse" data-testid="events-loading">
              <div className="h-8 bg-gray-300 rounded w-48 mb-8"></div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-card rounded-xl p-6">
                    <div className="h-48 bg-gray-300 rounded mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-4"></div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Upcoming Events */}
              {(activeFilter === 'all' || activeFilter === 'upcoming') && upcomingEvents.length > 0 && (
                <div className="mb-16" data-testid="upcoming-events-section">
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-8" data-testid="upcoming-events-title">Upcoming Events</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="bg-card rounded-xl card-shadow overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" data-testid={`upcoming-event-${event.id}`}>
                        <img 
                          src={event.imageUrl} 
                          alt={event.title}
                          className="w-full h-48 object-cover"
                          data-testid={`upcoming-event-image-${event.id}`}
                        />
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <Badge className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)}`} data-testid={`upcoming-event-status-${event.id}`}>
                              {event.status.charAt(0).toUpperCase() + event.status.slice(1).replace('_', ' ')}
                            </Badge>
                            <span className="text-sm text-muted-foreground" data-testid={`upcoming-event-date-${event.id}`}>
                              {formatDate(event.date)}
                            </span>
                          </div>
                          <h3 className="text-xl font-heading font-semibold mb-2" data-testid={`upcoming-event-title-${event.id}`}>{event.title}</h3>
                          <p className="text-muted-foreground mb-4" data-testid={`upcoming-event-description-${event.id}`}>{event.description}</p>
                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-2" />
                              <span data-testid={`upcoming-event-duration-${event.id}`}>{event.duration}</span>
                            </span>
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              <span data-testid={`upcoming-event-location-${event.id}`}>{event.location}</span>
                            </span>
                          </div>
                          <Button 
                            className={`w-full py-2 rounded-lg transition-colors duration-200 ${
                              event.status === 'registration_open' 
                                ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                                : 'bg-primary text-primary-foreground hover:bg-primary/90'
                            }`}
                            data-testid={`upcoming-event-button-${event.id}`}
                          >
                            {event.status === 'registration_open' ? 'Register Now' : 'Learn More'}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Past Events */}
              {(activeFilter === 'all' || activeFilter === 'completed') && pastEvents.length > 0 && (
                <div data-testid="past-events-section">
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-8" data-testid="past-events-title">Past Events</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pastEvents.map((event) => (
                      <div key={event.id} className="bg-card rounded-xl card-shadow overflow-hidden hover:shadow-lg transition-shadow duration-300" data-testid={`past-event-${event.id}`}>
                        <img 
                          src={event.imageUrl} 
                          alt={event.title}
                          className="w-full h-48 object-cover"
                          data-testid={`past-event-image-${event.id}`}
                        />
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <Badge className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)}`} data-testid={`past-event-status-${event.id}`}>
                              Completed
                            </Badge>
                            <span className="text-sm text-muted-foreground" data-testid={`past-event-date-${event.id}`}>
                              {formatDate(event.date)}
                            </span>
                          </div>
                          <h3 className="text-xl font-heading font-semibold mb-2" data-testid={`past-event-title-${event.id}`}>{event.title}</h3>
                          <p className="text-muted-foreground mb-4" data-testid={`past-event-description-${event.id}`}>{event.description}</p>
                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                            {event.attendees && (
                              <span className="flex items-center">
                                <Users className="w-4 h-4 mr-2" />
                                <span data-testid={`past-event-attendees-${event.id}`}>{event.attendees} attendees</span>
                              </span>
                            )}
                            {event.rating && (
                              <span className="flex items-center">
                                <Star className="w-4 h-4 mr-2" />
                                <span data-testid={`past-event-rating-${event.id}`}>{event.rating} rating</span>
                              </span>
                            )}
                          </div>
                          <Button 
                            variant="outline"
                            className="w-full bg-muted text-muted-foreground py-2 rounded-lg cursor-not-allowed"
                            disabled
                            data-testid={`past-event-button-${event.id}`}
                          >
                            Event Completed
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* No Events Message */}
              {filteredEvents.length === 0 && !isLoading && (
                <div className="text-center py-16" data-testid="no-events-message">
                  <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">No Events Found</h3>
                  <p className="text-muted-foreground">There are no events matching your current filter. Try selecting a different filter or check back later.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
