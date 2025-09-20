import { Smartphone, Users, Rocket } from "lucide-react";

export default function ClubOverview() {
  return (
    <section className="py-24 bg-card" data-testid="club-overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-6" data-testid="overview-title">About MAD Club</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="overview-description">
            The Mobile App Development Club is a vibrant community of students passionate about creating innovative mobile solutions and learning cutting-edge technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl card-shadow bg-card hover:shadow-lg transition-shadow duration-300" data-testid="feature-mobile-dev">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-heading font-semibold mb-4">Mobile Development</h3>
            <p className="text-muted-foreground leading-relaxed">
              Learn iOS, Android, and cross-platform development with React Native, Flutter, and native technologies.
            </p>
          </div>
          
          <div className="text-center p-8 rounded-xl card-shadow bg-card hover:shadow-lg transition-shadow duration-300" data-testid="feature-community">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-2xl font-heading font-semibold mb-4">Community</h3>
            <p className="text-muted-foreground leading-relaxed">
              Connect with like-minded peers, collaborate on projects, and build lasting professional relationships.
            </p>
          </div>
          
          <div className="text-center p-8 rounded-xl card-shadow bg-card hover:shadow-lg transition-shadow duration-300" data-testid="feature-innovation">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-heading font-semibold mb-4">Innovation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Participate in hackathons, build real-world projects, and turn your ideas into successful applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
