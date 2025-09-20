import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { type Leadership } from "@shared/schema";

export default function LeadershipPreview() {
  const { data: leadership, isLoading } = useQuery<Leadership[]>({
    queryKey: ['/api/leadership'],
  });

  const clubLeadership = leadership?.filter(leader => leader.category === 'club_leadership').slice(0, 4) || [];

  const getRoleColor = (role: string) => {
    if (role.toLowerCase().includes('president')) return 'text-primary';
    if (role.toLowerCase().includes('technical')) return 'text-secondary';
    if (role.toLowerCase().includes('faculty')) return 'text-accent';
    return 'text-success';
  };

  if (isLoading) {
    return (
      <section className="py-24 bg-card" data-testid="leadership-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="text-center mb-16">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-6"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6"></div>
                  <div className="h-4 bg-gray-300 rounded w-24 mx-auto mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-20 mx-auto mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-32 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-card" data-testid="leadership-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-6" data-testid="leadership-title">Meet Our Leaders</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="leadership-subtitle">
            Our dedicated team of experienced leaders and mentors guiding the MAD Club community
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clubLeadership.length === 0 ? (
            <div className="col-span-full text-center py-12" data-testid="no-leadership">
              <p className="text-muted-foreground text-lg">No leadership information available at the moment.</p>
            </div>
          ) : (
            clubLeadership.map((leader) => (
              <div key={leader.id} className="text-center group" data-testid={`leader-card-${leader.id}`}>
                <div className="relative mb-6">
                  <img 
                    src={leader.imageUrl} 
                    alt={`${leader.name} - ${leader.role}`}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                    data-testid={`leader-image-${leader.id}`}
                  />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2" data-testid={`leader-name-${leader.id}`}>{leader.name}</h3>
                <p className={`font-medium mb-2 ${getRoleColor(leader.role)}`} data-testid={`leader-role-${leader.id}`}>{leader.role}</p>
                <p className="text-sm text-muted-foreground" data-testid={`leader-description-${leader.id}`}>{leader.description}</p>
              </div>
            ))
          )}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/leadership">
            <Button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200" data-testid="button-meet-full-team">
              Meet the Full Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
