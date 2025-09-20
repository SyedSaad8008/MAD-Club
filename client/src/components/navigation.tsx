import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Link href="/" onClick={closeMobileMenu}>
                <h1 className="text-2xl font-heading font-bold text-primary" data-testid="logo">MAD Club</h1>
              </Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className={`nav-link hover:text-primary transition-colors duration-200 ${isActive('/') ? 'active' : ''}`}
                data-testid="nav-home"
              >
                Home
              </Link>
              <Link 
                href="/events" 
                className={`nav-link hover:text-primary transition-colors duration-200 ${isActive('/events') ? 'active' : ''}`}
                data-testid="nav-events"
              >
                Events
              </Link>
              <Link 
                href="/leadership" 
                className={`nav-link hover:text-primary transition-colors duration-200 ${isActive('/leadership') ? 'active' : ''}`}
                data-testid="nav-leadership"
              >
                Leadership
              </Link>
              <Link 
                href="/about" 
                className={`nav-link hover:text-primary transition-colors duration-200 ${isActive('/about') ? 'active' : ''}`}
                data-testid="nav-about"
              >
                About
              </Link>
              <Button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors duration-200" data-testid="button-join">
                Join Us
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-foreground hover:text-primary" 
              onClick={toggleMobileMenu}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border" data-testid="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              onClick={closeMobileMenu}
              className={`nav-link block px-3 py-2 hover:bg-muted rounded-md ${isActive('/') ? 'active' : ''}`}
              data-testid="mobile-nav-home"
            >
              Home
            </Link>
            <Link 
              href="/events" 
              onClick={closeMobileMenu}
              className={`nav-link block px-3 py-2 hover:bg-muted rounded-md ${isActive('/events') ? 'active' : ''}`}
              data-testid="mobile-nav-events"
            >
              Events
            </Link>
            <Link 
              href="/leadership" 
              onClick={closeMobileMenu}
              className={`nav-link block px-3 py-2 hover:bg-muted rounded-md ${isActive('/leadership') ? 'active' : ''}`}
              data-testid="mobile-nav-leadership"
            >
              Leadership
            </Link>
            <Link 
              href="/about" 
              onClick={closeMobileMenu}
              className={`nav-link block px-3 py-2 hover:bg-muted rounded-md ${isActive('/about') ? 'active' : ''}`}
              data-testid="mobile-nav-about"
            >
              About
            </Link>
            <Button 
              className="w-full text-left bg-primary text-primary-foreground px-3 py-2 rounded-md hover:bg-primary/90 transition-colors duration-200 mt-4"
              onClick={closeMobileMenu}
              data-testid="mobile-button-join"
            >
              Join Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
