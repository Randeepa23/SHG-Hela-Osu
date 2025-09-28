import { Facebook, Instagram, Phone, Mail, MapPin, Clock, Award, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  // Function to navigate and scroll to top
  const navigateToPage = (path: string) => {
    navigate(path);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-gradient-to-b from-ayur-deep-green to-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-ayur-gold">S.H.G. Hela Osu</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                Sri Lanka's trusted leader in authentic Ayurvedic products since 1944. 
                Committed to delivering traditional healing with modern quality standards.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="text-base sm:text-lg font-semibold text-ayur-gold">Follow Us</h4>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.facebook.com/share/1CYziCQ8bL/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 hover:scale-110"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/shg_helaosu?igsh=NGdydTBucGthNW9p" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full transition-colors duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-semibold text-ayur-gold">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-ayur-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Phone Numbers</p>
                  <p className="text-sm text-gray-200">0112 545 497</p>
                  <p className="text-sm text-gray-200">077 442 2479</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-ayur-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-gray-200">shghelaosuhala@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-ayur-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Addresses</p>
                  <p className="text-sm text-gray-200">108C, Colombo Road, Borlesgamuwa</p>
                  <p className="text-sm text-gray-200">No 10, School Lane, Borlesgamuwa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-semibold text-ayur-gold">Business Hours</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-ayur-gold" />
                <div>
                  <p className="font-semibold">Everyday</p>
                  <p className="text-sm text-gray-200">8:00 AM - 10:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-ayur-gold" />
                <div>
                  <p className="font-semibold">Online Service</p>
                  <p className="text-sm text-gray-200">Available 24/7</p>
                </div>
              </div>
            </div>

            {/* Company Highlights */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-ayur-gold">Our Achievements</h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-ayur-gold" />
                  <span className="text-sm text-gray-200">80+ Years of Trust</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-ayur-gold" />
                  <span className="text-sm text-gray-200">8+ Outlets</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-ayur-gold" />
                  <span className="text-sm text-gray-200">100+ Employees</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-semibold text-ayur-gold">Quick Links</h4>
            <div className="space-y-2 sm:space-y-3">
              <button 
                onClick={() => navigateToPage('/')} 
                className="block w-full text-left text-gray-200 hover:text-white hover:bg-transparent transition-colors duration-300 py-1"
              >
                Home
              </button>
              <button 
                onClick={() => navigateToPage('/about')} 
                className="block w-full text-left text-gray-200 hover:text-white hover:bg-transparent transition-colors duration-300 py-1"
              >
                About Us
              </button>
              <button 
                onClick={() => navigateToPage('/products')} 
                className="block w-full text-left text-gray-200 hover:text-white hover:bg-transparent transition-colors duration-300 py-1"
              >
                Our Products
              </button>
              <button 
                onClick={() => navigateToPage('/branches')} 
                className="block w-full text-left text-gray-200 hover:text-white hover:bg-transparent transition-colors duration-300 py-1"
              >
                Branch Locations
              </button>
              <button 
                onClick={() => navigateToPage('/contact')} 
                className="block w-full text-left text-gray-200 hover:text-white hover:bg-transparent transition-colors duration-300 py-1"
              >
                Contact Us
              </button>
              <button 
                onClick={() => navigateToPage('/blog')} 
                className="block w-full text-left text-gray-200 hover:text-white hover:bg-transparent transition-colors duration-300 py-1"
              >
                Blog
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/20 border-t border-ayur-gold/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-200">
                © 2025 S.H.G. Hela Osu (Pvt) Ltd. All rights reserved.
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Business Registration: PV00210568
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-200">
              <button 
                onClick={() => navigateToPage('/privacy-policy')} 
                className="hover:text-ayur-gold transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => navigateToPage('/terms-of-service')} 
                className="hover:text-ayur-gold transition-colors duration-300"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => navigateToPage('/cookie-policy')} 
                className="hover:text-ayur-gold transition-colors duration-300"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

