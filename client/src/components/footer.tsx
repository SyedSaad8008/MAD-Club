import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Club Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4" data-testid="footer-title">MAD Club</h3>
            <p className="text-white/80 mb-6 leading-relaxed" data-testid="footer-description">
              Mobile App Development Club - Building the future one app at a time. 
              Join our community of passionate developers and innovators.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition-colors duration-200" data-testid="social-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors duration-200" data-testid="social-twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors duration-200" data-testid="social-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors duration-200" data-testid="social-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors duration-200" data-testid="social-github">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-links-title">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors duration-200" data-testid="footer-link-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/80 hover:text-white transition-colors duration-200" data-testid="footer-link-events">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="text-white/80 hover:text-white transition-colors duration-200" data-testid="footer-link-leadership">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors duration-200" data-testid="footer-link-about">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-contact-title">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center" data-testid="contact-email">
                <Mail className="w-4 h-4 mr-3" />
                <span>madclub@university.edu</span>
              </li>
              <li className="flex items-center" data-testid="contact-location">
                <MapPin className="w-4 h-4 mr-3" />
                <span>Computer Science Building</span>
              </li>
              <li className="flex items-center" data-testid="contact-hours">
                <Clock className="w-4 h-4 mr-3" />
                <span>Meetings: Fridays 4-6 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p data-testid="footer-copyright">&copy; 2024 MAD Club. All rights reserved. Built with ❤️ by our community.</p>
        </div>
      </div>
    </footer>
  );
}
