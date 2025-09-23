import { Facebook, Instagram, Phone, Mail, MapPin, Clock, Award, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-ayur-deep-green to-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-ayur-gold">S.H.G. Hela Osu</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                Sri Lanka's trusted leader in authentic Ayurvedic products since 2004. 
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
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-ayur-gold">Contact Information</h4>
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
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-ayur-gold">Business Hours</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-ayur-gold" />
                <div>
                  <p className="font-semibold">Monday - Saturday</p>
                  <p className="text-sm text-gray-200">8:00 AM - 8:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-ayur-gold" />
                <div>
                  <p className="font-semibold">Sunday</p>
                  <p className="text-sm text-gray-200">9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Company Highlights */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-ayur-gold">Our Achievements</h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-ayur-gold" />
                  <span className="text-sm text-gray-200">19+ Years of Trust</span>
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
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-ayur-gold">Quick Links</h4>
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start text-left p-0 h-auto text-gray-200 hover:text-white hover:bg-transparent">
                <a href="/about" className="block w-full">About Us</a>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left p-0 h-auto text-gray-200 hover:text-white hover:bg-transparent">
                <a href="/products" className="block w-full">Our Products</a>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left p-0 h-auto text-gray-200 hover:text-white hover:bg-transparent">
                <a href="/branches" className="block w-full">Branch Locations</a>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left p-0 h-auto text-gray-200 hover:text-white hover:bg-transparent">
                <a href="/contact" className="block w-full">Contact Us</a>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left p-0 h-auto text-gray-200 hover:text-white hover:bg-transparent">
                <a href="/blog" className="block w-full">Blog</a>
              </Button>
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
            
            <div className="flex items-center gap-6 text-sm text-gray-200">
              <a href="/privacy-policy" className="hover:text-ayur-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="hover:text-ayur-gold transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="hover:text-ayur-gold transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

