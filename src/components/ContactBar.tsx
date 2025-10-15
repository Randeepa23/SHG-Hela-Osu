import { Phone, MapPin, Award, Users, Building } from 'lucide-react';

const ContactBar = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-ayur-deep-green text-primary-foreground py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Hotline: +94 112 545 497</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Head Office: Boralesgamuwa</span>
            </div>
          </div>
          
          {/* Company Stats */}
          <div className="flex items-center gap-1 text-xs">
            <div className="flex items-center gap-1">
              <Award className="w-3 h-3" />
              <span>80+ Years of Trust</span>
            </div>
            <span className="mx-1">|</span>
            <div className="flex items-center gap-1">
              <Building className="w-3 h-3" />
              <span>8+ Outlets</span>
            </div>
            <span className="mx-1">|</span>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>100+ Employees</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;