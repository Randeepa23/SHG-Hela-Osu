import { MapPin, Phone, Clock, Navigation, Truck, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Import branch images
import maharagamaImage from '@/assets/Branches/Maharagama Outlet.jpg';
import pannipitiyaImage from '@/assets/Branches/Pannipitiya Outlet FD.jpg';
import boralesgamuwaImage from '@/assets/Branches/SHG Boralesgamuwa Apr2024 NEW.jpg';
import thalawathugodaImage from '@/assets/Branches/Thalawathugoda Outlet.jpg';
import wijeramaImage from '@/assets/Branches/Wijerama NEW Retouched.jpg';
import kiribathgodaImage from '@/assets/Branches/Kiribathgoda.jpg';
import piliyandalaImage from '@/assets/Branches/Piliyandala 2025.jpg';
import homagamaImage from '@/assets/Branches/Homagama2025.jpg';

const Branches = () => {
  const currentOutlets = [
    {
      name: "Boralesgamuwa (Head Office)",
      address: "108C, Colombo Road, Boralesgamuwa",
      phone: "0764122480",
      hours: "8:00 AM - 10:00 PM",
      services: ["Full Product Range", "Consultation", "Home Delivery", "Head Office"],
      isHeadOffice: true,
      image: boralesgamuwaImage,
      mapUrl: "https://www.google.com/maps/place/S.H.G+Hela+Osu+(Pvt)+Ltd+-+Boralesgamuwa/@6.8394456,79.9026794,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae25b771d83bf25:0xe07ef717544a5304!8m2!3d6.8394456!4d79.9026794!16s%2Fg%2F11grpx9tc5?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Thalawathugoda Branch",
      address: "Thalawathugoda, Sri Jayawardenepura",
      phone: "0112 545 497",
      hours: "8:00 AM - 10:00 PM",
      services: ["Full Product Range", "Consultation", "Online Ordering"],
      image: thalawathugodaImage,
      mapUrl: "https://www.google.com/maps/place/S.H.G+Hela+Osu+(Pvt)+Ltd+-+Thalawathugoda/@6.8765048,79.9354965,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae250968816eaf1:0xbaad45cb5867afc7!8m2!3d6.8765048!4d79.9354965!16s%2Fg%2F11csc7b2mm?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Pannipitiya Branch",
      address: "Pannipitiya, Colombo",
      phone: "0112 545 497",
      hours: "8:00 AM - 10:00 PM",
      services: ["Full Product Range", "Consultation", "Expert Advice"],
      image: pannipitiyaImage,
      mapUrl: "https://www.google.com/maps/place/S.H.G.Hela+Osu+(Pvt)+ltd+-+Pannipitiya/@6.8466936,79.9322979,16z/data=!4m10!1m2!2m1!1sS.H.G+Hela+Osu+(Pvt)+Ltd+-+pannipitiya!3m6!1s0x3ae251c5420f2def:0x4acd00c2b7e40e36!8m2!3d6.8454865!4d79.9387788!15sCiZTLkguRyBIZWxhIE9zdSAoUHZ0KSBMdGQgLSBwYW5uaXBpdGl5YZIBFWhlcmJhbF9tZWRpY2luZV9zdG9yZaoBWAoNL2cvMTFxaGY4Y2MzeBABMh8QASIbCgdh51SepXsKCQK-4DCEmBOOvDVz4qiNCG88MiQQAiIgc2hnIGhlbGEgb3N1IHB2dCBsdGQgcGFubmlwaXRpeWHgAQA!16s%2Fg%2F11qhf8cc3x?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Homagama Branch",
      address: "Homagama, Colombo",
      phone: "0112 545 497",
      hours: "8:00 AM - 10:00 PM",
      services: ["Full Product Range", "Consultation", "Rural Service"],
      image: homagamaImage,
      mapUrl: "https://www.google.com/maps/place/S.H.G+Hela+Osu+(Pvt)+Ltd+-+Homagama/@6.8411638,80.0038579,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae25121afa00b9f:0x6f1def96fbcd828b!8m2!3d6.8411638!4d80.0038579!16s%2Fg%2F11j6k7dhmc?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Wijerama Branch",
      address: "Wijerama, Colombo 07",
      phone: "0112 545 497",
      hours: "8:00 AM - 10:00 PM",
      services: ["Full Product Range", "Premium Collection", "City Center"],
      image: wijeramaImage,
      mapUrl: "https://www.google.com/maps/place/S.H.G+Hela+Osu+(Pvt)+Ltd+-+Wijerama/@6.8570728,79.907981,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae25bbce0dadcd3:0x150c05b5fa53c198!8m2!3d6.8570728!4d79.907981!16s%2Fg%2F11hdj_j30p?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Maharagama Branch",
      address: "Maharagama, Colombo",
      phone: "0112 545 497",
      hours: "8:00 AM - 10:00 PM",
      services: ["Full Product Range", "Expert Consultation", "Medical Center"],
      image: maharagamaImage,
      mapUrl: "https://www.google.com/maps/place/S.H.G.+Hela+Osu+(Pvt)+Ltd/@6.8570728,79.907981,14z/data=!4m10!1m2!2m1!1sS.H.G+Hela+Osu+(Pvt)+Ltd+-+maharagama!3m6!1s0x3ae2507a3cdfa5ff:0x34ba142243938c33!8m2!3d6.8479008!4d79.9258171!15sCiVTLkguRyBIZWxhIE9zdSAoUHZ0KSBMdGQgLSBtYWhhcmFnYW1hkgEObWVkaWNhbF9jZW50ZXKqAUcQATIeEAEiGkMbdZLCSvc-K9z8dRrKFNTdRjZmVplANzuOMiMQAiIfc2hnIGhlbGEgb3N1IHB2dCBsdGQgbWFoYXJhZ2FtYeABAA!16s%2Fg%2F11c20skk_v?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Kiribathgoda Branch",
      address: "Kiribathgoda, Colombo",
      phone: "0112 545 497",
      hours: "8:00 AM - 10:00 PM",
      services: ["Full Product Range", "Consultation", "Northern Access"],
      image: kiribathgodaImage,
      mapUrl: "https://www.google.com/maps/place/S.H.G+Hela+Osu+(PVT)+Ltd+-+Kiribathgoda/@6.978898,79.9281007,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae25710b2d4989f:0x89616d619ec42b30!8m2!3d6.978898!4d79.9281007!16s%2Fg%2F11r2rm9wr3?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Piliyandala Branch",
      address: "Piliyandala, Colombo",
      phone: "0112 545 497",
      hours: "8:00 AM - 10:00 PM",
      services: ["Full Product Range", "Consultation", "Southern Service"],
      image: piliyandalaImage,
      mapUrl: "https://www.google.com/maps/place/SHG+Hela+Osu/@6.7992594,79.9259103,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae24f00369201eb:0x640d8f0852e728c5!8m2!3d6.7992594!4d79.9259103!16s%2Fg%2F11xz5l4zx2?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
    },
  ];

  const upcomingOutlets = [
    { name: "Kaduwela", status: "Opening Soon", expectedDate: "Q1 2025" },
    { name: "Malabe", status: "Under Construction", expectedDate: "Q2 2025" },
    { name: "Ja-Ela", status: "Planning Phase", expectedDate: "Q2 2025" },
    { name: "Rajagiriya", status: "Site Acquired", expectedDate: "Q3 2025" },
  ];

  const deliveryInfo = {
    serviceName: "Osu Seriya",
    coverage: "Greater Colombo Area",
    deliveryTime: "Same Day / Next Day",
    minimumOrder: "Rs. 1,500",
    deliveryFee: "Rs. 250 (Free above Rs. 5,000)",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="branches" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ayur-light-green/70 via-ayur-sage/50 to-ayur-deep-green/40"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-ayur-sage/30 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-ayur-light-green/40 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-ayur-gold/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            <Badge className="mb-8 bg-ayur-light-green/30 text-ayur-deep-green border-ayur-sage/50 px-6 py-2 text-sm font-medium backdrop-blur-sm">
              <MapPin className="w-4 h-4 mr-2 animate-pulse" />
              Our Locations
            </Badge>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 text-ayur-deep-green">
              8+ Outlets 
              <span className="block text-ayur-gold">Serving You</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-ayur-deep-green/90 leading-relaxed max-w-4xl mx-auto">
              Find us across Sri Lanka with convenient locations and expanding to 40+ outlets 
              in the greater Colombo region. Quality Ayurvedic products and expert consultation 
              available at every branch.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-ayur-light-green/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
              Find Us on the Map
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Locate our head office and all branch locations easily with our interactive map
            </p>
          </div>

          <div className="mb-16 animate-fade-in">
            <Card className="overflow-hidden shadow-2xl border-2 border-ayur-sage/20">
              <div className="relative">
                {/* Map Container */}
                <div className="w-full h-96 bg-gradient-to-br from-ayur-light-green/20 to-ayur-sage/10 flex items-center justify-center relative">
                  {/* Map Placeholder with Google Maps Integration */}
                  <div className="w-full h-full relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456789!2d79.8760997!3d6.9019249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMDYuOSJOIDc5wrA1MiczOS45IkU!5e0!3m2!1sen!2slk!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  
                  {/* Map Overlay with Action Button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 right-4 pointer-events-auto">
                    <Button
                      onClick={() => window.open('https://www.google.com/maps/search/shg+hela+osu/@6.9019249,79.8760997,12.18z?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                      className="bg-white text-ayur-deep-green hover:bg-ayur-light-green hover:text-ayur-deep-green shadow-xl font-semibold px-6 py-3"
                    >
                      <MapPin className="w-5 h-5 mr-2" />
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Outlets */}
      <section id="outlets" className="py-24 bg-gradient-to-b from-background to-ayur-light-green/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Current Outlet Locations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Visit any of our conveniently located outlets for personalized consultation 
              and access to our complete range of authentic Ayurvedic products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentOutlets.map((outlet, index) => (
              <Card 
                key={index} 
                className={`card-premium group hover-lift animate-fade-in overflow-hidden ${
                  outlet.isHeadOffice 
                    ? 'border-2 border-ayur-gold/40 bg-gradient-to-br from-ayur-gold/5 to-accent/5' 
                    : 'hover:shadow-xl'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Branch Image */}
                {outlet.image && (
                  <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-ayur-light-green/20 to-ayur-sage/20 border border-ayur-sage/30">
                    <img 
                      src={outlet.image} 
                      alt={`${outlet.name} - S.H.G. Hela Osu Branch`}
                      className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      loading="lazy"
                      style={{ 
                        objectFit: 'contain',
                        objectPosition: 'center',
                        maxHeight: '100%',
                        maxWidth: '100%',
                        minHeight: '200px'
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/10 transition-all duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-ayur-sage/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {outlet.isHeadOffice && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-ayur-gold to-ayur-warm-gold text-accent-foreground text-xs font-medium shadow-xl animate-glow backdrop-blur-sm">
                          <Star className="w-3 h-3 mr-1" />
                          Head Office
                        </Badge>
                      </div>
                    )}
                    {/* Branch Name Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-ayur-sage/20">
                        <h3 className="font-semibold text-ayur-deep-green text-sm truncate">
                          {outlet.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                )}
                
                {!outlet.image && (
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl text-foreground leading-tight group-hover:text-gradient transition-colors duration-300">
                        {outlet.name}
                      </CardTitle>
                      {outlet.isHeadOffice && (
                        <Badge className="bg-gradient-to-r from-ayur-gold to-ayur-warm-gold text-accent-foreground text-xs font-medium shadow-lg animate-glow">
                          <Star className="w-3 h-3 mr-1" />
                          Head Office
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                )}
                <CardContent className={`space-y-6 ${outlet.image ? 'pt-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 group/item">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-ayur-sage/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground leading-relaxed">{outlet.address}</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-8 h-8 bg-gradient-to-br from-ayur-gold/20 to-accent/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                        <Phone className="w-4 h-4 text-ayur-gold" />
                      </div>
                      <span className="text-sm text-foreground font-semibold">{outlet.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-8 h-8 bg-gradient-to-br from-ayur-sage/20 to-primary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                        <Clock className="w-4 h-4 text-ayur-sage" />
                      </div>
                      <span className="text-sm text-foreground font-medium">{outlet.hours}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">Services Available:</h4>
                    <div className="flex flex-wrap gap-2">
                      {outlet.services.map((service, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="text-xs py-1 px-2 bg-gradient-to-r from-ayur-light-green/10 to-ayur-sage/10 border-primary/20 text-primary hover:bg-primary/5 transition-colors duration-300"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-border/50">
                    <Button 
                      size="sm" 
                      className="flex-1 btn-primary hover-glow group/btn"
                      onClick={() => {
                        // Handle get directions - use specific Google Maps URL
                        if (outlet.mapUrl) {
                          window.open(outlet.mapUrl, '_blank');
                        } else {
                          // Fallback to generic search
                          const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(outlet.address)}`;
                          window.open(mapsUrl, '_blank');
                        }
                      }}
                    >
                      <Navigation className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                      Get Directions
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="btn-outline hover-lift"
                      onClick={() => {
                        // Handle call
                        window.location.href = `tel:${outlet.phone}`;
                      }}
                    >
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Service */}
      <section className="py-20 bg-gradient-to-r from-secondary/30 to-ayur-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-ayur-gold/20 text-ayur-gold border-ayur-gold/30">
                <Truck className="w-4 h-4 mr-2" />
                Delivery Service
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Osu Seriya - Home Delivery
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Can't visit our outlets? No problem! Our Osu Seriya delivery service brings 
                authentic Ayurvedic products directly to your doorstep across the greater Colombo area.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <span className="font-medium text-foreground">Service Coverage:</span>
                  <span className="text-primary">{deliveryInfo.coverage}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <span className="font-medium text-foreground">Delivery Time:</span>
                  <span className="text-primary">{deliveryInfo.deliveryTime}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <span className="font-medium text-foreground">Minimum Order:</span>
                  <span className="text-primary">{deliveryInfo.minimumOrder}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <span className="font-medium text-foreground">Delivery Fee:</span>
                  <span className="text-primary">{deliveryInfo.deliveryFee}</span>
                </div>
              </div>

              <Button size="lg" className="mt-6 bg-gradient-to-r from-ayur-gold to-accent text-accent-foreground">
                <Truck className="w-5 h-5 mr-2" />
                Order for Delivery
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-ayur-sage/20 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-ayur-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-12 h-12 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Osu Seriya</h3>
                  <p className="text-muted-foreground">Fast & Reliable Delivery</p>
                  <div className="flex items-center justify-center gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-ayur-gold text-ayur-gold" />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">4.8/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Outlets */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Expanding Our Reach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're rapidly expanding across the Colombo region with new outlets planned 
              to bring Ayurvedic wellness even closer to your community.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingOutlets.map((outlet, index) => (
                <Card key={index} className="text-center border-2 border-dashed border-primary/30">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-ayur-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {outlet.name}
                    </h3>
                    <Badge variant="secondary" className="mb-3">
                      {outlet.status}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      Expected: {outlet.expectedDate}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-ayur-cream to-secondary/50 rounded-lg">
                <div className="text-3xl font-bold text-primary">40+</div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Target Outlets</div>
                  <div className="text-sm text-muted-foreground">By end of 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Placeholder */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Find Your Nearest Outlet
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Use our interactive map to locate the nearest S.H.G. Hela Osu outlet and 
              get directions for easy access to our products and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-ayur-sage/10 to-secondary/20 rounded-lg p-12 text-center border-2 border-dashed border-primary/20">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Interactive Map Coming Soon
              </h3>
              <p className="text-muted-foreground mb-6">
                We're working on an interactive map feature to help you find outlets easily
              </p>
              <Button 
                className="bg-gradient-to-r from-primary to-ayur-sage"
                onClick={() => window.open('https://www.google.com/maps/search/shg+hela+osu/@6.9019249,79.8760997,12.18z?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D', '_blank')}
              >
                View Current Locations
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branches;