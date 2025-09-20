import { useQuery } from "@tanstack/react-query";
import { Linkedin, Github, Twitter } from "lucide-react";
import { type Leadership } from "@shared/schema";

export default function Leadership() {
  const { data: leadership, isLoading } = useQuery<Leadership[]>({
    queryKey: ['/api/leadership'],
  });

  const clubLeadership = leadership?.filter(leader => leader.category === 'club_leadership') || [];
  const facultyAdvisor = leadership?.filter(leader => leader.category === 'faculty')[0];
  const groupLeads = leadership?.filter(leader => leader.category === 'group_leads') || [];

  const getRoleColor = (role: string) => {
    if (role.toLowerCase().includes('president')) return 'text-primary';
    if (role.toLowerCase().includes('technical')) return 'text-secondary';
    if (role.toLowerCase().includes('events')) return 'text-accent';
    if (role.toLowerCase().includes('media')) return 'text-primary';
    if (role.toLowerCase().includes('graphic')) return 'text-secondary';
    if (role.toLowerCase().includes('documentation')) return 'text-accent';
    if (role.toLowerCase().includes('operations')) return 'text-success';
    if (role.toLowerCase().includes('photography')) return 'text-primary';
    if (role.toLowerCase().includes('marketing')) return 'text-secondary';
    return 'text-success';
  };

  const getBorderColor = (role: string) => {
    if (role.toLowerCase().includes('president')) return 'border-primary/20 group-hover:border-primary/40';
    if (role.toLowerCase().includes('technical')) return 'border-secondary/20 group-hover:border-secondary/40';
    if (role.toLowerCase().includes('events')) return 'border-accent/20 group-hover:border-accent/40';
    if (role.toLowerCase().includes('media')) return 'border-primary/20 group-hover:border-primary/40';
    if (role.toLowerCase().includes('graphic')) return 'border-secondary/20 group-hover:border-secondary/40';
    if (role.toLowerCase().includes('documentation')) return 'border-accent/20 group-hover:border-accent/40';
    if (role.toLowerCase().includes('operations')) return 'border-success/20 group-hover:border-success/40';
    if (role.toLowerCase().includes('photography')) return 'border-primary/20 group-hover:border-primary/40';
    if (role.toLowerCase().includes('marketing')) return 'border-secondary/20 group-hover:border-secondary/40';
    return 'border-success/20 group-hover:border-success/40';
  };

  return (
    <div data-testid="leadership-page">
      {/* Leadership Hero */}
      <section className="bg-gradient-to-r from-secondary to-accent text-white py-20" data-testid="leadership-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6" data-testid="leadership-hero-title">Our Leadership Team</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto" data-testid="leadership-hero-description">
              Meet the dedicated individuals who guide and support the MAD Club community
            </p>
          </div>
        </div>
      </section>

      {/* Loading State */}
      {isLoading && (
        <section className="py-16 bg-card" data-testid="leadership-loading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="text-center mb-12">
                <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="text-center">
                    <div className="w-40 h-40 bg-gray-300 rounded-2xl mx-auto mb-6"></div>
                    <div className="h-6 bg-gray-300 rounded w-32 mx-auto mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-24 mx-auto mb-3"></div>
                    <div className="h-4 bg-gray-300 rounded w-48 mx-auto"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Club Leadership */}
      {!isLoading && (
        <section className="py-16 bg-card" data-testid="club-leadership-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4" data-testid="club-leadership-title">Club Leadership</h2>
              <p className="text-lg text-muted-foreground" data-testid="club-leadership-subtitle">The core leadership team driving MAD Club's vision and initiatives</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {clubLeadership.length === 0 ? (
                <div className="col-span-full text-center py-12" data-testid="no-club-leadership">
                  <p className="text-muted-foreground text-lg">No club leadership information available at the moment.</p>
                </div>
              ) : (
                clubLeadership.map((leader) => (
                  <div key={leader.id} className="text-center group" data-testid={`club-leader-${leader.id}`}>
                    <div className="relative mb-6">
                      <img 
                        src={leader.imageUrl} 
                        alt={`${leader.name} - ${leader.role}`}
                        className={`w-40 h-40 rounded-2xl mx-auto object-cover border-4 transition-all duration-300 group-hover:scale-105 ${getBorderColor(leader.role)}`}
                        data-testid={`club-leader-image-${leader.id}`}
                      />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold mb-2" data-testid={`club-leader-name-${leader.id}`}>{leader.name}</h3>
                    <p className={`font-semibold mb-3 ${getRoleColor(leader.role)}`} data-testid={`club-leader-role-${leader.id}`}>{leader.role}</p>
                    <p className="text-muted-foreground mb-4" data-testid={`club-leader-description-${leader.id}`}>{leader.description}</p>
                    <div className="flex justify-center space-x-4">
                      {leader.linkedinUrl && (
                        <a href={leader.linkedinUrl} className={`hover:opacity-80 transition-colors duration-200 ${getRoleColor(leader.role)}`} data-testid={`club-leader-linkedin-${leader.id}`}>
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {leader.githubUrl && (
                        <a href={leader.githubUrl} className={`hover:opacity-80 transition-colors duration-200 ${getRoleColor(leader.role)}`} data-testid={`club-leader-github-${leader.id}`}>
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {leader.twitterUrl && (
                        <a href={leader.twitterUrl} className={`hover:opacity-80 transition-colors duration-200 ${getRoleColor(leader.role)}`} data-testid={`club-leader-twitter-${leader.id}`}>
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      )}

      {/* Faculty Advisor */}
      {!isLoading && facultyAdvisor && (
        <section className="py-16 bg-muted" data-testid="faculty-advisor-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4" data-testid="faculty-advisor-title">Faculty Advisor</h2>
              <p className="text-lg text-muted-foreground" data-testid="faculty-advisor-subtitle">Academic guidance and professional mentorship</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl card-shadow p-8 lg:p-12" data-testid={`faculty-advisor-${facultyAdvisor.id}`}>
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <img 
                      src={facultyAdvisor.imageUrl} 
                      alt={`${facultyAdvisor.name} - ${facultyAdvisor.role}`}
                      className="w-48 h-48 rounded-2xl mx-auto lg:mx-0 object-cover border-4 border-primary/20"
                      data-testid={`faculty-advisor-image-${facultyAdvisor.id}`}
                    />
                  </div>
                  <div className="lg:col-span-2 text-center lg:text-left">
                    <h3 className="text-3xl font-heading font-bold mb-2" data-testid={`faculty-advisor-name-${facultyAdvisor.id}`}>{facultyAdvisor.name}</h3>
                    <p className="text-primary font-semibold text-xl mb-4" data-testid={`faculty-advisor-role-${facultyAdvisor.id}`}>{facultyAdvisor.role}</p>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6" data-testid={`faculty-advisor-description-${facultyAdvisor.id}`}>
                      {facultyAdvisor.description}
                    </p>
                    <div className="flex justify-center lg:justify-start space-x-6">
                      {facultyAdvisor.experience && (
                        <div className="text-center">
                          <p className="text-2xl font-bold text-primary" data-testid={`faculty-advisor-experience-${facultyAdvisor.id}`}>{facultyAdvisor.experience}</p>
                          <p className="text-sm text-muted-foreground">Years Experience</p>
                        </div>
                      )}
                      {facultyAdvisor.publications && (
                        <div className="text-center">
                          <p className="text-2xl font-bold text-secondary" data-testid={`faculty-advisor-publications-${facultyAdvisor.id}`}>{facultyAdvisor.publications}</p>
                          <p className="text-sm text-muted-foreground">Publications</p>
                        </div>
                      )}
                      {facultyAdvisor.studentsMentored && (
                        <div className="text-center">
                          <p className="text-2xl font-bold text-accent" data-testid={`faculty-advisor-students-${facultyAdvisor.id}`}>{facultyAdvisor.studentsMentored}</p>
                          <p className="text-sm text-muted-foreground">Students Mentored</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Group Leads */}
      {!isLoading && (
        <section className="py-16 bg-card" data-testid="group-leads-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4" data-testid="group-leads-title">Group Leads</h2>
              <p className="text-lg text-muted-foreground" data-testid="group-leads-subtitle">Specialized team leads managing different aspects of club operations</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupLeads.length === 0 ? (
                <div className="col-span-full text-center py-12" data-testid="no-group-leads">
                  <p className="text-muted-foreground text-lg">No group leads information available at the moment.</p>
                </div>
              ) : (
                groupLeads.map((leader) => (
                  <div key={leader.id} className="bg-muted rounded-xl p-6 text-center group hover:bg-card hover:shadow-lg transition-all duration-300" data-testid={`group-lead-${leader.id}`}>
                    <div className={`w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-3 transition-colors duration-300 ${getBorderColor(leader.role)}`}>
                      <img 
                        src={leader.imageUrl} 
                        alt={`${leader.name} - ${leader.role}`}
                        className="w-full h-full object-cover"
                        data-testid={`group-lead-image-${leader.id}`}
                      />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2" data-testid={`group-lead-name-${leader.id}`}>{leader.name}</h3>
                    <p className={`font-medium mb-2 ${getRoleColor(leader.role)}`} data-testid={`group-lead-role-${leader.id}`}>{leader.role}</p>
                    <p className="text-sm text-muted-foreground" data-testid={`group-lead-description-${leader.id}`}>{leader.description}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
