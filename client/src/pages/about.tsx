import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { type ClubInfo } from "@shared/schema";

export default function About() {
  const { data: clubInfo, isLoading } = useQuery<ClubInfo>({
    queryKey: ['/api/club-info'],
  });

  return (
    <div data-testid="about-page">
      {/* About Hero */}
      <section className="bg-gradient-to-r from-accent to-primary text-white py-20" data-testid="about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6" data-testid="about-hero-title">About MAD Club</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto" data-testid="about-hero-description">
              Discover our mission, values, and the impact we're making in mobile app development education
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-card" data-testid="mission-vision-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6" data-testid="mission-title">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8" data-testid="mission-description">
                To empower students with practical mobile app development skills, foster innovation, and create a supportive community where aspiring developers can learn, collaborate, and build the future of mobile technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4" data-testid="mission-point-1">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground">Provide hands-on learning experiences in mobile development</p>
                </div>
                <div className="flex items-start space-x-4" data-testid="mission-point-2">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <p className="text-foreground">Foster collaboration and peer-to-peer learning</p>
                </div>
                <div className="flex items-start space-x-4" data-testid="mission-point-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <p className="text-foreground">Bridge the gap between academic learning and industry needs</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Students collaborating on mobile development project" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="mission-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Club Statistics */}
      <section className="py-16 bg-muted" data-testid="club-statistics-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4" data-testid="statistics-title">Our Impact</h2>
            <p className="text-lg text-muted-foreground" data-testid="statistics-subtitle">Numbers that showcase our growing community and achievements</p>
          </div>
          
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-testid="statistics-loading">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center p-8 bg-card rounded-xl card-shadow animate-pulse">
                  <div className="h-10 bg-gray-300 rounded w-16 mx-auto mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-24 mx-auto"></div>
                </div>
              ))}
            </div>
          ) : clubInfo ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-8 bg-card rounded-xl card-shadow" data-testid="stat-members">
                <div className="text-4xl font-bold text-primary mb-2">{clubInfo.totalMembers}+</div>
                <p className="text-muted-foreground">Active Members</p>
              </div>
              <div className="text-center p-8 bg-card rounded-xl card-shadow" data-testid="stat-events">
                <div className="text-4xl font-bold text-secondary mb-2">{clubInfo.eventsHosted}+</div>
                <p className="text-muted-foreground">Events Hosted</p>
              </div>
              <div className="text-center p-8 bg-card rounded-xl card-shadow" data-testid="stat-projects">
                <div className="text-4xl font-bold text-accent mb-2">{clubInfo.projectsBuilt}+</div>
                <p className="text-muted-foreground">Projects Built</p>
              </div>
              <div className="text-center p-8 bg-card rounded-xl card-shadow" data-testid="stat-years">
                <div className="text-4xl font-bold text-success mb-2">{clubInfo.yearsActive}</div>
                <p className="text-muted-foreground">Years Active</p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12" data-testid="no-statistics">
              <p className="text-muted-foreground text-lg">Statistics not available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-card" data-testid="join-us-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6" data-testid="join-us-title">Ready to Join MAD Club?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="join-us-description">
            Whether you're a beginner looking to learn mobile development or an experienced developer wanting to share knowledge, 
            MAD Club welcomes all skill levels and backgrounds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors duration-200" data-testid="button-become-member">
              Become a Member
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              data-testid="button-contact-us"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
