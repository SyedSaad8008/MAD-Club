import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="hero-gradient text-white py-24 lg:py-32" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6" data-testid="hero-title">
              Build the Future with 
              <span className="text-accent"> Mobile Apps</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed" data-testid="hero-description">
              Join our community of passionate developers, designers, and innovators creating the next generation of mobile applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-200 transform hover:scale-105" data-testid="button-join-club">
                Join MAD Club
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200"
                data-testid="button-view-projects"
              >
                View Projects
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Mobile app development workspace with multiple devices" 
                className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
