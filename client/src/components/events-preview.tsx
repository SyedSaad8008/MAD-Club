import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { type Event } from "@shared/schema";

export default function EventsPreview() {
  const { data: events, isLoading } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });

  const recentEvents = events?.slice(0, 3) || [];

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

  if (isLoading) {
    return (
      <section className="py-24 bg-muted" data-testid="events-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-48 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-96 mb-12"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card rounded-xl p-6">
                  <div className="h-48 bg-gray-300 rounded mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
                  <div className="h-6 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded mb-4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-muted" data-testid="events-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4" data-testid="events-title">Recent Events</h2>
            <p className="text-xl text-muted-foreground" data-testid="events-subtitle">Stay updated with our latest activities and workshops</p>
          </div>
          <Link href="/events">
            <Button className="hidden sm:block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200" data-testid="button-view-all-events">
              View All Events
            </Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentEvents.length === 0 ? (
            <div className="col-span-full text-center py-12" data-testid="no-events">
              <p className="text-muted-foreground text-lg">No events available at the moment.</p>
            </div>
          ) : (
            recentEvents.map((event) => (
              <div key={event.id} className="bg-card rounded-xl card-shadow overflow-hidden hover:shadow-lg transition-shadow duration-300" data-testid={`event-card-${event.id}`}>
                <img 
                  src={event.imageUrl} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                  data-testid={`event-image-${event.id}`}
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)}`} data-testid={`event-status-${event.id}`}>
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1).replace('_', ' ')}
                    </Badge>
                    <span className="text-sm text-muted-foreground" data-testid={`event-date-${event.id}`}>
                      {formatDate(event.date)}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2" data-testid={`event-title-${event.id}`}>{event.title}</h3>
                  <p className="text-muted-foreground mb-4" data-testid={`event-description-${event.id}`}>{event.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span data-testid={`event-duration-${event.id}`}>{event.duration}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/events">
            <Button className="sm:hidden bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200" data-testid="mobile-button-view-all-events">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
