import React from 'react';
import { Badge } from '@/components/ui/badge';
import LazyImage from '@/components/ui/LazyImage';
import { Building2 } from 'lucide-react';

// Partner Logos - Using reliable JPG images for Vercel deployment
import amaLogo from '@/assets/logos/Ama.jpg';
import ayurvedaSansthaLogo from '@/assets/logos/Ayurveda Sanstha.jpg';
import beamLogo from '@/assets/logos/Beam Logo.jpg';
import denagamaLogo from '@/assets/logos/Denagama Minipura Logo.jpg';
import gravityLogo from '@/assets/logos/Gravity Logo.jpg';
import greenHerbalLogo from '@/assets/logos/Green Herbal.jpg';
import herbCareLogo from '@/assets/logos/Herb Care Logo.jpg';
import jeeviTeaLogo from '@/assets/logos/Jeevi Tea Logo.jpg';
import kadarapolaLogo from '@/assets/logos/KADAHAPOLA.jpg';
import kirinaliyaLogo from '@/assets/logos/kirinaliya.jpg';
import krimirajaLogo from '@/assets/logos/Krimiraja Logo.jpg';
import linkNaturalLogo from '@/assets/logos/Link Natural.jpg';
import naturelleLogo from '@/assets/logos/Naturelle Logo.jpg';
import neelakadiLogo from '@/assets/logos/Neelakadi Logo.jpg';
import nuwaraOsuLogo from '@/assets/logos/Nuwara Osu.jpg';
import orbitLogo from '@/assets/logos/Orbit Logo.jpg';
import osunimaLogo from '@/assets/logos/Osunima.jpg';
import pasyaleLogo from '@/assets/logos/Pasyale.jpg';
import sewanagalaLogo from '@/assets/logos/Sewanagala Logo.jpg';
import ituraLogo from '@/assets/logos/Itura 6.jpg';
import sethsuwaLogo from '@/assets/logos/Sethsuwa 5.jpg';
import siddhallepaLogo from '@/assets/logos/siddhalepa 7.jpg';
import siddhiLogo from '@/assets/logos/Siddhi 3.jpg';
import siddhoushadhaLogo from '@/assets/logos/Siddhoushadha 4.jpg';
import vendolLogo from '@/assets/logos/Vendol 1.jpg';
import sobacoLogo from '@/assets/logos/Sobaco Logo 2.jpg';

const TrustedPartners = () => {
  const partners = [
    { name: 'Ama', logo: amaLogo },
    { name: 'Ayurveda Sanstha', logo: ayurvedaSansthaLogo },
    { name: 'Beam', logo: beamLogo },
    { name: 'Denagama Minipura', logo: denagamaLogo },
    { name: 'Gravity', logo: gravityLogo },
    { name: 'Green Herbal', logo: greenHerbalLogo },
    { name: 'Herb Care', logo: herbCareLogo },
    { name: 'Jeevi Tea', logo: jeeviTeaLogo },
    { name: 'Kadahapola', logo: kadarapolaLogo },
    { name: 'Kirinaliya', logo: kirinaliyaLogo },
    { name: 'Krimiraja', logo: krimirajaLogo },
    { name: 'Link Natural', logo: linkNaturalLogo },
    { name: 'Naturelle', logo: naturelleLogo },
    { name: 'Neelakadi', logo: neelakadiLogo },
    { name: 'Nuwara Osu', logo: nuwaraOsuLogo },
    { name: 'Orbit', logo: orbitLogo },
    { name: 'Osunima', logo: osunimaLogo },
    { name: 'Pasyale', logo: pasyaleLogo },
    { name: 'Sewanagala', logo: sewanagalaLogo },
    { name: 'Itura', logo: ituraLogo },
    { name: 'Sethsuwa', logo: sethsuwaLogo },
    { name: 'Siddhalepa', logo: siddhallepaLogo },
    { name: 'Siddhi', logo: siddhiLogo },
    { name: 'Siddhoushadha', logo: siddhoushadhaLogo },
    { name: 'Vendol', logo: vendolLogo },
    { name: 'Sobaco', logo: sobacoLogo },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-gray-50/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-6 py-2">
            <Building2 className="w-4 h-4 mr-2" />
            Our Partners
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Trusted By Leading Companies
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We are proud to collaborate with these valued partners in delivering 
            authentic Ayurvedic products across Sri Lanka
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8 animate-fade-in">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
                <LazyImage
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-12 sm:h-16 w-auto object-contain transition-all duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm sm:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Working together with industry leaders to ensure the highest quality standards 
            and widespread availability of authentic Ayurvedic healthcare solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;